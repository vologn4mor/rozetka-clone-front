<template>
  <div><h1>Рассылки</h1></div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ProfileMailingLists',
  beforeMount() {
    this.setHeaderLocate([{ name: 'mailingLists' }]);
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
