<template>
    <!-- Page Name Section-->
    <div id="page-name-sec">
        <div class="parallax-style page-name-sec">
            <div class="pattern">
                <div class="container">
                    <p class="page-name">
                        Подробнее
                    </p><!-- /.page-name -->
                    <p class="page-location">
                        <NuxtLink to="/">Главная</NuxtLink>
                        <NuxtLink v-for="(page, key) in pages" :key="key" :to="page.link">{{ page.name }}</NuxtLink>
                        {{ name }}
                    </p><!-- /.page-location -->
                </div><!-- /.container -->
            </div><!-- /.pattern -->
        </div><!-- /.parallax-style  /.page-name-sec-->
    </div><!-- #page-name-sec -->
    <!-- Page Name Section End-->
</template>
<script setup lang="ts">

interface PageLink {
    name: string
    link: string
}

const props = defineProps<{
    pages: PageLink[]
    name: string
}>()

</script>