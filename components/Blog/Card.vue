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
        <section class="container py-16">
            <div class="grid sm:grid-cols-3 gap-5"></div>
                <div class="col-span-1 shadow-lg">
                    <div v-if="image" class="w-full h-[180px] relative">
                    <!--Blog image-->
                    <img :src="image" alt="Blog Thumbnail" class="w-full h-full absolute object-cover">
                    </div>
                </div>
            <!--Blog Contents-->
            <div class="p-2">
                <h3 class="text-xl font-semibold mb-3">{{ title }}</h3>
                <p v-if="excerpt" class="text-sm mb-3">{{ excerpt }}</p>
                <div>Read more!</div>
            </div>
        </section>
    </NuxtLink>
    </main>

</template>
