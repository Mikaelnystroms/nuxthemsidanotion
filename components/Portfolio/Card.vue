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
        <section class="container py-16 shadow-lg rounded-lg dark:bg-zinc-900">
            <div class="grid sm:grid-cols-2 gap-4"></div>
                <div class="col-span-1">
                    <div v-if="image" class="w-full h-[350px] relative">
                    <!--Portfolio image-->
                    <img :src="image" alt="Blog Thumbnail" class="w-full h-full absolute object-cover">
                    </div>
                </div>
            <!--Blog Contents-->
            <div class="p-5">
                <h3 class="animated-text text-2xl font-bold mb-3">{{ title }}</h3>
                <p v-if="tag" class="font-bold text-zinc-700 dark:text-zinc-200">{{ tag }}</p>
                <p v-if="excerpt" class="text-lato mb-3 py-2 text-zinc-600 dark:text-zinc-400">{{ excerpt }}</p>
            </div>
        </section>
    </main>

</template>
