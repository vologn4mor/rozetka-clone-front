<template>
  <div>
    <AppHeader />
    <div class='main-container'>
      <AppUnderHeader />
      <Nuxt />
    </div>
    <AppFooter v-if='$route.path !== localePath("/")' />
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue';
import AppUnderHeader from '@/components/ui/AppUnderHeader.vue';

export default {
  name: 'DefaultLayout',
  components: { AppUnderHeader, AppFooter },
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

a {
  text-decoration: none;
  color: #000;
}

.main-container {
  min-height: 692px;
}

</style>


