<template>
  <div class="flex flex-row justify-center">
    <div class="p-4 flex flex-col">
      <section class="navbar">
        <h2 class="title">LISTA DE COSAS PARA ACAMAPAR</h2>
      </section>
      <section class="flex flex-row justify-around max-w-96">
        <input
          v-model="product"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs"
        />
        <button @click="insertItem" class="btn btn-primary">Agregar</button>
      </section>
      <section class="flex flex-row justify-center my-4">
        <ul class="menu bg-base-200 w-96 rounded-box">
          <li v-for="(item, index) in items" :key="index" class="" draggable>
            <div class="flex flex-row justify-between align-center m-2">
              <div class="form-control">
                <label class="label cursor-pointer">
                  <input
                    :value="item.checked"
                    :checked="item.checked"
                    @click="toggleStatusItem(item)"
                    type="checkbox"
                    class="checkbox checkbox-primary"
                  />
                </label>
              </div>
              <span class="w-40">{{ item.name }}</span>
              <!-- hamburger icon -->
              <svg
                class="swap-off fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 512 512"
              >
                <path
                  d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z"
                />
              </svg>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { createClient } from '@supabase/supabase-js';
const {
  public: { host, pass },
} = useRuntimeConfig();
console.log(host);
const items = ref([]);
const product = ref('');
let supabase;
async function getList() {
  const { data } = await supabase.from('items').select();
  items.value = data;
}
async function insertItem() {
  const items = await supabase.from('items').insert({
    name: product.value,
    checked: false,
  });

  await getList();
}
async function toggleStatusItem(item) {
  const itemChecked = await supabase
    .from('items')
    .update({ checked: !item.checked })
    .eq('id', item.id);
}
async function syncData() {
  const subs = await supabase
    .channel('room1')
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
// await syncData();
onMounted(async () => {
  supabase = createClient(host, pass);
  await getList();
});

// Create a single supabase client for interacting with your database
</script>
