<template>
    <!-- Our Blogs Section -->
    <section id="blog">
        <div class="white-bg blog-section">
            <div class="sec-head-container">

                <div class="sec-head-style">
                    <h2 class="section-title wow bounceInDown">
                        <span>Мой</span> Блог
                    </h2><!-- /.section-title -->

                    <div class="section-description">
                        Пишу о том, с чем работаю
                    </div><!-- /.section-description -->
                </div><!-- /.sec-head-style -->
            </div><!-- /.sec-head-container -->

            <div class="container">
                <div class="row">

                        <div  v-for="item in blogPosts" :key="item.id" class="item col-md-6 col-lg-4">
                            <article class="post-content wow bounceInUp" data-wow-delay=".2s">
                                <div class="featured-img">
                                    <img class="blog-post-image" src="/images/blog-post/home-page/blog-post-1.jpg">
                                </div><!-- /.featured-img -->
                                <div class="post-container">
                                    <h2 class="post-title">
                                        <a href="single-page.html">{{ item.title }}</a>
                                    </h2><!-- /.post-title -->
                                    <p class="post-description">
                                        {{ item.description }}
                                    </p>
                                    <div class="post-meta">
                                        <div class="continue-reading pull-left">
                                            <a href="single-page.html">Читать дальше...</a>
                                        </div><!-- /.continue-reading -->
                                        <div class="entry-meta pull-right">
											<span class="entry-date">
												<i class="fa fa-clock-o"></i>
												{{ item.date }}
											</span>
                                            <span class="comments-link">
												<a href="#"> <i class="fa fa-comment-o"></i> 32</a>
											</span>
                                        </div><!-- /.entry-meta -->
                                    </div><!-- /.post-meta -->
                                </div><!-- /.post-container -->
                            </article><!-- /.post-content -->
                        </div><!-- /.item -->

                </div><!-- /.row -->
            </div><!-- /.container -->
            <div class="button-container">
                <NuxtLink to="/portfolio" class="btn btn-sm btn-default btn-effect">Смотреть все</NuxtLink>
            </div>
        </div><!-- /.blog-section -->
    </section><!-- #blog -->
    <!-- Our Blogs Section End-->
</template>
<script>

export default {
    computed: {
        blogPosts() {
            return this.$store.state.blogPosts;
        },
    },
    created() {
        this.$store.dispatch('fetchBlogPosts');
    }
}

</script>

<style lang="scss">
.container {
    .row {
        .blog-post-slider {
            display: flex;
        }
    }
}
</style>