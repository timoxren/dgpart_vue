<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: "similar.vue"
})
</script>

<template>
    <!--Similar Project-->
    <section id="similar-project" class="similar-project gray-bg">
        <div class="container">
            <h3 class="similar-project-head">
                Аналогичный Проект
            </h3>

            <div id="similar-project-slider" class="owl-carousel owl-theme works-item similar-project-item ">

                <figure class="item">
                    <img src="/images/portfolio/pr-image-1.jpg" alt="Item 3"/>
                    <figcaption>
                        <a href="portfolio-details.html" target="_blank">
                            <div class="portfolio-caption">
                                <span class="protfolio-title">Мониторинг активности позитивно упорядочивает</span>
                                <span class="protfolio-cat">сайт, брендинг</span>
                            </div>
                            <span class="protfolio-icon">
								21 <i class="fa fa-heart-o"></i>
							</span>
                        </a>
                    </figcaption>
                </figure>

                <figure class="item">
                    <img src="/images/portfolio/pr-image-2.jpg" alt="Item 4"/>
                    <figcaption>
                        <a href="portfolio-details.html" target="_blank">
                            <div class="portfolio-caption">
                                <span class="protfolio-title">Мониторинг активности позитивно упорядочивает</span>
                                <span class="protfolio-cat">сайт, брендинг</span>
                            </div>
                            <span class="protfolio-icon">
								12  <i class="fa fa-heart-o"></i>
							</span>
                        </a>
                    </figcaption>
                </figure>

                <figure class="item">
                    <img src="/images/portfolio/pr-image-3.jpg" alt="Item 1"/>
                    <figcaption>
                        <a href="portfolio-details.html" target="_blank">
                            <div class="portfolio-caption">
                                <span class="protfolio-title">Мониторинг активности позитивно упорядочивает</span>
                                <span class="protfolio-cat">сайт, брендинг</span>
                            </div>
                            <span class="protfolio-icon">
								56 <i class="fa fa-heart-o"></i>
							</span>
                        </a>
                    </figcaption>
                </figure>

                <figure class="item">
                    <img src="/images/portfolio/pr-image-4.jpg" alt="Item 1"/>
                    <figcaption>
                        <a href="portfolio-details.html" target="_blank">
                            <div class="portfolio-caption">
                                <span class="protfolio-title">Мониторинг активности позитивно упорядочивает</span>
                                <span class="protfolio-cat">сайт, брендинг</span>
                            </div>
                            <span class="protfolio-icon">
								98 <i class="fa fa-heart-o"></i>
							</span>
                        </a>
                    </figcaption>
                </figure>
                <figure class="item">
                    <img src="/images/portfolio/pr-image-5.jpg" alt="Item 1"/>
                    <figcaption>
                        <a href="portfolio-details.html" target="_blank">
                            <div class="portfolio-caption">
                                <span class="protfolio-title">Мониторинг активности позитивно упорядочивает</span>
                                <span class="protfolio-cat">сайт, брендинг</span>
                            </div>
                            <span class="protfolio-icon">
								09 <i class="fa fa-heart-o"></i>
							</span>
                        </a>
                    </figcaption>
                </figure>
            </div><!-- /.similar-project-item -->
        </div><!-- /.container -->
    </section><!-- /#similar-project -->
</template>

<style scoped lang="scss">

</style>