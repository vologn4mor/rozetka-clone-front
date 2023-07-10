<template>
  <div class="card">
    <div class="background" >
      <slot class="image" name="image"></slot>
    </div>
    <div class="head">
      <slot name="head"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>

  </div>
</template>

<script>
export default {
  name: "AppGridCard"
}
</script>

<style lang="scss" scoped>

.card{
  display: grid;
  width: 485px;
  height: 135px;
  grid-template-columns: 38px 100px 23px 285px  39px ;
  grid-template-rows: 18px 1px 20px 7px 72px 17px ;
}

.background {
  display: flex;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 5;
  background-color: #222525;
  border-radius: 50px;
  height: 100px;
  left: 0;
  top: 0;
  width: 100px;
  justify-content: center;
  align-items: center;
}

.head {
  color: $lh-accent-green ;
  font-size: 20px;
  font-weight: 700;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  top: 0;
  white-space: nowrap;
  grid-column: 4;
  grid-row: 3;
}

.content {
  color: $lh-dark;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  grid-row: 5;
  grid-column: 4;
}
</style>
