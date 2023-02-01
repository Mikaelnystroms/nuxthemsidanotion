<script setup lang="ts">
const route = useRoute()
const { $notion } = useNuxtApp();
const { data } = await useAsyncData("notion-index", () => $notion.getPageTable("5a4f43e5339b464f9aa0f5ab1cdd6a4d"));
const { data: posts } = await useFetch('https://notion-api.splitbee.io/v1/table/5a4f43e5339b464f9aa0f5ab1cdd6a4d')
const { mapPageUrl, pageLinkOptions } = useProps();
</script>

<template>
  <div class="py-20">
    <main>
        <section class="container py-16">
            <div class="grid sm:grid-cols-3 gap-5">
                <BlogCard class="blogimages"
                    v-for="post in posts"
                    :key="post"
                    :title="post.Name"
                    :excerpt="post.Text"
                    :image="post['Files & media'][0].url"
                    :slug="post.idnr"
                />
            </div>
        </section>
    </main>
    <!-- <NotionRenderer 
    v-for="post in posts"
    :blockMap="data" fullPage prism katex :mapPageUrl="mapPageUrl" :pageLinkOptions="pageLinkOptions" /> -->
  </div>
</template>
