<script setup lang="ts"></script>

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
    background-image: linear-gradient(45deg,#F17C58, #E94584, #24AADB , #27DBB1,#FFDC18, #FF3706);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 600% 100%;
    animation: gradient 15s linear infinite;
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
  transition: 600ms cubic-bezier(0.16, 1, 0.3, 1);
}
.blogimages:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}
.portfolioimages{
object-fit: fill;
  border-radius: 8px;
  cursor: pointer;
  transition: 600ms cubic-bezier(0.16, 1, 0.3, 1);
}
.portfolioimages:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

body {
  margin: 0;
  padding: 2rem;
  box-sizing: border-box;
}
.notion {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.notion-page-cover {
  max-width: 1000px;
  box-sizing: border-box;
  border-radius: 25px;
}

@media screen and (max-width: 600px) {
  body {
    padding: 2rem 1rem;
  }
}
</style>
