<script lang="ts" setup>
</script>
<template>
    <nav class="bg-inherit text-slate-500">
        <div class="container flex justify-between">
            <NuxtLink to="/">
                <img src="~/assets/framfordatorn.png" class="h-12 w-12 mt-0" />
            </NuxtLink>
            <ul class="flex gap-10">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/blog">Blog</NuxtLink></li>
                <li><NuxtLink to="/contact">Resumé</NuxtLink></li>
                <li><NuxtLink to="/mywork">Projects</NuxtLink></li>
            </ul>
        </div>
    </nav>
</template>

