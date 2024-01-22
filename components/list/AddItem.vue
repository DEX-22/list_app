<template>
    
    <section class="flex flex-row justify-around max-w-96">
        <input
          v-model="product"
          type="text"
          placeholder="Type here"
          class="input input-bordered w-full max-w-xs mx-4"
        />
        <button @click="insertItem" class="btn btn-primary">Agregar</button>
      </section>
</template>
<script lang="ts" setup>
const props = defineProps({
    product:{
        type: Object,
    }
})
const emit = defineEmits(['click'])


const product = props.product

const insertItem = () =>{

    emit('click')
}

</script>