<script setup lang="ts">
type Theme = 'light' | 'dark';
const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}
</script>

<template>
  <div>
    <MenuTop></MenuTop>
    <NuxtPage></NuxtPage>
  </div>
</template>

<style>
.container{
  @apply mx-auto max-w-7xl px-10 sm:px-0;
}

.animated-text {
    background-image: linear-gradient(45deg,#1E90FF, #9370DB, #B22222, #9B30FF, #FF4500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 600% 100%;
    animation: gradient 10s linear infinite;
    animation-direction: alternate;
}

@keyframes gradient {
    0% {background-position: 0%}
    100% {background-position: 100%}
}

.blogimages{
object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  transition: 600ms cubic-bezier(0.16, 1, 0.3, 1);
}
.blogimages:hover {
  transform: scale(1.1);
}
.portfolioimages{
object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.nuxt-link-exact-active {
  font-weight: bolder;
}

body {
  margin: 0;
  padding: 1rem;
  box-sizing: border-box;
}
.notion {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  color: #777;
  font-size: large;
}
.notion-page-cover {
  max-width: 1000px;
  box-sizing: border-box;
  border-radius: 25px;
}

.dark-mode body {
  background-color: #121212;
  color: #ebf4f1;
}
.sepia-mode body {
  background-color: #f1e7d0;
  color: #433422;
}

@media screen and (max-width: 600px) {
  body {
    padding: 2rem 1rem;
  }
}

.animated-top {
  background-image: linear-gradient(45deg, #1E90FF, #9370DB, #B22222, #9B30FF, #FF4500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-size: 600% 100%;
  animation: gradient 10s linear infinite;
  animation-direction: alternate;
}

@keyframes gradient {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 100%;
  }
}
.glowing-navbar { /* or any other color you want */
  box-shadow: 0 0 2px 2px rgba(127, 0, 255, 0.2);
}
</style>
