<template>
  <div class='container' :style="'width: ' + width + 'px;'">
    <div class='up-part' @click='isOpened = !isOpened'>
      <div class='label'>
        <slot name="head"></slot>
      </div>
      <div class='arrow'>
        <img
          src='~assets/images/icons/profile/personalData/arrow.svg'
          alt='home-arrow'
          :class='isOpened ? "opened-arrow": null'
        >
      </div>
    </div>
    <div v-if='isOpened' class='slot'>
      <hr>
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppDropdownCard",
  props:{
    width:{
      type:String,
      default:'233',
    }
  },
  data() {
    return {
      isOpened: false,
    };
  },
};
</script>

<style scoped lang='scss'>

hr {
  margin: 20px 0;
}

.container {
  background-color: $lh-gray;
  border-radius: 6px;
  padding: 20px 45px;
  margin-bottom: 15px;

  .up-part {
    display: flex;
    justify-content: space-between;


    .label {
      display: flex;
      align-items: center;

      font-size: 20px;
      font-weight: 700;
      line-height: 19px;
      letter-spacing: 0;
      text-align: left;


    }
  }

  .up-part:hover {
    cursor: pointer;
  }

  .opened-arrow {
    transform: rotate(180deg);
  }
}

</style>
