<template>
  <div class='products-block'>
    <div class='menu'>
      <span class='text'>{{ title }}</span>
      <div v-if='link' class='menu__link'>
        <nuxt-link :to='localePath(link)'>{{ $t('showMore') }}</nuxt-link>
        <img src='~/assets/images/icons/show-more-arrow.svg' alt='arrow'>
      </div>
    </div>
    <div :class='!customStyle ? "products" : customStyle'>
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
    customStyle: {
      type: String,
      required: false,
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
    color: $lh-accent-orange;
    font-weight: bold;
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

.footer-style {
  display: flex;
  margin-top: 20px;

  div {

    margin: 0 7.8px;
  }

  div:first-child {
    margin: 0 7.8px 0 0;
  }

  div:last-child {
    margin: 0 0 0 7.8px
  }
}
</style>
