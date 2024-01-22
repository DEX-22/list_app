<template>
    <div class="py-4 flex justify-center"> 
        <div class="flex flex-col">
            <RoomItem @click="goToItem" />
        <RoomItem @click="goToItem" />
        <RoomItem @click="goToItem" />
        <RoomItem @click="goToItem" />
        </div> 
    </div>
</template>
<script lang="ts" setup>

const router = useRouter()
function goToItem(){
    router.push('/home')
}

</script>