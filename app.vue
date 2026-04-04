<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: 'Рысьев Тимофей - Backend-разработчик, DevOps, Team Lead',
  meta: [
    { name: 'description', content: 'Создаю масштабируемые и надёжные IT-решения, объединяя 20 лет опыта в backend-разработке, DevOps и архитектуре микросервисов.' },
    { property: 'og:title', content: 'Рысьев Тимофей - Backend-разработчик, DevOps, Team Lead' },
    { property: 'og:description', content: 'Создаю масштабируемые и надёжные IT-решения, объединяя 20 лет опыта в backend-разработке, DevOps и архитектуре микросервисов.' },
    { property: 'og:image', content: 'https://timoxren.ru/images/section-content/tim_r.jpg' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://timoxren.ru' },
  ],
})
</script>