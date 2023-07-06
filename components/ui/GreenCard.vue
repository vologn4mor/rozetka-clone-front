<template>
  <div>
    <div class="head" :style="'text-align: '+headAlign+';'">
      <slot name="head"/>
    </div>
    <div class="content">
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
    }
  }
}
</script>

<style scoped>

.head {
  font-size: 20px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0;
  color: #078071;
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
