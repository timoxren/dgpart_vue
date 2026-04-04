<template>
    <breadcrumbs name="Ну-с начнем"></breadcrumbs>
    <!--  <top-section></top-section>-->
    <about-us-section></about-us-section>
    <!--  <video-section></video-section>-->
    <!--  <team-section></team-section>-->
    <!--  <skills-section></skills-section>-->
    <!--  <quality-section></quality-section>-->
    <!--  <what-we-do-section></what-we-do-section>-->
    <!--  <pricing-section></pricing-section>-->
    <!--  <testimonials-section></testimonials-section>-->
    <!--  <portfolio-section></portfolio-section>-->
    <!--  <clients-section></clients-section>-->
    <!--  <quality-section></quality-section>-->
    <!-- Our Blogs Section -->
<!--    <section id="blog">-->
<!--        <div class="white-bg blog-section">-->
<!--            <div class="sec-head-container">-->

<!--                <div class="sec-head-style">-->
<!--                    <h2 class="section-title wow bounceInDown">-->
<!--                        <span>Мой</span> Блог-->
<!--                    </h2>&lt;!&ndash; /.section-title &ndash;&gt;-->

<!--                    <div class="section-description">-->
<!--                        Пишу о том, с чем работаю-->
<!--                    </div>&lt;!&ndash; /.section-description &ndash;&gt;-->
<!--                </div>&lt;!&ndash; /.sec-head-style &ndash;&gt;-->
<!--            </div>&lt;!&ndash; /.sec-head-container &ndash;&gt;-->

<!--            <div class="container">-->
<!--                <div class="row">-->

<!--                    <div v-for="item in store.blogPosts" :key="item.id" class="item col-md-6 col-lg-4">-->
<!--                        <article class="post-content wow bounceInUp" data-wow-delay=".2s">-->
<!--                            <div class="featured-img">-->
<!--                                <img class="blog-post-image" src="/images/blog-post/home-page/blog-post-1.jpg">-->
<!--                            </div>&lt;!&ndash; /.featured-img &ndash;&gt;-->
<!--                            <div class="post-container">-->
<!--                                <h2 class="post-title">-->
<!--                                    <a href="single-page.html">{{ item.title }}</a>-->
<!--                                </h2>&lt;!&ndash; /.post-title &ndash;&gt;-->
<!--                                <p class="post-description">-->
<!--                                    {{ item.description }}-->
<!--                                </p>-->
<!--                                <div class="post-meta">-->
<!--                                    <div class="continue-reading pull-left">-->
<!--                                        <a href="single-page.html">Читать дальше...</a>-->
<!--                                    </div>&lt;!&ndash; /.continue-reading &ndash;&gt;-->
<!--                                    <div class="entry-meta pull-right">-->
<!--											<span class="entry-date">-->
<!--												<i class="fa fa-clock-o"></i>-->
<!--												{{ item.date }}-->
<!--											</span>-->
<!--                                        <span class="comments-link">-->
<!--												<a href="#"> <i class="fa fa-comment-o"></i> 32</a>-->
<!--											</span>-->
<!--                                    </div>&lt;!&ndash; /.entry-meta &ndash;&gt;-->
<!--                                </div>&lt;!&ndash; /.post-meta &ndash;&gt;-->
<!--                            </div>&lt;!&ndash; /.post-container &ndash;&gt;-->
<!--                        </article>&lt;!&ndash; /.post-content &ndash;&gt;-->
<!--                    </div>&lt;!&ndash; /.item &ndash;&gt;-->

<!--                </div>&lt;!&ndash; /.row &ndash;&gt;-->
<!--            </div>&lt;!&ndash; /.container &ndash;&gt;-->
<!--            <div class="button-container">-->
<!--                <NuxtLink to="/portfolio" class="btn btn-sm btn-default btn-effect">Смотреть все</NuxtLink>-->
<!--            </div>-->
<!--        </div>&lt;!&ndash; /.blog-section &ndash;&gt;-->
<!--    </section>&lt;!&ndash; #blog &ndash;&gt;-->
    <!-- Our Blogs Section End-->
<!--    <tweet-section></tweet-section>-->
    <!--  <subscribe-section></subscribe-section>-->
    <contact-form-section></contact-form-section>
    <!--  <googlemaps-section></googlemaps-section>-->
</template>

<script>

import AboutUs from "~/components/main/about/about-us.vue";
import BlogSection from "~/components/main/blog-section.vue";
import ClientsSection from "~/components/main/clients-section.vue";
import ContactForm from "~/components/main/contact-form.vue";
import Googlemaps from "~/components/main/googlemaps.vue";
import PortfolioSection from "~/components/main/portfolio-section.vue";
import PricingSection from "~/components/main/pricing-section.vue";
import QualitySection from "~/components/main/quality-section.vue";
import SkillsSection from "~/components/main/skills-section.vue";
import SubscribeSection from "~/components/main/subscribe-section.vue";
import TeamSection from "~/components/main/team-section.vue";
import TestimonialsSection from "~/components/main/testimonials-section.vue";
import TweetSection from "~/components/main/tweet-section.vue";
import VideoSection from "~/components/main/video-section.vue";
import WhatWeDoSection from "~/components/main/what-we-do-section.vue";

import { useMainStore } from '~/store/index';

export default {
    components: {
        GooglemapsSection: Googlemaps,
        ContactFormSection: ContactForm,
        SubscribeSection: SubscribeSection,
        TweetSection: TweetSection,
        BlogSection: BlogSection,
        PricingSection: PricingSection,
        TestimonialsSection: TestimonialsSection,
        PortfolioSection: PortfolioSection,
        ClientsSection: ClientsSection,
        QualitySection: QualitySection,
        WhatWeDoSection: WhatWeDoSection,
        TeamSection: TeamSection,
        SkillsSection: SkillsSection,
        VideoSection: VideoSection,
        AboutUsSection: AboutUs
    },
    data() {
        return {
            store: useMainStore()
        };
    },
    created() {
        this.store.fetchBlogPosts();
    }
}

</script>