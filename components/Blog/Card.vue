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
        <section class="container blogimages dark:bg-inherit">
            <div class="grid sm:grid-cols-3 gap-5"></div>
                <div class="col-span-1">
                    <div v-if="image" class="w-full h-[180px] relative">
                    <!--Blog image-->
                    <img :src="image" alt="Blog Thumbnail" class="rounded-lg w-full h-full absolute object-cover">
                    </div>
                </div>
            <!--Blog Contents-->
            <div>
                <h3 class="text-lato text-xl tracking-normal font-semibold dark:text-zinc-200 py-2">{{ title }}</h3>
                <p v-if="excerpt" class="text-lato tracking-normal font-semibold pb-3 text-base text-zinc-600 dark:text-zinc-400">{{ excerpt }}</p>
            </div>
        </section>
    </NuxtLink>
    </main>

</template>
