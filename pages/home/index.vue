
<template>
  <NuxtLayout name="default">
    <template #title>
      Camping
    </template> 
    <section class="flex flex-row justify-center  w-full bg-slate-800 bg-opacity-50 py-2">
       <div class="m-1 rounded-md bg-slate-700 px-8 py-3 w-9/10">
        Crear nuevo evento
       </div>
    </section>
    <section class="w-full flex flex-wrap justify-center  p-4 ">
        <div @click="$router.push({name:'rooms'})" class="text-center m-1 rounded-md bg-slate-700 px-2 py-3 w-48 h-auto aspect-square my-4">
          <Icon name="mdi:account-group-outline" class="w-28 h-28" />
          <h3 class="text-center font-bold text-2xl">
            Rooms  
          </h3>
      </div>
      <div class="text-center m-1 rounded-md bg-slate-700 px-2 py-3 w-48 h-auto aspect-square my-4">
        <Icon name="mdi:door-open" class="w-28 h-28" />
        <h3 class="text-center font-bold text-2xl">
          My events
        </h3>
      </div>

    </section>

    <modal />
  </NuxtLayout>
</template>
<script lang="ts" setup> 
import Swal from 'sweetalert2/dist/sweetalert2.js'; 
import { createClient } from '@supabase/supabase-js';
import type { NuxtLayout } from '#build/components';

definePageMeta({
  layout: false,
})  

</script>
<style>
html,
body,
#app {
  height: 100hv;
}
</style>
