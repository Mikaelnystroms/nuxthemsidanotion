<script lang="ts" setup>
type Theme = 'light' | 'dark';
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}
</script>
<template>
    <nav class="bg-inherit text-slate-600">
        <div class="container flex justify-between">    
            <NuxtLink to="/" class="saturate-150 transition duration-500 hover:scale-110 h-10 w-10">
                <img src="~/assets/Iconsax/Linear/fd2.svg"/>
            </NuxtLink>
            <ul class="gap-5 py-2 flex rounded-full px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 transition animated-top">
                <li class="font-medium nuxt-link-exact-active"><NuxtLink to="/">Home</NuxtLink></li>
                <li class="font-medium nuxt-link-exact-active"><NuxtLink to="/blog">Blog</NuxtLink></li>
                <li class="font-medium nuxt-link-exact-active"><NuxtLink to="/about">About</NuxtLink></li>
                <li class="font-medium nuxt-link-exact-active"><NuxtLink to="/mywork">Projects</NuxtLink></li>
            </ul>
            <button class="ml-5" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
              <svg
                v-if="$colorMode.value == 'dark'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-50"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"/>
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd"/>
              </svg>
            </button>
        </div>
    </nav>
</template>

