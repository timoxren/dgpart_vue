<template>
    <div class="works-item-timeline">
        <div class="timeline-flex">
            <div v-for="[year, items] in groupedByYear" :key="year" class="timeline-year-group">
                <div class="timeline-year">{{ year }}</div>
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
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { CVItem } from '~/stores/cv';

const props = defineProps<{
  items: CVItem[]
}>();

const groupedByYear = computed(() => {
    const grouped = [...props.items].reduce((acc, item) => {
        const year = new Date(item.start_timestamp * 1000).getFullYear();
        if (!acc[year]) {
            acc[year] = [];
        }
        acc[year].push(item);
        return acc;
    }, {} as Record<string, CVItem[]>);

    const asArray = Object.entries(grouped);
    asArray.sort(([yearA], [yearB]) => Number(yearB) - Number(yearA));
    for (const [, items] of asArray) {
        items.sort((a, b) => b.start_timestamp - a.start_timestamp);
    }
    return asArray;
});
</script>

<style lang="scss" scoped>
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
        font-size: 1.5em;
        font-weight: bold;
        padding-top: 10px;
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
