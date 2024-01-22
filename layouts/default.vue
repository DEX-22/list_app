<template>
    <div class="w-96 mx-auto h-screen relative">
        <nav class="h-1/12 border-b-2 py-4 bg-base-200">
            <slot name="header">
                HELLO
            </slot>
        </nav>
        <section class="overflow-y-scroll h-5/6">
            <slot />
        </section>
        <footer class="h-1/12">
            <MenuBottom />
        </footer>
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