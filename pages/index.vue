<!-- <script setup lang="ts">
const { $notion } = useNuxtApp();
const { data } = await useAsyncData("notion-index", () => $notion.getPageBlocks("f421af0d90ad48baa52d0aa0c5a77cd0"));
const { mapPageUrl, pageLinkOptions } = useProps();
</script>

<template>
  <div>
    <NotionRenderer :blockMap="data" fullPage prism katex :mapPageUrl="mapPageUrl" :pageLinkOptions="pageLinkOptions" />
  </div>
</template> -->

<script lang="ts" setup>
</script>
<template>
    <main>
        <section class="hero bg-transparent py-10">
            <div class="container flex w-1/2 items-center py-20">
                <div>
                    <p class="font-bold text-slate-400">Hi, my name is</p>
                    <h1 class="text-5xl font-bold py-2">Mikael Nyström</h1>
                    <h1 class="text-5xl font-bold py-5">I build <span class="animated-text">Technology</span> and <span class="animated-text">Teams</span></h1>
                    <p class="text-lato">I'm a tech-savvy and action-oriented individual with a diverse background in
                <span class="font-bold">Technical Operations and the Swedish Military.</span> I am currently studying <span class="font-bold">Artificial Intelligence</span> and <span class="font-bold">Business Consulting</span> I'm also a big believer
                in continuous learning and personal growth. In everything I do, I strive to be a positive and helpful
                leader with a passion for <span class="font-bold">helping others succeed.</span></p>
                </div>
            </div>
        </section>
    </main>
</template>