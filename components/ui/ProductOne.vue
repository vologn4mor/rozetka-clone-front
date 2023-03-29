<template>
  <div class='product'>
    <div class='product-image-block'>
      <img
        class='product-image'
        src='https://www.vodafone.com.au/images/devices/samsung/samsung-s23-plus/samsung-galaxy-s23-plus-lavender-front-m.jpg'
        alt='ads'>
      <img src='~assets/images/icons/product-favorite.svg' alt='favorite' class='favorite'>
    </div>
    <div class='product-info'>
      <p class='name'>{{ name }}</p>
      <p class='cost'>{{ cost }}₴</p>
      <p class='state'>{{ itemState }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductOne',
  props: {
    image: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    cost: {
      type: Number,
      required: true,
    },
    itemState: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang='scss'>

p {
  margin: 8px 5px;
}

.product {
  border-radius: 10px;
  background-color: $main-light-gray;
  height: 284px;
  width: 226px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 20px;
}

.product-image-block {
  height: 185px;
  width: 215px;
  margin-top: 5px;
  border-radius: 10px;
  background-color: white;
}

.product-image {
  height: 185px;
  border-radius: 10px;
  width: 215px;
}

.favorite {
  position: relative;
  top: -182px;
  left: 186px;
}

.product-info {
  align-self: start;
  margin-left: 5px;

  .cost {
    font-family: Mariupol-Bold;
  }

  .state {
    color: $main-gray;
  }
}

</style>
