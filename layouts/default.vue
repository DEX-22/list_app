<template>
    <div class="min-w-96 mx-auto h-screen relative grid grid-cols-1 grid-rows-12">
        <nav class="bg-slate-800  row-span-1">
            <div class="navbar py-4  text-2xl font-bold sticky">
                <div class="flex-1">
                    <slot name="title">
                        TITLEEE
                    </slot>
                </div>
                <slot name="action">

                </slot>
            </div>

        </nav>
        <section class="overflow-y-scroll no-scrollbar row-span-11">
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
    -ms-overflow-style: none;
    /* IE and Edge */
    scrollbar-width: none;
    /* Firefox */
}
</style>