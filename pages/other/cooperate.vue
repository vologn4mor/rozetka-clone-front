<template>
  <div class="premium">
    <h1>{{ $t('cooperationWithUs') }}</h1>

  </div>
</template>

<script>
import {mapMutations} from "vuex";


export default {
  name: "Cooperate",
  components: {},
  beforeMount() {
    const header = this.$i18n.t('cooperationWithUs')
    this.setHeaderLocate([{id:0, name:header}]);
  },
  methods: {
    ...mapMutations({
      setHeaderLocate: 'setHeaderLocate',
    }),
  },

}
</script>

<style scoped>

</style>
