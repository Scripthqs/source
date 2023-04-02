import { reactive, onMounted, onUnmounted } from "vue"
export default function () {
  let point = reactive({
    x: 0,
    y: 0
  })
  function savePoint (event) {
    point.x = event.pageX
    point.y = event.pageY
    console.log(point.x, point.y)
  }
  onMounted(() => {
    window.addEventListener('click', savePoint)
  })

  onUnmounted(() => {
    window.removeEventListener('click', savePoint)
  })
  return point
}