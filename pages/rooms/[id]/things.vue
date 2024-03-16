<template>
    <NuxtLayout >
        <template #title>
            {{ title }}
        </template>
        <ListItem :items="listOfThings" />
    </NuxtLayout>
</template>
<script setup>
import things from '../services/things' ;

const {title} = useTitle()

let list = await things.getThings()
  


 const listOfThings = ref(list.map(e=>e))


</script>