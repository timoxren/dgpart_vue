<template>

    <breadcrumbs name="Подробнее" :pages="[{name: 'Опыт работы', link: '/portfolio'}]"></breadcrumbs>

    <!-- Portfolio Page -->
    <div id="portfolio-page" class="page portfolio-page">
        <div class="works-section">
            <div id="works-container" class="clearfix">
                <div class="container">
                    <div class="portfolioFilter">
                        <div class="portfolioRole">
                        Моя роль в комманде
                        </div>
                        <a
                            @click.prevent="setFilter('')"
                            href="#" data-filter="" :class="(cvStore.getFilter === '' && cvStore.viewType === 'list') ? 'current' : ''">Смотреть все</a>
                        <a
                            :class="(cvStore.getFilter === pos && cvStore.viewType === ViewType.LIST) ? 'current' : ''"
                            @click.prevent="setFilter(pos);" v-for="pos in Position" :key="pos" href="#">{{ pos }}</a>
                    </div> <!-- /.worksFilter -->

                    <div class="works-item-timeline" v-if="cvStore.viewType === ViewType.TIMELINE">
                        <div class="timeline-flex timeline-items">

                            <div v-for="item in cvStore.getSortedItems" :key="item.id" class="timeline-item">
                                <div class="timeline-badge">
                                    <i class="fa fa-briefcase"></i>
                                </div>
                                <NuxtLink style="width:100%" :to="'/portfolio/' + item.id">
                                    <div class="timeline-panel">
                                        <div class="timeline-heading">
                                            <h4 class="timeline-title">{{ item.company }}</h4>
                                            <div class="timeline-period">
                                                <i class="fa fa-clock-o"></i> {{ item.period }}
                                            </div>
                                        </div>
                                        <img v-if="item.logo_url" :src="item.logo_url" :title="item.company" :alt="item.company" />
                                        <div class="timeline-body">
                                            <p>{{ item.description }}</p>
                                        </div>
                                    </div>
                                </NuxtLink>
                            </div>

                        </div>
                    </div>
                </div><!-- /.container -->
            </div><!-- /#works-container -->

        </div><!-- /.works-section -->
    </div><!-- #portfolio-page -->
    <!-- Portfolio Page -->
</template>

<script setup lang="ts">
import {type CVItem, Position, useCvStore, ViewType} from '~/stores/cv';
import {computed} from 'vue';

const cvStore = useCvStore();

definePageMeta({
    layout: 'pages'
});

function setFilter(role: string)
{
    cvStore.setViewType(ViewType.TIMELINE);
    cvStore.setFilter(role);
}

function setView(type: ViewType)
{
    cvStore.setViewType(type);
}

</script>

<style lang="scss">
    .portfolioRole {
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 1.2em;

    }

    figure {
        height: 10em;
        display: flex;

        .item {
            font-size: 1.5em;
            margin: 50px;
        }
    }

    .timeline-flex {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .timeline-year-group {
        display: flex;
        gap: 20px;
    }

    .timeline-year {
        flex-basis: 100px;
        text-align: right;
        font-size: 1.2em; /* Adjusted font size */
        font-weight: bold;
        padding-top: 10px;
        color: #555;
        margin-right: 40px;
    }

    .timeline-items {
        flex-grow: 1;
        border-left: 3px solid #eeeeee;
        padding-left: 20px;
        margin-left: 20px;
    }

    .timeline-item {
        display: flex;
        gap: 20px;
        margin-bottom: 20px;
        align-items: flex-start;
    }

    .timeline-badge {
        color: #fff;
        width: 50px;
        height: 50px;
        line-height: 50px;
        font-size: 1.4em;
        text-align: center;
        background-color: #999999;
        border-radius: 50%;
        flex-shrink: 0;
        margin-left: -46.5px; /* (50px width + 3px border) / 2 */
    }

    .timeline-panel {
        flex-grow: 1;
        border: 1px solid #d4d4d4;
        border-radius: 2px;
        padding: 20px;
        position: relative;
        box-shadow: 0 1px 6px rgba(0, 0, 0, 0.175);

        img {
            max-height: 50px;
            margin: 10px;
        }
    }

    .timeline-heading {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .timeline-title {
        margin: 0;
    }

    .timeline-period {
        color: #777;
        font-size: 0.9em;
        margin-right: 10px;
        white-space: nowrap;
    }

    .timeline-panel:before {
        position: absolute;
        top: 15px;
        left: -15px;
        display: inline-block;
        border-top: 15px solid transparent;
        border-right: 15px solid #ccc;
        border-left: 0 solid #ccc;
        border-bottom: 15px solid transparent;
        content: " ";
    }

    .timeline-panel:after {
        position: absolute;
        top: 16px;
        left: -14px;
        display: inline-block;
        border-top: 14px solid transparent;
        border-right: 14px solid #fff;
        border-left: 0 solid #fff;
        border-bottom: 14px solid transparent;
        content: " ";
    }

    @media (max-width: 430px) {
        .timeline-heading {
            display: block;
        }

        .timeline-period {
            margin-top: 20px;
        }
    }
</style>
