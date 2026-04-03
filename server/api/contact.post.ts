import {Resend} from 'resend';
import {defineEventHandler, readBody} from 'h3';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const {name, email, subject, message} = body; // Убрали recaptchaToken из деструктуризации

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Валидация данных формы
    if (!name || !email || !subject || !message) {
        throw createError({
            statusCode: 400,
            message: 'Все поля (имя, email, тема и сообщение) обязательны для заполнения.',
        });
    }

    // Отправка письма через Resend
    try {
        const {data, error} = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>', // <--- ЗАМЕНИТЕ НА ВАШ ВЕРИФИЦИРОВАННЫЙ EMAIL
            to: ['lynxrta@gmail.com'],
            subject: subject,
            html: `
        <p><strong>Отправитель:</strong> ${name}</p>
        <p><strong>Email для ответа:</strong> ${email}</p>
        <hr>
        <p><strong>Тема:</strong> ${subject}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message}</p>
      `,
            reply_to: email,
        });

        if (error) {
            console.error('Ошибка от Resend:', error);
            throw createError({
                statusCode: 500,
                message: 'Не удалось отправить сообщение через сервис Resend.',
                data: error
            });
        }

        return {status: 'success', message: 'Сообщение успешно отправлено!', data};

    } catch (e: any) {
        console.error('Общая ошибка при отправке письма:', e);
        throw createError({
            statusCode: 500,
            message: 'Произошла внутренняя ошибка сервера при отправке письма.',
            data: e
        });
    }
});
