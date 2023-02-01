<script lang="ts" setup>
const { $notion } = useNuxtApp();
const { data } = await useAsyncData("notion-index", () => $notion.getPageBlocks("6857147e9f46465ab502a3d1587bc4da"));
</script>
<template>
        <div class="text-center">
            <h1 class="text-4xl font-bold py-8">I'm <span class="animated-text">Mikael Nyström</span> and </h1>
            <h1 class="text-4xl font-bold">this is my resumé</h1>
            <div class="flex justify-center py-8">
            <img src="~/assets/gmailbild.png" class="blogimages"/>
            </div>
        </div>
    <div class="text-center">  
        <NotionRenderer :blockMap="data" fullPage />
    </div>
<!-- <section class="container flex justify-center py-10">
    <div>
        <img src="~/assets/vinkning.png" id="vinkbild" alt="Hello" />
            <ul class="flex justify-between py-10 gap-10">
                <li><NuxtLink to="mailto:Mikaelnystromm@gmail.com" class="blogimages animated-text text-3xl font-bold">E-mail</NuxtLink></li>
                <li><NuxtLink to="https://linkedin.com/in/mikael-nyström-07179293" class="blogimages animated-text text-3xl font-bold">Linkedin</NuxtLink></li>
                <li><NuxtLink to="callto:0708129322" class="blogimages animated-text text-3xl font-bold">Phone</NuxtLink></li>
            </ul>
    </div>
</section> -->
</template>