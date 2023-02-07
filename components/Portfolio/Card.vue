<script lang="ts" setup>

defineProps<{
    title: string;
    image: string;
    excerpt?: string;
    tag: string;
    link: string;
}>();
</script>

<template>

    <main>
        <!--Portfolio grid starts here-->
        <section class="container portfolioimages">
            <div class="grid sm:grid-cols-2 gap-4"></div>
                <div class="col-span-1">
                    <div v-if="image" class="w-full h-[180px] relative">
                    <!--Portfolio image-->
                    <img :src="image" alt=" Thumbnail" class="rounded-t-lg w-full h-full absolute object-contain pt-8">
                    </div>
                </div>
            <!--portfolio Contents-->
            <div class="p-3">
                <h3 class="text-lato text-xl tracking-normal font-semibold py-2 text-zinc-600 dark:text-zinc-200">{{ title }}</h3>
                <p v-if="tag" class="font-bold text-zinc-600 dark:text-zinc-400">{{ tag }}</p>
                <p v-if="excerpt" class="text-lato tracking-normal font-semibold py-1 text-base text-zinc-600 dark:text-zinc-200">{{ excerpt }}</p>
                <NuxtLink v-if="link" class="text-lato tracking-normal font-semibold py-1 text-base text-zinc-600 dark:text-zinc-200" :href="link" target="_blank" >Live Demo</NuxtLink>
            </div>
        </section>
    </main>

</template>
