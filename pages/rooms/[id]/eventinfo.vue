<template>
    
    <NuxtLayout>
        <template #title>
            {{ title }}
        </template>
    </NuxtLayout>
</template>
<script setup> 

const {title} = useTitle()
</script>