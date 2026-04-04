<template>
  <!-- Menu -->
  <div class="main-menu-continer">
    <div id="main-menu" class="navbar navbar-default" :class="{'navbar-fixed-top': isFixed}">
      <div class="container">
        <div class="navbar-header">
          <!-- Responsive Navigation -->
          <button type="button" class="navbar-toggle" @click="toggleMenu">
            <span class="sr-only">Меню</span>
            <i class="fa fa-bars"></i>
          </button> <!-- /.navbar-toggle -->
          <!-- Logo -->
          <a class="navbar-brand" href="/">
            <span>МОЁ</span>РЕЗЮМЭ#
          </a><!-- /.navbar-brand -->
        </div> <!-- /.navbar-header -->

        <nav class="navbar-collapse" :class="{'collapse': !isMenuOpen}" role="navigation">
          <!-- Main navigation -->
          <ul id="headernavigation" class="nav navbar-nav pull-right">
            <li v-for="menuItem in menuItems" :key="menuItem.title">
                <NuxtLink :to="menuItem.link" @click="closeMenu">{{ menuItem.title }}</NuxtLink>
                <ul v-if="menuItem.subItems" class="sub-menu">
                    <li v-for="subMenuItem in menuItem.subItems" :key="subMenuItem.title">
                        <a href="#" @click.prevent="handlePortfolioClick(subMenuItem.viewType)">
                            {{ subMenuItem.title }}
                        </a>
                    </li>
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
import { useCvStore, ViewType } from '~/stores/cv';
import { useRouter } from 'vue-router';

const cvStore = useCvStore();
const router = useRouter();

const isFixed = ref(false);
const isMenuOpen = ref(false);

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
        "title": "Опыт работы",
        "link": '/portfolio',
        'viewType': ViewType.TIMELINE
    },
];

const handlePortfolioClick = async (viewType: ViewType) => {
    cvStore.setViewType(viewType);
    isMenuOpen.value = false; // Close menu on navigation
    await router.push('/portfolio');
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

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
