<template>
  <!-- About Us Section -->
  <section id="about">
    <div class="white-bg about-us-section">
      <div class="sec-head-container">
        <div class="sec-head-style">
          <h2 class="section-title wow bounceInDown">
            <span>Обо</span>мне
          </h2><!-- /.section-title -->

          <div class="section-description">
            Создаю масштабируемые и надёжные IT-решения, объединяя <b>19 лет опыта</b> в backend-разработке, DevOps и архитектуре микросервисов. Люблю структурировать хаос, автоматизировать процессы и делать технологии проще для людей.
          </div><!-- /.section-description -->
        </div><!-- /.sec-head-style -->
      </div><!-- /.sec-head-container -->

      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="about-us-thumb">
              <img src="/images/section-content/tim_r.jpg">
            </div><!-- /.about-us-thumb -->
          </div><!-- /.col-md-6 -->

          <div class="col-md-6">
              <p>Привет! Меня зовут <strong>Рысьев Тимофей</strong>, и я профессиональный разработчик с более чем <strong>19-летним опытом</strong> в backend-разработке, DevOps и проектировании сложных IT-решений.</p>

              <h2>Кто я и чем занимаюсь?</h2>
              <p>Я <strong>Team Lead, Backend-разработчик и технический консультант</strong>. Моя специализация — <strong>Golang, PHP, Node.js</strong>, а также построение масштабируемых систем, микросервисных архитектур и CI/CD процессов.</p>

              <h2>Ключевые навыки</h2>
              <ul>
                <li>Backend-разработка: PHP (Laravel, Symfony), Golang, Node.js</li>
                <li>DevOps: Docker, Kubernetes, Terraform, Google Cloud</li>
                <li>Базы данных: PostgreSQL, MySQL, Spanner, Redis, BigQuery</li>
                <li>Архитектура: SOA, микросервисы, API (REST, gRPC)</li>
                <li>Тестирование: PHPUnit, Codeception, CI/CD процессы</li>
                <li>Фронтенд: Vue.js, React.js, Angular (опыт <10%)</li>
              </ul>

              <h2>Опыт работы</h2>
              <p>Я работал в таких компаниях, как <strong>Avito, DataArt, 2035.University</strong>, а также в стартапах. Сейчас я работаю в <strong>sxope.com</strong> в роли <strong>Tech Lead / Backend Developer</strong>, где занимаюсь DevOps, архитектурой и менторингом команды.</p>

              <h2>Чем могу быть полезен?</h2>
              <ul>
                <li>Разработка и оптимизация сложных backend-систем</li>
                <li>Проектирование архитектуры, CI/CD, DevOps</li>
                <li>Управление командами разработчиков, менторинг</li>
                <li>Технический консалтинг и аудит кода</li>
              </ul>

              <h2>О себе</h2>
              <p>Я фанат программирования, люблю обсуждать <strong>архитектуру, SOLID, принципы проектирования и новые технологии</strong>. Готов к интересным проектам и новым вызовам!</p>

              <h2>Связаться со мной</h2>
              <div class="contact">
                <a href="mailto:lynxrta@gmail.com">✉️ Email: lynxrta@gmail.com</a>
                <a href="https://t.me/Timoxren" target="_blank">💬 Telegram: @Timoxren</a>
              </div>
          </div><!-- /.col-md-6 -->

        </div><!-- /.row -->
      </div><!-- /.container -->

    </div><!-- /.about-us-section -->

    <benefits></benefits>

  </section><!-- #about -->
  <!-- About Us Section End-->
</template>
<script setup lang="ts">
import Benefits from "~/components/main/about/benefits.vue";
</script>