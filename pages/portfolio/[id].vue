<template>
    <breadcrumbs :pages="[{name: 'Портфолио', link: '/portfolio'}]"></breadcrumbs>

    <div id="portfolio-page" class="page portfolio-page">
        <div class="container">
            <div class="row">
                <div id="portfolio-container" class="col-sm-8">
                    <aside class="widget text-widget">
                        <h3 class="widget-title">
                            {{ currentItem.company }}
                        </h3>
                        <div class="textwidget">
                            <p>
                                {{ currentItem.description }}
                            </p>
                        </div>
                        <div class="textwidget">
                            <p>
                                {{ currentItem.system_modules }}
                            </p>
                        </div><!-- /.textwidget -->
                    </aside><!-- /.widget -->

                    <aside class="widget project-details">
                        <h3 class="widget-title">
                            Skills
                        </h3>
                        <ul>
                            <li v-for="skill in currentItem.technologies" class="fa-user">{{ skill }}</li>
                        </ul>
                    </aside>
                    <aside class="widget project-details">
                        <h3 class="widget-title">
                            Обязанности
                        </h3>
                        <ul>
                            <li v-for="duty in currentItem.duties" class="fa-user">{{ duty }}</li>
                        </ul>
                    </aside><!-- /.widget -->
                </div><!-- /.portfolio-container -->
                <div class="porfolio-company-logo col-sm-4">
                    <section id="portfolio-section-logo" class="portfolio-slider-wraper">
                        <img v-if="currentItem.logo_full" :src="currentItem.logo_full" />
                        <div v-if="currentItem.logo_text">{{ currentItem.logo_text }}</div>
                    </section>
                </div>
            </div><!-- /.row -->
        </div><!-- container -->
    </div><!-- /#portfolio-page -->
</template>
<script setup lang="ts">

import { useCvStore, Position } from '~/stores/cv';

const cvStore = useCvStore();
const route = useRoute();

definePageMeta({
    layout: 'pages' // Указываем кастомный макет
});

const currentItem = computed((): CVItem | undefined => {
    const itemId = Number(route.params.id);

    if (isNaN(itemId)) {
        return undefined;
    }

    return cvStore.getItemById(itemId);
});
</script>

<style land="scss" scoped>
 #portfolio-container {
    #portfolio-section-logo {
        img {
            height: 200px;
        }
    }
 }
</style>