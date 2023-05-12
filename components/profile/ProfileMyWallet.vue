<template>
  <div><h1>Мой кошелек</h1></div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ProfileMyWallet',
  beforeMount() {
    this.setHeaderLocate([{ name: 'myWallet' }]);
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
