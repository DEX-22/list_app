<template>
    <div class="flex h-20 w-80 flex-row flex-nowrap rounded-xl border-2 my-2">
        <figure class="flex w-16 px-2">
            <img class="" src="https://ui-avatars.com/api/?name=Enrique+Saenz" />
        </figure>
        <div class="flex h-full w-full items-center ">
            <div class="grow   px-2 py-3">
                <h3 class="text-md" style="text-transform:initial;">{{ props.name }}</h3>
                <div class="text-end text-sm">{{ eventDate }}</div>
            </div>
            <div class="flex h-full w-16 items-center justify-center  ">
                <div>
                    7 <Icon name="mdi:users" class="w-5 h-5" />
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

const props = defineProps({
    name: {type: String,required: true},
    meeting: {type: String,required: true},
})

const eventDate = computed(()=>{
    const date = new Date(props.meeting)
    return date.toDateString()
})
</script>