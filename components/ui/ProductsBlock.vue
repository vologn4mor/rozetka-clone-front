<template>
  <div class='products-block'>
    <div class='menu'>
      <span class='text'>{{ title }}</span>
      <div class='menu__link'>
        <nuxt-link :to='localePath(link)'>Показати ще</nuxt-link>
        <img src='~/assets/icons/show-more-arrow.svg' alt='arrow'>
      </div>
    </div>
    <div class='products'>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductsBlock',
  props: {
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang='scss'>
a {
  text-decoration: none;
  color: black;
  font-weight: bold;
}

.products-block {
  margin-top: 50px;
}

.menu {
  display: flex;
  justify-content: space-between;

  .text {
    font-size: 27px;
  }

  .menu__link {
    display: flex;
    align-items: center;
    font-size: 20px;

    img {
      margin-left: 10px;
    }
  }
}

.products {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
