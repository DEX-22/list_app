<template>
    <div class="my-2 flex h-20 w-80 flex-row flex-nowrap rounded-xl  border-2 border-slate-600 bg-slate-700">
                <div class="flex w-16 justify-center">
                  <label class="label cursor-pointer rounded-xl">
                    
                      <input :value="item.checked" :checked="item.checked" @click="toggleStatusItem(item)" type="checkbox"
                        class="checkbox checkbox-primary" />
                    </label>
                </div>
              <div class="flex h-full w-full items-center">
                <div class="grow px-2 py-3">
                  <div class="flex  ">
                    <h3 class="text-md" style="text-transform:initial;">{{ item.name }}</h3>
                    
                  </div>
                  <div class="flex  ">
                    <ListItemParticipants :participants="participants"/> 
                  </div>
                </div>
                <div class="flex h-full w-16 items-center justify-center">
                  <div>2/4</div>
                </div>
            </div>
        </div>
</template>
<script setup> 
const {participants,item} = defineProps({
    participants: {
        type: Array,
        required:true
    },
    item:{
        type: Object,
        required:true
    }
})

</script>