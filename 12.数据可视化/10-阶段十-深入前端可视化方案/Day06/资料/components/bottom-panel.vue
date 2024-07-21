<template>
  <div class="bottom-content">
    <template v-for="(item, index) in panelItems" :key="item">
      <div :class="['item', `panel${item.id}`]">
        <div class="pan-left">
          <div class="title">{{ item.title }}</div>
          <!-- 数据动画 -->
          <span :id="`total-num-${item.id}`" class="number">{{
            item.totalNum
          }}</span>
          <span class="unit">{{ item.unit }}</span>
        </div>
        <div class="pan-right">
          <span
            :class="['triangle', item.isUp ? 'up-triangle' : 'down-triangle']"
          ></span>
          <!-- 数据动画 -->
          <span :id="`percentage-num-${item.id}`" class="percentage">{{
            item.percentage
          }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
// import { ref, onMounted } from "vue";
// import { CountUp } from "countup.js";

const props = defineProps({
  panelItems: {
    type: Array,
    default: function() {
      return [
        {
          id: 1,
          title: "充电桩总数(个)",
          totalNum: 8579.9,
          unit: "万",
          percentage: 79.5,
          isUp: true,
        },
        {
          id: 2,
          title: "年增长总数(个)",
          totalNum: 2856.6,
          unit: "万",
          percentage: 88.9,
          isUp: true,
        },
        {
          id: 3,
          title: "月增长总数(个)",
          totalNum: 1189.3,
          unit: "万",
          percentage: 62,
          isUp: false,
        },
      ]
    }
  }
})

</script>

<style scoped lang="scss">
.bottom-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  /* padding-top: 40px; */
}

.bottom-content .item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 60px;

  flex: 1;
  height: 100%;
  padding: 0 10px 0 35px;
  /* border: 1px solid red; */
}

.bottom .panel1 {
}

.bottom-content .pan-left {
  font-size: 16px;
  color: #ffffff;
  opacity: 0.8;
}
.bottom-content .pan-left .title {
  color: white;
}
.bottom-content .pan-left .number {
  font-size: 36px;
  font-weight: bold;
  color: #23aeff;
  line-height: 60px;
}

.bottom-content .pan-left .unit {
  font-size: 18px;
  color: #23aeff;
}

.bottom-content .pan-right {
  margin-top: 35px;
}

.bottom-content .panel1 .pan-right .up-triangle {
  display: inline-block;
  margin-bottom: 4px;
  width: 0;
  height: 0;
  border-bottom: 8px solid #c70013;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.bottom .panel1 .pan-right .percentage {
  color: #c70013;
}
.bottom .panel2 .pan-right .up-triangle {
  display: inline-block;
  margin-bottom: 4px;
  width: 0;
  height: 0;
  border-bottom: 8px solid #c70013;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.bottom-content .panel2 .pan-right .percentage {
  color: #c70013;
}

.bottom-content .panel3 .pan-right .down-triangle {
  display: inline-block;
  margin-bottom: 1px;
  width: 0;
  height: 0;
  border-top: 8px solid #37a73f;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}
.bottom-content .panel3 .pan-right .percentage {
  color: #37a73f;
}
</style>
