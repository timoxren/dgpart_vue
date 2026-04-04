import { defineStore } from 'pinia';

export enum Position {
    TEAMLEAD = "teamlead",
    DEVELOPER = "developer",
    MENTOR = "mentor",
}

export enum ViewType {
    LIST = "list",
    TIMELINE = "timeline"
}

export interface CVItem {
    id: number,
    start_timestamp: number,
    period: string,
    company: string,
    logo_url?: string,
    logo_full?: string,
    logo_text?: string,
    position: string,
    position_ar: Array<Position>,
    description: string,
    duties: Array<string>
}

export const useCvStore = defineStore('cv', {
    state: () => ({
        selectedRole: '',
        viewType: ViewType.TIMELINE,
        cvItems: [
            {
                id: 12,
                start_timestamp: 1740787200,
                period: "Март 2025 — н.в.",
                company: "finsei.com",
                logo_url: "/logo/finsei.png",
                logo_full: "/logo/finsei.svg",
                position: "Backend разработчик",
                position_ar: [Position.DEVELOPER],
                description: "Платежная система Finsei.com. Оператор платежей в Европе (финтех, криптоплатежи, KYC).",
                system_modules: "Интеграция платежных провайдеров (ECNG, GuruPay), админка бэкофиса, работа с вебхуками.",
                duties: [
                    "Имплементация задач (бизнес и тех долг)",
                    "Bug fixing",
                    "Интеграция провайдеров оплаты (ECNG, GuruPay)",
                    "Создание сценариев оплаты и работа с вебхуками"
                ],
                technologies: ["PHP 8.x", "Yii2", "Postgres", "Redis", "RabbitMQ", "Kubernetes", "Docker", "Vue.js", "Swagger"]
            },
            {
                id: 11,
                start_timestamp: 1659312000,
                period: "Август 2022 — Март 2025",
                company: "sxope.com",
                logo_url: "/logo/sxope.png",
                logo_full: "/logo/sxope.svg",
                position: "Backend разработчик, консультант, Mentoring, Tech Leading",
                position_ar: [Position.DEVELOPER, Position.MENTOR, Position.TEAMLEAD],
                description: "ERP система для сети клиник в США.",
                system_modules: "IAM (Identification and Authentication Management), ID (Login, SSO).",
                duties: [
                    "Имплементация задач и Bug fixing",
                    "Работа с модулями IAM и ID (Login, SSO)",
                    "Техническое лидерство и менторинг"
                ],
                technologies: ["PHP 8.x", "Laravel", "Postgres", "Redis", "ElasticSearch", "Docker", "AWS", "Keycloak"]
            },
            {
                id: 10,
                start_timestamp: 1640995200,
                period: "Январь 2022 — Июнь 2023",
                company: "Dataart",
                logo_url: "/logo/dataart.png",
                logo_full: "/logo/dataart.svg",
                position: "Backend разработчик, консультант, менторство",
                position_ar: [Position.DEVELOPER, Position.MENTOR],
                description: "Развитие проекта в области HoReCa для ряда стран в Европе.",
                system_modules: "Микросервисная архитектура систем бронирования.",
                duties: [
                    "Имплементация задач (бизнес и тех долг)",
                    "Bug fixing",
                    "Технический консультант по архитектурным вопросам"
                ],
                technologies: ["PHP", "Laravel", "Symfony", "Postgres", "Docker", "Microservices"]
            },
            {
                id: 9,
                start_timestamp: 1546300800,
                period: "Январь 2019 — Январь 2022",
                company: "Университет 2035",
                logo_url: "/logo/2035.png",
                logo_full: "/logo/2025.svg",
                position: "Team Leader",
                position_ar: [Position.TEAMLEAD, Position.DEVELOPER],
                description: "Образовательный проект по имплементации процессов ВУЗов на цифровой платформе.",
                system_modules: "Модули статистики, омниканальная шина сообщений.",
                duties: [
                    "Поддержка существующей кодовой базы и Code review",
                    "Планирование работы и управление командой",
                    "Поддержка модуля статистики и омниканальной шины сообщений"
                ],
                technologies: ["PHP", "Laravel", "Postgres", "Redis", "RabbitMQ", "Clickhouse", "Docker"]
            },
            {
                id: 8,
                start_timestamp: 1543622400,
                period: "Декабрь 2018 — Сентябрь 2019",
                company: "Avito.ru",
                logo_url: "/logo/avito.png",
                logo_full: "/logo/avito.svg",
                position: "Tech unit lead (Support & Helpdesk system)",
                position_ar: [Position.TEAMLEAD],
                description: "Лидер российского рынка классифайдов.",
                system_modules: "Системы Helpdesk, Helpcenter, дашборды с метриками.",
                duties: [
                    "Поддержка кодовой базы и Code review",
                    "Планирование работы и управление командой",
                    "Подготовка к аудиту COPC и следование целям OKR"
                ],
                technologies: ["PHP", "Symfony", "Go (Golang)", "Postgres", "Redis", "RabbitMQ", "Docker", "Kubernetes"]
            },
            {
                id: 7,
                start_timestamp: 1527811200,
                period: "Июнь 2018 — Ноябрь 2018",
                company: "connectedaircraft.ru",
                logo_text: "connectedaircraft.ru",
                position: "Tech Leader",
                position_ar: [Position.TEAMLEAD, Position.DEVELOPER],
                description: "Стартап по объединению информации о циклах эксплуатации самолетов.",
                system_modules: "Ядро учета циклов эксплуатации, инфраструктурный boilerplate.",
                duties: [
                    "Управление командой и рефакторинг архитектуры всей системы",
                    "Демонстрация MVP клиентам и переговоры с контрагентами",
                    "Создание boilerplate для сервисов системы",
                    "Code review и поддержка всех сред разработки"
                ],
                technologies: ["Go (Golang)", "PHP", "Laravel", "Postgres", "Docker", "Microservices"]
            },
            {
                id: 6,
                start_timestamp: 1512086400,
                period: "Декабрь 2017 — Июнь 2018",
                company: "integer-soft.ru",
                logo_text: "integer-soft.ru",
                position: "Team leader",
                position_ar: [Position.TEAMLEAD],
                description: "Системный интегратор. Разработка системы мониторинга ONVIF устройств.",
                system_modules: "Мониторинг устройств, реализация SRE функций.",
                duties: [
                    "Управление задачами и планирование работы по спринтам",
                    "Управление сроками и Code review",
                    "Реализация SRE фич"
                ],
                technologies: ["PHP", "Symfony", "MySQL", "Docker", "ONVIF", "FFmpeg"]
            },
            {
                id: 5,
                start_timestamp: 1346457600,
                period: "Сентябрь 2012 — Декабрь 2017",
                company: "proint.ru",
                logo_text: "proint.ru",
                position: "Full stack senior разработчик, Team leader",
                position_ar: [Position.DEVELOPER, Position.TEAMLEAD],
                description: "Работа над CRM-системой и мессенджером Rendall.",
                system_modules: "Сигнальный протокол мессенджера, CRM itabula.",
                duties: [
                    "Создание новых фич для проектов CRM и Rendall",
                    "Планирование работ для всех проектов",
                    "Разработка сигнального протокола для мессенджера",
                    "Bug fixing"
                ],
                technologies: ["PHP", "Zend Framework", "MySQL", "C++", "Qt", "JavaScript"]
            },
            {
                id: 4,
                start_timestamp: 1306886400,
                period: "Июнь 2011 — Сентябрь 2012",
                company: "www.cyberhull.com",
                logo_url: "/logo/ch.png",
                logo_full: "/logo/ch.svg",
                position: "Разработчик, программист",
                position_ar: [Position.DEVELOPER],
                description: "ИТ-интегратор. Поддержка e-commerce систем.",
                system_modules: "Платежные шлюзы, интеграция социальных сетей.",
                duties: [
                    "Поддержка систем e-commerce и интеграция платежных порталов",
                    "Интеграция социальных сетей",
                    "High-load оптимизации и управление задачами",
                    "Bug fixing и задачи по улучшению"
                ],
                technologies: ["PHP", "Magento", "MySQL", "JavaScript", "High-load"]
            },
            {
                id: 3,
                start_timestamp: 1201824000,
                period: "Февраль 2008 — Июнь 2010",
                company: "Фриланс",
                logo_text: "Фриланс",
                position: "Разработчик, программист",
                position_ar: [Position.DEVELOPER],
                description: "Работа с популярными CMS (Joomla, Wordpress, Bitrix, MODX и др.).",
                system_modules: "Самописные CMS.",
                duties: [
                    "Работа с заказчиками",
                    "Написание технической документации",
                    "Управление задачами и демонстрация работы"
                ],
                technologies: ["PHP", "Joomla", "Wordpress", "Bitrix", "MySQL", "Smarty"]
            },
            {
                id: 2,
                start_timestamp: 1149120000,
                period: "Июнь 2006 — Июнь 2011",
                company: "Комета, ЦНИИ, ФГУП",
                logo_text: "Комета",
                position: "Инженер-электроник",
                position_ar: [Position.DEVELOPER],
                description: "Научно-исследовательский институт. Разработка космических систем связи.",
                system_modules: "Блоки контроля наземной станции космической радиолинии.",
                duties: [
                    "Разработка блоков контроля наземной станции для космической радиолинии"
                ],
                technologies: ["C", "C++", "Assembler", "Embedded Systems"]
            },
            {
                id: 1,
                start_timestamp: 1136073600,
                period: "Январь 2006 — Февраль 2008",
                company: "easy-it.ru",
                logo_url: "/logo/easy.png",
                position: "Разработчик",
                position_ar: [Position.DEVELOPER],
                description: "Первые шаги в коммерческом программировании.",
                system_modules: "Самописная CMS компании.",
                duties: [
                    "Создание сайтов на самописной CMS",
                    "Разработка на PHP (5.x) и нативном JS"
                ],
                technologies: ["PHP 5.x", "JavaScript", "Delphi for PHP", "MySQL"]
            }
        ] as CVItem[],
    }),
    getters: {
        getFilteredItems(state): CVItem[] {
            if (state.selectedRole) {
                return state.cvItems.filter(cvItem => cvItem.position_ar.includes(state.selectedRole as Position));
            }
            return state.cvItems;
        },
        getSortedItems(): CVItem[] {
            return [...this.getFilteredItems].sort((a, b) => b.start_timestamp - a.start_timestamp);
        },
        getFilter(state): string {
            return state.selectedRole;
        },
        getItemById: (state) => {
            return (id: number): CVItem | undefined => {
                return state.cvItems.find(item => item.id === id);
            };
        }
    },
    actions: {
        setFilter(role: string) {
            this.selectedRole = role;
        },
        setViewType(type: ViewType) {
            this.viewType = type;
        }
    }
});