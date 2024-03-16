<template>
    <NuxtLayout>
        <template #title>  
            Rooms 
        </template>
        <template #action>
            <button @click="goToNewRoom">
                Click
            </button>
        </template>
        <div class="py-4 flex justify-center">
            <div class="flex flex-col">
                <RoomItem v-for="(room,i) in listOfRooms" v-bind="room" :key="i" @click="goToItem(room.name)" /> 
            </div>
        </div>
    </NuxtLayout>
</template>
<script lang="ts" setup>
import type { IRoom } from '../interfaces/room';
import rooms from '../services/rooms';
 
const router = useRouter()
const listOfRooms : Ref<Array<IRoom>> = ref([])

onMounted(async ()=>{
    await listRooms()
})

function goToItem(page: string) {
    router.push(`/rooms/${page}`)
}
function goToNewRoom(){
    router.push('/rooms/create')
}

async function listRooms(){
    try {
        
    const listRooms = await rooms.getRooms()
    listRooms.forEach((element:IRoom) => {
        listOfRooms.value.push(element)
    });
    } catch (error) {
        console.log(error.message??error)
    }
}

</script>