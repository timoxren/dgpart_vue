<template>
  <!-- Menu -->
  <div class="main-menu-continer">
    <div id="main-menu" class="navbar navbar-default" :class="{'navbar-fixed-top': isFixed}">
      <div class="container">
        <div class="navbar-header">
          <!-- Responsive Navigation -->
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Меню</span>
            <i class="fa fa-bars"></i>
          </button> <!-- /.navbar-toggle -->
          <!-- Logo -->
          <a class="navbar-brand" href="/">
            <span>DG</span>part
          </a><!-- /.navbar-brand -->
        </div> <!-- /.navbar-header -->

        <nav class="collapse navbar-collapse" role="navigation">
          <!-- Main navigation -->
          <ul id="headernavigation" class="nav navbar-nav pull-right">
            <li v-for="menuItem in menuItems">
                <NuxtLink :to="menuItem.link">{{ menuItem.title }}</NuxtLink>
                <ul v-if="menuItem.subItems" class="sub-menu">
                    <li v-for="subMenuItem in menuItem.subItems"><NuxtLink :to="subMenuItem.link">{{subMenuItem.title}}</NuxtLink></li>
                </ul><!-- /.sub-menu -->
            </li>
          </ul><!-- /.sub-menu -->
        </nav> <!-- /.navbar-collapse  -->
      </div> <!-- /.container -->
    </div><!-- /#main-menu -->
  </div><!-- /.main-menu-continer -->
  <!-- Menu End -->
</template>
<script setup lang="ts">

import { ref, onMounted, onUnmounted } from "vue";

const isFixed = ref(false);
const menuItems = [
    {
        "title": "Главная",
        "link": '/#page-top'
    },
    {
        "title": "Обо мне",
        "link": '/#about'
    },
    {
        "title": "Написать мне",
        "link": '/#contact'
    },
    {
        "title": "Портфолио",
        "link": '/portfolio',
        "subItems": [
            {
                'title': 'Список',
                'link': '/portfolio'
            },
            {
                'title': 'Подробнее',
                'link': '/portfolio-details'
            }
        ]
    },
    {
        "title": "Блог",
        "link": '/blog',
        "subItems": [
            {
                'title': 'Список',
                'link': '/blog'
            },
            {
                'title': 'Подробнее',
                'link': '/blog-details'
            }
        ]
    }
]

const handleScroll = () => {
  isFixed.value = window.scrollY > 100;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

</script>