<template>
  <div><h1>Список желаний</h1></div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ProfileFavoriteList',
  beforeMount() {
    this.setHeaderLocate([{ name: 'favoriteList' }]);
  },
  methods: {
    ...mapMutations({
      setHeaderLocate: 'setHeaderLocate',
    }),
  },
};
</script>

<style scoped lang='scss'>
h1 {
  font-size: 31px;
  margin: 0;
}
</style>
