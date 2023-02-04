<script lang="ts" setup>

defineProps<{
    title: string;
    image: string;
    excerpt?: string;
    tag: string;
}>();
</script>

<template>

    <main>
        <!--Portfolio grid starts here-->
        <section class="container portfolioimages dark:bg-zinc-900">
            <div class="grid sm:grid-cols-2 gap-4"></div>
                <div class="col-span-1">
                    <div v-if="image" class="w-full h-[180px] relative">
                    <!--Portfolio image-->
                    <img :src="image" alt=" Thumbnail" class="rounded-t-lg w-full h-full absolute object-contain pt-8">
                    </div>
                </div>
            <!--portfolio Contents-->
            <div class="p-3">
                <h3 class="text-lato text-xl tracking-normal font-semibold dark:text-zinc-200 py-2">{{ title }}</h3>
                <p v-if="tag" class="font-bold text-zinc-700 dark:text-zinc-200">{{ tag }}</p>
                <p v-if="excerpt" class="text-lato tracking-normal font-semibold py-1 text-base text-zinc-600 dark:text-zinc-400">{{ excerpt }}</p>
            </div>
        </section>
    </main>

</template>
