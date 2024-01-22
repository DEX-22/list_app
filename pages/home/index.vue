
<template>
  <NuxtLayout name="default">
       <template #header>
        <div class="navbar  text-2xl font-bold sticky">
        <div class="flex-1">Camping</div>
        <div class="flex-none gap-2"></div>
      </div>
      </template>  
      <ListAddItem />
      <section class="flex flex-row justify-center my-4 ">
        <ul class="menu w-96 h-7/8 rounded-box flex justify-center">
          
          <li v-for="(item, index) in itemList" :key="index" class="flex flex-col mx-auto">
            <ListItem :item="item" /> 
          </li>
        </ul>
      </section> 
    <modal /> 
    </NuxtLayout>
</template>
<script lang="ts" setup>
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { createClient } from '@supabase/supabase-js';
import type { NuxtLayout } from '#build/components';

definePageMeta({
  layout: false,
}) 
const {
  public: { host, pass },
} = useRuntimeConfig();
const $swal = inject(Swal);

const items = ref([]);
const itemList = computed(() => {
  const list = [];
  items.value.forEach((el) => {
    el.checked ? list.push(el) : list.unshift(el);
  });

  return list;
});
const product = ref('');

let supabase;
let channel;

async function getList() {
  const { data } = await supabase.from('items').select();
  items.value = data;
}
async function insertItem() {
  const item = await supabase.from('items').insert({
    name: product.value,
    checked: false,
  });
  console.log('item', item);
  await getList();
}
async function deleteItem(item) {
  const { isConfirmed } = await Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue',
    icon: 'error',
    confirmButtonText: 'Cool',
  });

  if (isConfirmed) {
    const val = await supabase.from('items').delete().eq('id', item.id);
    if (val.status == 204) {
      const index = items.value.findIndex((el) => el.id == item.id);
      items.splice(index, 1);
    }
  }

  console.log(isConfirmed);
  //items
}
async function toggleStatusItem(item) {
  const itemChecked = await supabase
    .from('items')
    .update({ checked: !item.checked })
    .eq('id', item.id);
}

async function connectToInsertItemChannel() {
  channel = await supabase
    .channel('items')
    .on(
      'postgres_changes',
      { event: 'INSERT', schema: 'public', table: 'items' },
      (payload) => {
        const index = items.value.findIndex((el) => el.id == payload.new.id);
        items.value.push(payload.new);
        console.log('NEW received!', payload);
        product.value = '';
      }
    )
    .subscribe();

  console.log(channel);
}

async function connectToUpdateItemChannel() {
  const subs = await supabase
    .channel('items')
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'items' },
      (payload) => {
        const index = items.value.findIndex((el) => el.id == payload.new.id);
        items.value[index] = payload.new;
        console.log('Change received!', payload);
      }
    )
    .subscribe();

  console.log(subs);
}
onMounted(async () => {
  supabase = createClient(host, pass);
  const [updateChannel, insertChannel] = await Promise.all([
    await connectToUpdateItemChannel(),
    await connectToInsertItemChannel(),
  ]);
  await getList();

  console.log(updateChannel, insertChannel);
});

function openOption() {
  $refs.my_modal_1.showModal();
}

// Create a single supabase client for interacting with your database
</script>
<style>
html,
body,
#app {
  height: 100hv;
}
</style>
