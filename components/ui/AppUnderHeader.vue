<template>
  <div class='under-header'>
    <div class='under-header__left'>
      <div v-if='$route.path === localePath("/")'>
        <img src='~assets/images/icons/HomePage/city-location.svg' alt='city-location'>
        <span>{{ $t('cityDot') }} Київ</span>
        <span>&nbsp;·&nbsp;</span>
        <span class='button'>{{ $t('setDeliveryAddress') }}</span>
      </div>
      <div v-if='headerLocate && $route.path !== localePath("/")' class='header-home'>
        <img src='~assets/images/icons/home.svg' alt='home'>
        <div v-for='item in headerLocate' :key='item'>
          <img src='~assets/images/icons/home-arrow.svg' alt='home-arrow'>
          <span>{{ item }}</span>
        </div>
      </div>
    </div>
    <div class='under-header__right'>
      <div>
        <img src='~assets/images/icons/HomePage/help.svg' alt='help'>
        <span>{{ $t('referenceCenter') }}</span>
      </div>
      <div>
        <img src='~assets/images/icons/HomePage/point-location.svg' alt='point-location'>
        <span>{{ $t('deliveryPoints') }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppUnderHeader',
  computed: {
    ...mapGetters({ headerLocate: 'headerLocate' }),
  },
};
</script>

<style lang='scss'>
.main-container {
  max-width: 1435px;
  width: 100%;
  margin: 20px auto;
}

.under-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.under-header__right {
  align-items: center;
  display: flex;

  div {
    align-items: center;
    display: flex;

    img {
      margin-right: 10px;
    }
  }

  div:first-child {
    margin-right: 30px;
  }
}

.under-header__left {
  align-items: center;
  display: flex;

  div {
    display: flex;
  }

  img {
    margin-right: 10px;
  }

  .button {
    color: $main-gray;
  }

}

.header-home {
  display: flex;
  text-align: center;

  span {
    color: $main-dark-gray;
    margin: 3px 10px 0 0;
  }
}
</style>
