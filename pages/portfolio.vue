<template>

    <breadcrumbs name="Портфолио"></breadcrumbs>

    <!-- Portfolio Page -->
    <div id="portfolio-page" class="page portfolio-page">
        <div class="works-section">
            <div id="works-container" class="clearfix">
                <div class="container">
                    <div class="portfolioFilter">
                        <a href="#" data-filter="" class="current">Смотреть все</a>
                        <a href="#" data-filter=".cat-1">Веб-дизайн</a>
                        <a href="#" data-filter=".cat-2">Разработка </a>
                        <a href="#" data-filter=".cat-3">Оптимизация</a>
                        <a href="#" data-filter=".cat-4">Внедрение</a>
                        <a href="#" data-filter=".cat-5">Продвижение</a>
                    </div> <!-- /.worksFilter -->
                    <div id="works-item" class="works-item row`">

                        <figure v-for="item in blogItems" key="item.id"
                                class="item  col-lg-3 col-md-4 col-sm-6 col-xs-12">
                            <img :src="item.image" alt="Item {{ item.id }}"/>
                            <figcaption>
                                <NuxtLink to="/portfolio-details">
                                    <div class="portfolio-caption">
                                        <span class="protfolio-title">{{ item.title }}</span>
                                        <span class="protfolio-cat">{{ item.description }}</span>
                                    </div>
                                    <span class="protfolio-icon">
                    01 <i class="fa fa-heart-o"></i>
                  </span>
                                </NuxtLink>
                            </figcaption>
                        </figure>


                    </div><!-- /.works-item -->
                </div><!-- /.container -->
            </div><!-- /#works-container -->

            <div class="container">
                <div class="more-works">
                    <a class="btn" href="portfolio.html">
                        <span><i class="fa fa-plus"></i></span>
                    </a>
                </div><!-- /.load-more -->
            </div><!-- /.container -->
        </div><!-- /.works-section -->
    </div><!-- #portfolio-page -->
    <!-- Portfolio Page -->
</template>

<script setup lang="ts">

interface BlogItem {
    id: Number,
    title: string,
    description: string,
    image: string
}

const blogItems: BlogItem[] = [
    {
        id: 1,
        title: "Перераспределение бюджета1",
        description: 'Сайт',
        image: '/images/portfolio/pr-image-1.jpg'
    },
    {
        id: 2,
        title: "Перераспределение бюджета2",
        description: 'Сайт',
        image: '/images/portfolio/pr-image-2.jpg'
    },
    {
        id: 3,
        title: "Перераспределение бюджета3",
        description: 'Сайт',
        image: '/images/portfolio/pr-image-3.jpg'
    },
    {
        id: 4,
        title: "Перераспределение бюджета4",
        description: 'Сайт',
        image: '/images/portfolio/pr-image-4.jpg'
    },
    {
        id: 5,
        title: "Перераспределение бюджета5",
        description: 'Сайт',
        image: '/images/portfolio/pr-image-5.jpg'
    },
    {
        id: 6,
        title: "Перераспределение бюджета6",
        description: 'Сайт',
        image: '/images/portfolio/pr-image-6.jpg'
    },
    {
        id: 7,
        title: "Перераспределение бюджета7",
        description: 'Сайт',
        image: '/images/portfolio/pr-image-7.jpg'
    },
    {
        id: 8,
        title: "Перераспределение бюджета8",
        description: 'Сайт',
        image: '/images/portfolio/pr-image-8.jpg'
    },
    {
        id: 9,
        title: "Перераспределение бюджета9",
        description: 'Сайт',
        image: '/images/portfolio/pr-image-1.jpg'
    }
]

definePageMeta({
    layout: 'pages' // Указываем кастомный макет
});

</script>