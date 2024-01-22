<template>
    <!--  <div class="
                flex flex-row
                justify-between
                align-center
                m-2
                bg-black bg-opacity-20
                py-3
              ">
              <div class="form-control">
                <label class="label cursor-pointer rounded-xl">
                  <input :value="item.checked" :checked="item.checked" @click="toggleStatusItem(item)" type="checkbox"
                    class="checkbox checkbox-primary" />
                </label>
              </div>
              <span class="w-40" style="text-transform: initial">{{ item.name }}
              </span>

              <div class="dropdown dropdown-left">
                <button class="btn btn-ghost p-1" @click="openOption(item)">
                  <svg class="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                    viewBox="0 0 512 512">
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>
                </button>
              </div>
              <button class="btn btn-ghost p-1" v-if="isPressed" @click="deleteItem(item)">
                <svg class="swap-on fill-current hover:text-red-500" xmlns="http://www.w3.org/2000/svg" width="32"
                  height="32" viewBox="0 0 512 512">
                  <polygon
                    points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
                </svg>
              </button>
            </div> -->
            <div class="flex h-20 w-80 flex-row flex-nowrap rounded-xl border-2 my-2 ">
            <div class="flex w-16 justify-center">
              <input type="checkbox" class="w-5">
            </div>
            <div class="flex h-full w-full items-center ">
              <div class="grow  px-2 py-3">
                <div class="flex justify-between">
                  <h3 class="text-md" style="text-transform:initial;">Item </h3>
                  <div>
                    A una sem.
                  </div>
                </div>
                <div class="flex justify-end">
                  <figure class="flex w-4 m-1">
                    <img class="" src="https://ui-avatars.com/api/?name=Enrique+Saenz" />
                  </figure>
                  <figure class="flex w-4 m-1">
                    <img class="" src="https://ui-avatars.com/api/?name=Claudia+Padilla" />
                  </figure>
                  <figure class="flex w-4 m-1">
                    <img class="" src="https://ui-avatars.com/api/?name=E+F" />
                  </figure>
                  <figure class="flex w-4 m-1">
                    <img class="" src="https://ui-avatars.com/api/?name=G+H" />
                  </figure>
                </div>
              </div>
              <div class="flex h-full w-16 items-center justify-center  ">
                <div>2/4</div>
              </div>
            </div>
          </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  item:{type:Object}
})

const item = props.item
</script>