<template>
<div>

  <VitePwaManifest />
   
      <NuxtPage /> 
</div> 
</template>
<script lang="ts" setup>

useHead({ meta: { name: 'theme-color', content: 'night' } });


</script>