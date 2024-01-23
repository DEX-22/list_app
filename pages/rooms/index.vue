<template>
    <NuxtLayout>
        <template #header>
            <div>
                <div class="flex">
                    <h2 class="px-2 text-2xl w-3/4">
                        SALAS
                    </h2>
                    <div class="w-1/4 flex justify-center">
                        <button @click="goToNewRoom" class="btn btn-outline ">
                            +
                        </button>
                    </div>
                </div>
                <p class="text-end px-2 h-4 ">
                    11/02/2024 6:00pm
                </p>
            </div>

        </template>
        <div class="py-4 flex justify-center">
            <div class="flex flex-col">
                <RoomItem @click="goToItem" />
                <RoomItem @click="goToItem" />
                <RoomItem @click="goToItem" />
                <RoomItem @click="goToItem" />
            </div>
        </div>
    </NuxtLayout>
</template>
<script lang="ts" setup>

const router = useRouter()
function goToItem() {
    router.push('/home')
}
function goToNewRoom(){
    router.push('/rooms/create')
}

</script>