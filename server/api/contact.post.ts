import { Resend } from 'resend';
import { defineEventHandler, readBody, createError } from 'h3';

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    // Извлекаем recaptchaToken из тела запроса
    const { name, email, subject, message, recaptchaToken } = body;

    // 1. Базовая валидация полей
    if (!name || !email || !subject || !message || !recaptchaToken) {
        throw createError({
            statusCode: 400,
            message: 'Все поля, включая проверку капчи, обязательны.',
        });
    }

    // 2. Проверка токена в Google reCAPTCHA
    try {
        const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                secret: '6Lcf-qQsAAAAAGq5wXicPOFI29ykOXBuOshrEv3U',
                response: recaptchaToken,
            }),
        });

        const verification: any = await verifyResponse.json();

        // Для v3 проверяем success и score (порог 0.5 обычно оптимален)
        if (!verification.success || (verification.score !== undefined && verification.score < 0.5)) {
            throw createError({
                statusCode: 403,
                message: 'Проверка на робота не пройдена. Попробуйте еще раз.',
                data: verification
            });
        }
    } catch (err: any) {
        // Пробрасываем ошибку, если это уже createError, иначе создаем новую
        throw err.statusCode ? err : createError({
            statusCode: 500,
            message: 'Ошибка при верификации капчи.',
        });
    }

    // 3. Отправка письма через Resend (выполняется только если капча пройдена)
    const resend = new Resend('re_FYaX2bdF_DX1wrQQysPFAxLGJMs8rvdFP');

    try {
        const { data, error } = await resend.emails.send({
            from: 'info@timoxren.ru',
            to: ['lynxrta@gmail.com'],
            subject: subject,
            html: `
                <p><strong>Отправитель:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <hr>
                <p><strong>Сообщение:</strong></p>
                <p>${message}</p>
              `,
            reply_to: email,
        });

        if (error) {
            throw createError({
                statusCode: 500,
                message: 'Ошибка сервиса Resend.',
                data: error
            });
        }

        return { status: 'success', message: 'Сообщение успешно отправлено!' };

    } catch (e: any) {
        throw createError({
            statusCode: 500,
            message: 'Внутренняя ошибка сервера при отправке.',
            data: e.message
        });
    }
});