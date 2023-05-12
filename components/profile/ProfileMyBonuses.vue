<template>
  <div><h1>Мои бонусы</h1></div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ProfileMyBonuses',
  beforeMount() {
    this.setHeaderLocate([{ name: 'myBonuses' }]);
  },
  methods: {
    ...mapMutations({
      setHeaderLocate: 'setHeaderLocate',
    }),
  },
};
</script>

<style scoped>

</style>
