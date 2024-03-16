<template> 
        <div class="border-2 border-yellow-300"> 
          <div  class=" flex flex-wrap h-full gap-3 justify-center py-2">
              <Thing v-for="(item,index) in items" :key="index" :item="item" :participants="participants" />  
          </div>
        </div> 
</template>

<script lang="ts" setup>
const props = defineProps({
  items:{type:Array}
})

const items = props.items 

const participants = ref([
  'https://ui-avatars.com/api/?name=Enrique+Saenz',
'https://ui-avatars.com/api/?name=Claudia+Padilla',
'https://ui-avatars.com/api/?name=E+F',
'https://ui-avatars.com/api/?name=G+H',
'https://ui-avatars.com/api/?name=G+I',
])
</script>