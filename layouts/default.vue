<template>
  <div>
    <AppHeader />
    <div class='main-container'>
      <div class='under-header'>
        <div class='under-header__left'>
          <div>
            <img src='~assets/images/icons/HomePage/city-location.svg' alt='city-location'>
            <span>{{ $t('cityDot') }} Київ</span>
            <span>&nbsp;·&nbsp;</span>
            <span class='button'>{{ $t('setDeliveryAddress') }}</span>
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
      <Nuxt />
    </div>
    <AppFooter v-if='$route.path !== localePath("/")' />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'DefaultLayout',
  components: { AppFooter },
};
</script>

<style lang='scss'>

@font-face {
  font-family: KyivTypeSans;
  src: url("../assets/fonts/KyivTypeSans.ttf");
}

@font-face {
  font-family: Mariupol-Bold;
  src: url("../assets/fonts/Mariupol-Bold.ttf");
}

@font-face {
  font-family: Mariupol-Medium;
  src: url("../assets/fonts/Mariupol-Medium.ttf");
}

@font-face {
  font-family: Mariupol-Regular;
  src: url("../assets/fonts/Mariupol-Regular.ttf");
}

* {
  font-family: Mariupol-Regular;
}

</style>

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
</style>
