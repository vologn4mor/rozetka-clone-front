<template>
  <div>
    <button :style='color ? `background-color: ${color}` : null' @click='$emit("click")'>
      <img :src='imageFromType' alt=''>
    </button>
  </div>
</template>

<script>
import deleteIcon from '~/assets/images/icons/AdminLayout/Panel/delete.svg';
import plusIcon from '~/assets/images/icons/AdminLayout/Panel/plus.svg';
import refreshIcon from '~/assets/images/icons/AdminLayout/Panel/refresh.svg';
import backIcon from '~/assets/images/icons/AdminLayout/Panel/back.svg';
import saveIcon from '~/assets/images/icons/AdminLayout/Panel/save.svg';

export default {
  name: 'AdminButton',
  props: {
    type: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    imageFromType() {
      switch (this.type) {
        case 'delete': {
          return deleteIcon;
        }
        case 'plus': {
          return plusIcon;
        }
        case 'refresh': {
          return refreshIcon;
        }
        case 'save': {
          return saveIcon;
        }
        case 'back': {
          return backIcon;
        }
        default: {
          return !this.type ? plusIcon : null;
        }
      }
    },
  },
};
</script>

<style scoped lang='scss'>

button {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>
