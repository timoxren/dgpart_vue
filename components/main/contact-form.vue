<template>
  <!-- Contact Section -->
  <section id="contact">
    <!-- Contact Form-->
    <div id="contact-form-section" class="contact-form-section">
      <div class="white-bg">
        <div class="sec-head-container">
          <div class="sec-head-style">
            <h2 class="section-title wow bounceInDown">
              <span>Форма </span> Связи
            </h2><!-- /.section-title -->

            <div class="section-description">
              Напишите мне, если вас заинтерисовали мои компетенции
            </div><!-- /.section-description -->
          </div><!-- /.sec-head-style -->
        </div><!-- /.sec-head-container -->

        <div class="container">
          <div class="row">
            <div class="contact-form-container">
              <form id="contact-form"  action="#" method="post" name="contactform">
                <div class="col-md-6">
                  <div id="name_error" class="error"><img src="../../assets/images/email/error.png" alt="Error!">Пожалуйста, введите Ваше Имя.</div>
                  <input id="name" class="form-control" name="name" type="text" placeholder=" Ваше Имя" required>

                  <div id="email_error" class="error"><img src="../../assets/images/email/error.png" alt="Error!">Пожалуйста, введите Ваш E-mail.</div>
                  <input id="email" class="form-control" name="email" type="email" placeholder="Ваш Email" required>

                  <div id="subject_error" class="error"><img src="../../assets/images/email/error.png" alt="Error!">Пожалуйста, укажите тему.</div>
                  <input id="subject" class="form-control" name="subject" type="text" placeholder="Тема" required>
                </div><!-- /.col-md-6 -->

                <div class="col-md-6">
                  <div id="message_error" class="error"><img src="../../assets/images/email/error.png" alt="Error!">Оставьте свой коментарий здесь.</div>
                  <textarea id="your_message" class="form-control" name="your_message" placeholder="Коментарий" rows="4" required></textarea>

                  <div id="submit">
                    <button type="submit" id="send_message" class="btn btn-sm btn-default full-width btn-effect">Отправить</button>
                  </div><!-- /#submit -->
                </div><!-- /.col-md-6 -->
                <div class="col-md-12">
                  <div id="mail_success" class="success"><img src="../../assets/images/email/success.png" alt="Success!">Ваше сообщение успешно отправлено.</div>
                  <div id='mail_fail' class='error'>
                    <img src="../../assets/images/email/error.png" alt="Error!"> К сожалению, произошла ошибка.
                  </div>
                </div><!-- /.col-md-12 -->
              </form><!-- /#contact-form -->
            </div><!-- /.contact-form-container -->
          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.white-bg -->
    </div><!-- /#contact-form-section -->
    <!-- Contact Form End-->

    <!-- Contact Details End-->
    <div id="contact-details">
      <div class="gray-bg contact-details">
        <div class="container">
          <div class="row">
            <h3 class="text-center title">Контакты</h3>
            <div class="contact-info">

              <div class="col-md-3 col-sm-6 contact-info-box wow bounceInDown center animated" data-wow-delay=".2s">

									<span class="icon map-marker">
										<i aria-hidden="true" class="li_location"> </i>
									</span>
                <p class="contact-details-title">Адрес</p>
                <span class="texts">Москва. Мичуринский проспект <br>
										119607
									</span>
              </div> <!-- /.contact-info-box -->

              <div class="col-md-3 col-sm-6 contact-info-box wow bounceInDown center animated" data-wow-delay=".4s">
									<span class="icon envelope">
										<i aria-hidden="true" class="li_mail"></i>
									</span>
                <p class="contact-details-title">E-mail</p>
                <span class="texts"><a href="#">lynxrta@gmail.com</a> <br>
										<a href="#">info@timoxren.ru</a>
									</span>
              </div><!--  /.contact-info-box -->

              <div class="col-md-3 col-sm-6 contact-info-box wow bounceInDown center animated" data-wow-delay=".6s">
									<span class="icon phone">
										<i aria-hidden="true" class="li_phone"></i>
									</span>
                <p class="contact-details-title">Телефон</p>
                <span class="texts">+7 (926) 694 0759 <br>
										+995 (599) 40-95-87 <br/>
                    +66 (81) 667-3196
									</span>
              </div><!-- /.contact-info-box -->

              <div class="col-md-3 col-sm-6 contact-info-box wow bounceInDown center animated" data-wow-delay=".8s">
                <span class="icon skype"><i class="fa fa-telegram"></i></span>
                <p class="contact-details-title">Telegram</p>
                <span class="texts"><a href="#">lynxrta</a> <br>
										<a href="#">@Timoxren</a>
									</span>
              </div><!-- /.contact-info-box -->
            </div><!-- /.contact-info -->
          </div><!-- /.row -->
        </div><!-- /.container -->
      </div><!-- /.gray-bg  /.contact-details -->
    </div><!-- /#contact-details -->
    <!-- Contact Details End-->

  </section><!-- /#contact -->
  <!-- Contact Section End -->
</template>
<script setup lang="ts">
</script>