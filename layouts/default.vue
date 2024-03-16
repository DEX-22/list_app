<template>
    <div class="min-w-96 mx-auto h-screen relative">
        <nav class="h-1/12  bg-base-200">
            <slot name="header"> 
                TITLEEE
            </slot>
        </nav>
        <section class="overflow-y-scroll h-5/6 no-scrollbar">
            <slot />
        </section> 
        <!-- <div class=" h-20 flex justify-around items-center  absolute bottom-0 w-full">
            <button class="w-1/3 h-full">
                settings    
            </button>
            <button class="w-1/3 h-full">
                home
            </button>
            <button class="w-1/3 h-full">
                profile
            </button>

        </div> -->

    </div>
</template>
<style scoped>
 /* Hide scrollbar for Chrome, Safari and Opera */
 .no-scrollbar::-webkit-scrollbar {
          display: none;
      }
     /* Hide scrollbar for IE, Edge and Firefox */
      .no-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
    }
</style>