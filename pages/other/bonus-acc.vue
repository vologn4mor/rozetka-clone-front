<template>
  <div class="premium">
    <h1>{{ $t('bonusAccount') }}</h1>

  </div>
</template>

<script>
import {mapMutations} from "vuex";


export default {
  name: "BonusAcc",
  components: {},
  beforeMount() {
    const header = this.$i18n.t('bonusAccount')
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
