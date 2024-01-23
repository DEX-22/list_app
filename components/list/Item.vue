<template> 
        <div> 
          <div v-for="(item,index) in items" :key="index" class="">
          <div class="my-2 flex h-20 w-80 flex-row flex-nowrap rounded-xl  border-2 border-slate-600 bg-slate-700">
            <div class="flex w-16 justify-center">
              <label class="label cursor-pointer rounded-xl">
                
              <input :value="item.checked" :checked="item.checked" @click="toggleStatusItem(item)" type="checkbox"
                    class="checkbox checkbox-primary" />
                </label>
            </div>
            <div class="flex h-full w-full items-center">
              <div class="grow px-2 py-3">
                <div class="flex  ">
                  <h3 class="text-md" style="text-transform:initial;">{{ item.name }}</h3>
                   
                </div>
                <div class="flex justify-end">
                  <ListItemParticipants :participants="participants"/> 
                </div>
              </div>
              <div class="flex h-full w-16 items-center justify-center">
                <div>2/4</div>
              </div>
            </div>
          </div>  
        </div>
        </div>
<!--  <button class="btn btn-ghost p-1" v-if="isPressed" @click="deleteItem(item)">
                <svg class="swap-on fill-current hover:text-red-500" xmlns="http://www.w3.org/2000/svg" width="32"
                  height="32" viewBox="0 0 512 512">
                  <polygon
                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </button> -->
</template>

<script lang="ts" setup>
const props = defineProps({
  items:{type:Array}
})

const items = props.items 

const participants = [
  'https://ui-avatars.com/api/?name=Enrique+Saenz',
'https://ui-avatars.com/api/?name=Claudia+Padilla',
'https://ui-avatars.com/api/?name=E+F',
'https://ui-avatars.com/api/?name=G+H',
'https://ui-avatars.com/api/?name=G+I',
]
</script>