<template>
  <div>
    <button @click='$emit("click")'>
      <img :src='imageFromType' alt=''>
    </button>
  </div>
</template>

<script>
import deleteIcon from '~/assets/images/icons/AdminLayout/Panel/delete.svg';
import plusIcon from '~/assets/images/icons/AdminLayout/Panel/plus.svg';
import refreshIcon from '~/assets/images/icons/AdminLayout/Panel/refresh.svg';

export default {
  name: 'AdminButton',
  props: {
    type: {
      type: String,
      required: true,
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
