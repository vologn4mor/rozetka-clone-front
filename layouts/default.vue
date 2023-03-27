<template>
  <div>
    <AppHeader />
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
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
