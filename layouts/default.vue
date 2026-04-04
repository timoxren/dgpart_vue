<template>


  <!-- Page Top	 -->
  <div id="page-top"></div>
  <!-- Page Top End -->
  <menu-section></menu-section>
  <slot/>
  <Footer></Footer>
  <div id="scroll-to-top">
		<span>
			<i class="fa fa-chevron-up"></i>
		</span>
  </div>


</template>

<script>
import "assets/css/bootstrap.min.css"

// import "assets/css/font-awesome.min.css"

import "assets/css/font-icons.css"
import "assets/css/linecons-font-style.css"
import "assets/css/jquery.fs.boxer.css"
// import "assets/css/owl.carousel.css"
import "assets/css/content_slider_style.css"
import "assets/css/animate.css"
import "assets/css/style.css"
// import "assets/scss/style.scss"
import "assets/css/responsive.css"
// import "assets/scss/responsive.scss"
import {defineComponent} from "vue";
import Breadcrumbs from "~/components/breadcrumbs.vue";
import Footer from "~/components/footer.vue";

export default defineComponent({
  components: {Breadcrumbs, Footer}
})


</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css');
</style>