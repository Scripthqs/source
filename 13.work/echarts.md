# 二次封装 ECharts

```js
<template>
  <div class="bar-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';
import * as echarts from 'echarts';
import BaseEchart from '../echarts';
import { IEchartXAxisLabel, IEchartValueData } from '../types';

const props = defineProps<{
  labels: IEchartXAxisLabel[];
  values: IEchartValueData[];
  title?: string;
}>();

const options = computed(() => {
  return {
    title: {
      text: props.title
    },
    legend: {},
    xAxis: {
      data: props.labels
    },
    yAxis: [
      {
        type: 'value',
        position: 'left',
        alignTicks: true,
        axisLine: {
          show: true
        },
        axisLabel: {
          formatter: '{value} a'
        }
      },
      {
        type: 'value',
        position: 'right',
        alignTicks: true,
        axisLine: {
          show: true
        },
        axisLabel: {
          formatter: '{value} b'
        }
      }
    ],
    series: [
      {
        name: '111',
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: ''
        },
        data: props.values[0]
      },
      {
        name: '222',
        type: 'bar',
        yAxisIndex: 1,
        showBackground: true,
        itemStyle: {
          color: ''
        },
        data: props.values[1]
      }
    ]
  };
});
</script>

<style scoped></style>
```
