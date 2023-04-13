<template>
  <div class='product'>
    <div class='product-container'>
      <div class='product-image-block'>
        <img
          class='product-image'
          :src='image'
          :title='name'
          alt='ads'>
      </div>
      <img src='~assets/images/icons/product-favorite.svg' alt='favorite' class='favorite'>
      <img src='~assets/images/icons/item-cart.svg' alt='cart' class='cart'>
    </div>
    <div class='product-info'>
      <p class='name'>{{ cuttedName(name) }}</p>
      <p class='cost'>{{ cost }}₴</p>
      <p class='state'>{{ $t(itemState) }}</p>
    </div>
  </div>
</template>

<!--
src='https://www.vodafone.com.au/images/devices/samsung/samsung-s23-plus/samsung-galaxy-s23-plus-lavender-front-m.jpg'
-->
<script>
export default {
  name: 'ProductOne',
  props: {
    image: {
      type: String,
      required: true,
      default: 'https://www.vodafone.com.au/images/devices/samsung/samsung-s23-plus/samsung-galaxy-s23-plus-lavender-front-m.jpg',
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
  methods: {
    cuttedName(value) {
      if (value.length < 22) return value;
      return value.slice(0, 22) + '...';
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

  .product-container {
    height: 200px;
  }
}

.product:hover {
  cursor: pointer;
}

.product-image-block {
  height: 185px;
  width: 215px;
  margin-top: 5px;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-image {
  max-height: 185px;
  border-radius: 10px;
  max-width: 215px;
}

.favorite {
  position: relative;
  top: -182px;
  left: 186px;
}

.cart {
  position: relative;
  top: -35px;
  left: 160px;
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
