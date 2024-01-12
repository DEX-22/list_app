<template>
  <div class="flex flex-row justify-center">
    <div class="p-4 flex flex-col px-8">
      <div class="sticky navbar bg-base-100 text-2xl font-bold ">
        <div class="flex-1">Camping</div>
        <div class="flex-none gap-2"></div>
      </div>
      <section class="flex flex-row justify-around max-w-96">
        <input
          v-model="product"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs mx-4"
        />
        <button @click="insertItem" class="btn btn-primary">Agregar</button>
      </section>
      <section class="flex flex-row justify-center my-4">
        <ul class="menu w-96 h-7/8 rounded-box">
          <li v-for="(item, index) in items" :key="index" class="" draggable>
            <div
              class="
                flex flex-row
                justify-between
                align-center
                m-2
                bg-black bg-opacity-20
                py-3
              "
            >
              <div class="form-control">
                <label class="label cursor-pointer rounded-xl">
                  <input
                    :value="item.checked"
                    :class="{'bg-secondary bg-opacity-75':item?.isNew}"
                    :checked="item.checked"
                    @click="toggleStatusItem(item)"
                    type="checkbox"
                    class="checkbox checkbox-primary"
                  />
                </label>
              </div>
              <span class="w-40" style="text-transform: initial"
                >{{ item.name }}
              </span>
              <button class="btn btn-ghost p-1" @click="deleteItem(item)">
                <svg
                  class="swap-on fill-current hover:text-red-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 512 512"
                >
                  <polygon
                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"
                  />
                </svg>
              </button>

              <!-- hamburger icon -->
              <!-- <input v-model="item.color" type="color" class="w-10 h-10" /> -->
              <!-- <svg
                class="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path
                  d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
                />
              </svg> -->
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import 'sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { createClient } from '@supabase/supabase-js';
const {
  public: { host, pass },
} = useRuntimeConfig();
const $swal = inject(Swal);

const items = ref([]);
const product = ref('');

let supabase;
let channel;

async function getList() {
  const { data } = await supabase.from('items').select();
  items.value = data.map(({name,...others})=>({name:name.toLowerCase(),...others})).toSorted((a,b)=>a.name.at(0)-b.name.at(0));
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
      items.value.splice(index, 1);
    }
  }  
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
        // const index = items.value.findIndex((el) => el.id == payload.new.id);

        items.value.unshift({...payload.new,isNew:true}); 
        product.value = '';
      }
    )
    .subscribe();
 
}

async function connectToUpdateItemChannel() {
  const subs = await supabase
    .channel('items')
    .on(
      'postgres_changes',
      { event: 'UPDATE', schema: 'public', table: 'items' },
      (payload) => {
        console.log(payload);
        
        const index = items.value.findIndex((el) => el.id == payload.record.id);
        Object.assign(items.value[index],payload.record);
        console.log('Change received!', payload);
      }
    )
    .subscribe();
 
}
onMounted(async () => {
  supabase = createClient(host, pass);
    await Promise.all([
    await connectToUpdateItemChannel(),
    await connectToInsertItemChannel(),
  ]);
  await getList();
 
});

// Create a single supabase client for interacting with your database
</script>
<style>
html,
body,
#app {
  height: 100dhv;
}
</style>
