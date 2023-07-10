<template>
  <div class="card">
    <div class="head" :style="'text-align: '+headAlign+'; color:'+ headColor+';'">
      <slot name="head"/>
    </div>
    <div class="content" :style="'text-align: '+headAlign+';'">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "GreenCard",
  props: {
    headAlign:{
      type:String,
      default: "center"
    },
    contentAlign:{
      type:String,
      default: "center"
    },
    headColor:{
      type:String,
      default: "#078071"
    }

  }
}
</script>

<style scoped>

.card {
  margin: 32px;
}

.head {
  font-size: 20px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0;
}

.content {
  font-size: 18px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0;
  color: #222525;
;
}

</style>
