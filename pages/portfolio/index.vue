<template>

    <breadcrumbs name="Подробнее" :pages="[{name: 'Портфолио', link: '/portfolio'}]"></breadcrumbs>

    <!-- Portfolio Page -->
    <div id="portfolio-page" class="page portfolio-page">
        <div class="works-section">
            <div id="works-container" class="clearfix">
                <div class="container">
                    <div class="portfolioFilter">
                        <a
                            @click.prevent="setView('timeline')"
                            :class="cvStore.viewType == ViewType.TIMELINE ? 'current': ''"
                        >
                            Timeline
                        </a>
                        <a
                            @click.prevent="setFilter('')"
                            href="#" data-filter="" :class="(cvStore.getFilter === '' && cvStore.viewType === 'grid') ? 'current' : ''">Смотреть все</a>
                        <a
                            :class="(cvStore.getFilter === pos && cvStore.viewType === 'grid') ? 'current' : ''"
                            @click.prevent="setFilter(pos);" v-for="pos in Position" :key="pos" href="#">{{ pos }}</a>
                    </div> <!-- /.worksFilter -->
                    <div id="works-item-grid" class="works-item row" v-if="cvStore.viewType === ViewType.GRID">
                        <figure v-for="item in cvStore.getSortedItems" :key="item.start_timestamp"
                                :class="['item', 'col-lg-3', 'col-md-4', 'col-sm-6', 'col-xs-12', ...item.position_ar]">
                            <img v-if="item.logo_url" :src="item.logo_url" :title="item.company" :alt="item.company" />
                            <div class="item" v-if="item.logo_text" :title="item.company" :alt="item.company">
                                {{ item.logo_text }}
                            </div>
                            <figcaption>
                                <NuxtLink :to="'/portfolio/' + item.id">
                                    <div class="portfolio-caption">
                                        <span class="protfolio-title">{{ item.company }}</span>
                                        <span class="protfolio-cat">{{ item.position }}</span>
                                    </div>
                                    <span class="protfolio-icon">
                                        <i class="fa fa-heart-o"></i>
                                    </span>
                                </NuxtLink>
                            </figcaption>
                        </figure>

                    </div><!-- /.works-item -->
                    <div class="works-item-timeline" v-if="cvStore.viewType === ViewType.TIMELINE">
                        <div class="timeline-flex">
                            <div v-for="[yearMonth, items] in groupedByYearMonth" :key="yearMonth" class="timeline-year-group">
                                <div class="timeline-year">{{ yearMonth }}</div>
                                <div class="timeline-items">
                                    <div v-for="item in items" :key="item.id" class="timeline-item">
                                        <div class="timeline-badge">
                                            <i class="fa fa-briefcase"></i>
                                        </div>
                                        <div class="timeline-panel">
                                            <div class="timeline-heading">
                                                <h4 class="timeline-title">{{ item.company }}</h4>
                                                <div class="timeline-period">
                                                    <i class="fa fa-clock-o"></i> {{ item.period }}
                                                </div>
                                            </div>
                                            <div class="timeline-body">
                                                <p>{{ item.position }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div><!-- /.container -->
            </div><!-- /#works-container -->

            <div class="container">
                <div class="more-works">
                    <a class="btn" href="portfolio.html">
                        <span><i class="fa fa-plus"></i></span>
                    </a>
                </div><!-- /.load-more -->
            </div><!-- /.container -->
        </div><!-- /.works-section -->
    </div><!-- #portfolio-page -->
    <!-- Portfolio Page -->
</template>

<script setup lang="ts">
import {Position, useCvStore, ViewType, type CVItem} from '~/stores/cv';
import { computed } from 'vue';

const cvStore = useCvStore();

definePageMeta({
    layout: 'pages'
});

function setFilter(role: string)
{
    cvStore.setViewType(ViewType.GRID);
    cvStore.setFilter(role);
}

function setView(type: ViewType)
{
    cvStore.setViewType(type);
}

const groupedByYearMonth = computed(() => {
    const grouped = [...cvStore.cvItems].reduce((acc, item) => {
        const date = new Date(item.start_timestamp * 1000);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // +1 because months are 0-indexed, padStart for '05'
        const yearMonthKey = `${year}-${month}`;

        if (!acc[yearMonthKey]) {
            acc[yearMonthKey] = [];
        }
        acc[yearMonthKey].push(item);
        return acc;
    }, {} as Record<string, CVItem[]>);

    const asArray = Object.entries(grouped);
    // Sort by year-month key in descending order (e.g., "2023-05", "2023-04")
    asArray.sort(([keyA], [keyB]) => keyB.localeCompare(keyA));

    for (const [, items] of asArray) {
        items.sort((a, b) => b.start_timestamp - a.start_timestamp);
    }

    return asArray;
});

</script>

<style lang="scss">
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
</style>
