<template>
     <div>
    <div class="bg-slate-800 collapse my-1">
      <input type="radio" name="my-accordion-1" checked="checked" />
      <div class="collapse-title text-xl font-medium"> {{ title }}</div>
      <div class="collapse-content flex justify-center">
        <div >
        <slot name="content" />
        </div>
      </div>
    </div> 
  </div>
</template>
<script lang="ts" setup>

const props = defineProps({
  title:{
    type: String,default: 'Categoria 1'
  }
})

const title = props.title

</script>