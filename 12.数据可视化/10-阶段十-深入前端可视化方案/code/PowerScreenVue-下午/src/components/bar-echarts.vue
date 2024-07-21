<template>
   <!-- echarts 的容器 -->
   <div ref="divRef" :style="{width: width, height: height}"></div>
</template>

<script setup>
  import { onMounted, watch, ref } from 'vue'
  import useEchart from '@/hooks/useEchart';
  
 const props = defineProps({
   width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '100%'
    },
    echartDatas: {
      type: Array,
      default: function() {
        return []
      }
    }
 })

  // 拿到dom对象
  let divRef = ref(null)
  let hyChart = null

   // 监听 echartDatas 的变化
  watch(()=> props.echartDatas, (newV, oldV) =>{
    setupEchart(newV)
  })
 

  onMounted(()=>{
    setupEchart(props.echartDatas)  // 第一次走这里
  })


  function setupEchart(echartDatas = []) {
    if(!hyChart){
      hyChart = useEchart(divRef.value)
    }
    let option = getOption(echartDatas) // 准备数据
    hyChart.setOption(option)
  }

  /**
    echartDatas
    [
      {
          "name": "一月",
          "value": 500
      },
      {
          "name": "二月",
          "value": 2000
      },
      {
          "name": "三月",
          "value": 3600
      },
      {
          "name": "四月",
          "value": 1000
      },
      {
          "name": "五月",
          "value": 1000
      },
      {
          "name": "六月",
          "value": 2000
      },
      {
          "name": "七月",
          "value": 4000
      }
    ]
   */
  function getOption(echartDatas=[]) {

  const category = echartDatas.map((item)=>{
    return item.name
  })
  const categoryData = echartDatas.map((item)=>{
    return item.value
  })
    
  const option = {
    grid: {
      left: "5%",
      right: "5%",
      top: "30%",
      bottom: "5%",
      containLabel: true, // grid 区域是否包含坐标轴的刻度标签
    },
    tooltip: {},
    xAxis: {
      axisLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF",
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "white",
      },

      data: category,
    },
    yAxis: {
      name: "个",
      nameTextStyle: {
        color: "white",
        fontSize: 13,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF",
        },
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: "#42A4FF",
        },
      },
      axisLabel: {
        color: "white",
      },
    },
    series: [
      {
        name: "销量",
        type: "bar",
        barWidth: 17,
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#01B1FF", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#033BFF", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },
        data: categoryData,
      },
    ],
  };
  
  return option

  }

</script>

<style lang="less" scoped>

</style>
