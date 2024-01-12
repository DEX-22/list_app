<template>
  <div class="flex flex-row justify-center">
    <div class="p-4 flex flex-col px-8">
      <div class="sticky navbar bg-base-100 text-2xl font-bold ">
        <div class="flex-1">Camping</div>
        <div class="flex-none gap-2">
<!--   <label class="swap swap-rotate"> -->
  
  <!-- this hidden checkbox controls the state -->
  <!-- <input type="checkbox" class="theme-controller" value="night" /> -->
  
  <!-- sun icon -->
  <!-- <svg class="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg> -->
  
  <!-- moon icon -->
  <!-- <svg class="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg> -->
  
<!-- </label> --> 

        </div>
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
          <li v-for="(item, index) in items" :key="index"  >
             
            <div
              class="
                flex flex-row
                justify-between
                align-center
                m-2
                bg-black bg-opacity-20
                py-3
              "
              :class="{' bg-secondary opacity-75  ':item?.isNew}"
            >
              <div class="form-control">
                <label class="label cursor-pointer rounded-xl">
                  <input
                    :value="item.checked"
                    
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
  items.value = data.toSorted((a,b)=>{
      if(a.isSelected && b.isSelected) return 1
      if(a.isSelected && !b.isSelected) return -1
      if(!a.isSelected && b.isSelected) return 1
      

  });
  // map(({name,...others})=>({name:}))
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
    title: 'Seguro?',
    text: 'si aceptas eliminaras un registro',
    icon: 'info',
    showCancelButton:true,
    confirmButtonText: 'Eliminar',
    cancelButtonText:'Cancel'
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
  supabase = await createClient(host, pass);
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

span{
  text-transform: initial;
}
</style>
