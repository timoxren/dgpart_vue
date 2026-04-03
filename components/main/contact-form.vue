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
                            <form id="contact-form" @submit.prevent="submitForm" name="contactform">
                                <div class="col-md-6">
                                    <input id="name" class="form-control" name="name" type="text"
                                           placeholder=" Ваше Имя" v-model="formData.name" required>
                                    <div v-if="formErrors.name" class="error"><img
                                        src="../../assets/images/email/error.png" alt="Error!">{{ formErrors.name }}
                                    </div>

                                    <input id="email" class="form-control" name="email" type="email"
                                           placeholder="Ваш Email" v-model="formData.email" required>
                                    <div v-if="formErrors.email" class="error"><img
                                        src="../../assets/images/email/error.png" alt="Error!">{{ formErrors.email }}
                                    </div>

                                    <input id="subject" class="form-control" name="subject" type="text"
                                           placeholder="Тема" v-model="formData.subject" required>
                                    <div v-if="formErrors.subject" class="error"><img
                                        src="../../assets/images/email/error.png" alt="Error!">{{ formErrors.subject }}
                                    </div>
                                </div><!-- /.col-md-6 -->

                                <div class="col-md-6">
                                    <textarea id="your_message" class="form-control" name="your_message"
                                              placeholder="Коментарий" rows="4" v-model="formData.message"
                                              required></textarea>
                                    <div v-if="formErrors.message" class="error"><img
                                        src="../../assets/images/email/error.png" alt="Error!">{{ formErrors.message }}
                                    </div>

                                    <div id="submit">
                                        <button type="submit" id="send_message"
                                                class="btn btn-sm btn-default full-width btn-effect"
                                                :disabled="loading">
                                            {{ loading ? 'Отправка...' : 'Отправить' }}
                                        </button>
                                    </div><!-- /#submit -->
                                </div><!-- /.col-md-6 -->
                                <div class="col-md-12">
                                    <div v-if="successMessage" id="mail_success" class="success"><img
                                        src="../../assets/images/email/success.png" alt="Success!"> {{ successMessage }}
                                    </div>
                                    <div v-if="errorMessage" id='mail_fail' class='error'>
                                        <img src="../../assets/images/email/error.png" alt="Error!"> {{ errorMessage }}
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

                            <div class="col-md-3 col-sm-6 contact-info-box wow bounceInDown center animated"
                                 data-wow-delay=".2s">

									<span class="icon map-marker">
										<i aria-hidden="true" class="li_location"> </i>
									</span>
                                <p class="contact-details-title">Адрес</p>
                                <span class="texts">Москва. Мичуринский проспект <br>
										119607
									</span>
                            </div> <!-- /.contact-info-box -->

                            <div class="col-md-3 col-sm-6 contact-info-box wow bounceInDown center animated"
                                 data-wow-delay=".4s">
									<span class="icon envelope">
										<i aria-hidden="true" class="li_mail"></i>
									</span>
                                <p class="contact-details-title">E-mail</p>
                                <span class="texts"><a href="#">lynxrta@gmail.com</a> <br>
										<a href="#">info@timoxren.ru</a>
									</span>
                            </div><!--  /.contact-info-box -->

                            <div class="col-md-3 col-sm-6 contact-info-box wow bounceInDown center animated"
                                 data-wow-delay=".6s">
									<span class="icon phone">
										<i aria-hidden="true" class="li_phone"></i>
									</span>
                                <p class="contact-details-title">Телефон</p>
                                <span class="texts">+7 (926) 694 0759 <br>
										+995 (599) 40-95-87 <br/>
                    +66 (81) 667-3196
									</span>
                            </div><!-- /.contact-info-box -->

                            <div class="col-md-3 col-sm-6 contact-info-box wow bounceInDown center animated"
                                 data-wow-delay=".8s">
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
import { ref, reactive } from 'vue';

const formData = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
});

const loading = ref(false);
const successMessage = ref('');
const errorMessage = ref('');
const formErrors = reactive({
    name: '',
    email: '',
    subject: '',
    message: '',
});

const validateForm = () => {
    let isValid = true;
    formErrors.name = '';
    formErrors.email = '';
    formErrors.subject = '';
    formErrors.message = '';

    if (!formData.name) {
        formErrors.name = 'Пожалуйста, введите Ваше Имя.';
        isValid = false;
    }
    if (!formData.email) {
        formErrors.email = 'Пожалуйста, введите Ваш E-mail.';
        isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        formErrors.email = 'Пожалуйста, введите корректный E-mail.';
        isValid = false;
    }
    if (!formData.subject) {
        formErrors.subject = 'Пожалуйста, укажите тему.';
        isValid = false;
    }
    if (!formData.message) {
        formErrors.message = 'Пожалуйста, оставьте свой комментарий.';
        isValid = false;
    }
    return isValid;
};

const submitForm = async () => {
    successMessage.value = '';
    errorMessage.value = '';

    if (!validateForm()) {
        return;
    }

    loading.value = true;

    try {
        const response = await $fetch('/api/contact', {
            method: 'POST',
            body: {
                ...formData,
            },
        });

        if (response.status === 'success') {
            successMessage.value = response.message;
            formData.name = '';
            formData.email = '';
            formData.subject = '';
            formData.message = '';
        } else {
            errorMessage.value = response.message || 'Произошла ошибка при отправке сообщения.';
        }
    } catch (error: any) {
        console.error('Ошибка при отправке формы:', error);
        errorMessage.value = error.data?.message || 'Не удалось отправить сообщение. Пожалуйста, попробуйте позже.';
    } finally {
        loading.value = false;
    }
};
</script>

<style scoped>
/* Стили остаются без изменений */
.error {
    color: red;
    font-size: 0.9em;
    margin-top: 5px;
    display: flex;
    align-items: center;
}

.error img {
    margin-right: 5px;
}

.success {
    color: green;
    font-size: 0.9em;
    margin-top: 5px;
    display: flex;
    align-items: center;
}

.success img {
    margin-right: 5px;
}
</style>
