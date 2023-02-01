<script lang="ts" setup>

defineProps<{
    title: string;
    image: string;
    excerpt?: string;
}>();
</script>

<template>

    <main>
        <!--Blog grid starts here-->
        <section class="container py-16">
            <div class="grid sm:grid-cols-2 gap-8"></div>
                <div class="col-span-1 shadow-lg">
                    <div v-if="image" class="w-full h-[350px] relative">
                    <!--Blog image-->
                    <img :src="image" alt="Blog Thumbnail" class="w-full h-full absolute object-cover">
                    </div>
                </div>
            <!--Blog Contents-->
            <div class="p-5">
                <h3 class="text-2xl font-bold mb-3">{{ title }}</h3>
                <p v-if="excerpt" class="mb-3">{{ excerpt }}</p>
            </div>

        </section>
    </main>

</template>
