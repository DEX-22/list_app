<template>
    <NuxtLayout>
        <template #title>{{ myId }}</template>

        <section class="flex flex-wrap justify-center gap-4">
            <div v-for="(item,index) in itemsRef" :key="index" @click="goTo(item.route)"  :class="item.class">
                <Icon :name="item.icon" />
                <span >
                    {{ item.title }}
                </span>
            </div> 
        </section>
    </NuxtLayout>
</template>
<script setup>
const route = useRoute()
const router = useRouter()
const id = route.params.id
const myId = ref(id)

const items = [
    {
        route: 'participants',
        title:'Participants',
        icon:'mdi:users',
        class: 'item-card'
    },
    {
        route: 'things',
        title:'Things',
        icon:'mdi:food',
        class: 'item-card'
    },
    {
        route: 'eventinfo',
        title:'Info of events',
        icon:'mdi:info',
        class: 'item-card'
    },
    {
        route: 'conversations',
        title:'Conversations',
        icon:'mdi:users',
        class: 'item-card'
    }
]

const itemsRef = ref(items)



function goTo(page) {
    const currentRoute = route.fullPath.split('/')
    currentRoute.push(page)
    
    router.push(currentRoute.join('/'))
}


</script>
<style scoped>
.item-card {
    @apply text-center m-1 rounded-md bg-slate-700 px-2 py-3 w-44 h-auto aspect-square my-4;

    .icon {
        @apply w-28 h-28;
    }
    span{
        @apply block w-full my-2;
    }
}
</style>