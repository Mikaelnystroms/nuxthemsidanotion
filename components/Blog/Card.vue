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
            <div class="grid sm:grid-cols-3 mx-auto"></div>
                <div class="col-span-1 shadow-lg">
                    <div v-if="image" class="w-full h-[180px] relative">
                    <!--Blog image-->
                    <img :src="image" alt="Blog Thumbnail" class="rounded-xl w-full h-full absolute object-cover">
                    </div>
                </div>
            <!--Blog Contents-->
            <div class="p-2 shadow-lg rounded-lg">
                <h3 class="text-lato text-xl tracking-normal font-semibold mb-2 dark:text-zinc-200 pt-2">{{ title }}</h3>
                <p v-if="excerpt" class="text-lato tracking-normal font-semibold py-1 text-base text-zinc-600 dark:text-zinc-400">{{ excerpt }}</p>
            </div>
        </section>
    </NuxtLink>
    </main>

</template>
