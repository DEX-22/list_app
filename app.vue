<template>
<div>

  <VitePwaManifest />
  
  <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
</div> 
</template>
<script lang="ts" setup>

useHead({ meta: { name: 'theme-color', content: 'night' } });


</script>