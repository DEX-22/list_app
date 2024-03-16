
<template>
  <NuxtLayout name="default">
    <template #header>
      <div class="bg-slate-800 navbar py-4  text-2xl font-bold sticky">
        <div class="flex-1">Camping</div>
        <div class="flex-none gap-2"></div>
      </div>
    </template> 
    <section class="flex flex-row justify-center  w-full bg-slate-800 bg-opacity-50 py-2">
       <div class="m-1 rounded-md bg-slate-700 px-8 py-3 w-9/10">
        Crear nuevo evento
       </div>
    </section>
    <section class="w-full flex flex-wrap justify-center  p-4 ">
        <div @click="$router.push({name:'rooms'})" class="m-1 rounded-md bg-slate-700 px-8 py-3 w-1/2 h-auto aspect-square my-4">
          <Icon name="mdi:account-group-outline" class="w-28 h-28" />
          <h3 class="text-center font-bold text-2xl">
            Rooms  
          </h3>
      </div>
      <div class="m-1 rounded-md bg-slate-700 px-8 py-3 w-1/2 h-auto aspect-square my-4">
        <Icon name="mdi:door-open" class="w-28 h-28" />
        <h3 class="text-center font-bold text-2xl">
          Rooms  
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
