<script lang="ts" setup>

defineProps<{
    title: string;
    image: string;
    excerpt?: string;
    slug: string;
}>();
</script>

<template>

    <main>
        <NuxtLink :to="`/blog/${slug}`">
        <!--Blog grid starts here-->
        <section class="container blogimages dark:bg-zinc-900">
            <div class="grid sm:grid-cols-3"></div>
                <div class="col-span-1 shadow-lg">
                    <div v-if="image" class="w-full h-[180px] relative">
                    <!--Blog image-->
                    <img :src="image" alt="Blog Thumbnail" class="rounded-t-lg w-full h-full absolute object-cover">
                    </div>
                </div>
            <!--Blog Contents-->
            <div class="p-1 shadow-lg rounded-lg">
                <h3 class="text-lato text-xl tracking-normal font-semibold mb-3 dark:text-zinc-200 pt-2">{{ title }}</h3>
                <p v-if="excerpt" class="text-lato tracking-normal text-sm mb-3 text-zinc-600 dark:text-zinc-400 pb-1">{{ excerpt }}</p>
            </div>
        </section>
    </NuxtLink>
    </main>

</template>
