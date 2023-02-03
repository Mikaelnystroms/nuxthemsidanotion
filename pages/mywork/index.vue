
<script lang="ts" setup>
const { data: projects } = await useFetch('https://notion-api.splitbee.io/v1/table/f0b16161ea0a4bcabded769f32c8dccb')
</script>
<template>
    <main>
        <section class="container py-10">
            <div class="grid sm:grid-cols-2 gap-5">
                <PortfolioCard class="portfolioimages"
                    v-for="project in projects"
                    :key="project"
                    :title="project.Name"
                    :excerpt="project.Text"
                    :image="project['Files & media'][0].url"
                    :tag="project.Tag"
                />
            </div>
        </section>
    </main>
</template>