<template>
  <div class='products-block'>
    <div class='menu'>
      <span class='text'>{{ title }}</span>
      <div v-if='link' class='menu__link'>
        <nuxt-link :to='localePath(link)'>{{ $t('showMore') }}</nuxt-link>
        <img src='~/assets/images/icons/show-more-arrow.svg' alt='arrow'>
      </div>
    </div>
    <div class='products'>
      <slot />
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
      default: '',
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
  width: 100%;
}

.menu {
  display: flex;
  justify-content: space-between;

  .text {
    font-size: 18px;
    font-family: KyivTypeSans;
  }

  .menu__link {
    display: flex;
    align-items: center;
    font-size: 16px;

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
