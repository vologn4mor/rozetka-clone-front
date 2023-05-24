<template>
  <div class='container'>
    <div class='up-part' @click='isOpened = !isOpened'>
      <div class='icon-and-label'>
        <img :src='icon' alt=''>
        <span>{{ label }}</span>
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
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileDropdown',
  props: {
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpened: true,
    };
  },
};
</script>

<style scoped lang='scss'>

.container {
  background-color: $lh-gray;
  border-radius: 6px;
  width: 100%;
  padding: 25px 45px;
  margin-bottom: 15px;

  .up-part {
    display: flex;
    justify-content: space-between;


    .icon-and-label {
      display: flex;
      align-items: center;

      img {
        margin-right: 10px;
      }
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
