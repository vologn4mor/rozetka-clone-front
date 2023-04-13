<template>
  <div
    class='podcat-item' @click='$emit("click")'>
    <AppCard>
      <img :src='image' alt='item'>
    </AppCard>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import AppCard from '@/components/ui/AppCard.vue';

export default {
  name: 'AppCatCard',
  components: { AppCard },
  props: {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang='scss'>

.podcat-item {
  width: 230px;

  div {
    height: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

img {
  max-width: 170px;
  max-height: 170px;
}

.podcat-item:hover {
  cursor: pointer;
}

</style>
