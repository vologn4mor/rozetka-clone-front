<template>
  <div>
    <div class="head">
      <slot name="head"/>
    </div>
    <div class="content">
      <slot name="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "GreenCard"
}
</script>

<style scoped>

</style>
