<script setup lang="ts">
const route = useRoute()
const { $notion } = useNuxtApp()
const { data: posts } = await useFetch('https://notion-api.splitbee.io/v1/table/5a4f43e5339b464f9aa0f5ab1cdd6a4d')
const { data, pending } = useLazyAsyncData(`notion-${route.params.id}`, () =>
  $notion.getPageBlocks(route.params.id.toString())
)
const { mapPageUrl, pageLinkOptions } = useProps()
type Theme = 'light' | 'dark';
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}
</script>

<template>
  <section>
    <div v-if="pending">Loading... </div>
        <div v-else>
          <NotionRenderer class="py-16" :blockMap="data" fullPage prism katex :mapPageUrl="mapPageUrl" :pageLinkOptions="pageLinkOptions" />
      </div>
  </section>
</template>