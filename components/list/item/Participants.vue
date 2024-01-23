<template>
    <div class="flex justify-end">
        <div v-if="participants.length <= 4" class="flex justify-end">
            <figure class="m-1 flex w-5">
                <img class="mask mask-circle" :src="participants[0]" />
            </figure>
            <figure class="m-1 flex w-5">
                <img class="mask mask-circle" :src="participants[1]" />
            </figure>
            <figure class="m-1 flex w-5">
                <img class="mask mask-circle" :src="participants[2]" />
            </figure>
            <figure class="m-1 flex w-5">
                <img class="mask mask-circle" :src="participants[3]" />
            </figure>
        </div>
        <div v-else class="flex justify-end">
             <figure class="m-1 flex w-5 ">
                <img class="mask mask-circle" :src="participants[0]" />
            </figure>
            <figure class="m-1 flex w-5">
                <img class="mask mask-circle" :src="participants[1]" />
            </figure>
            <figure class="m-1 flex w-5">
                <img class="mask mask-circle" :src="participants[2]" />
            </figure>
            <div class="m-1 w-5 h-5 flex justify-center items-center   rounded-xl  bg-neutral text-neutral-content  "> 
                    <span class="p-0 m-0 text-xs ">+{{ participants.length - 3 }}</span> 
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const props = defineProps({
    participants: {
        type: Array
    }
})

const participants = props.participants
</script>