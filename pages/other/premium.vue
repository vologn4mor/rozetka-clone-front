<template>
  <div class="premium">
    <h1>{{ $t('logoPremium') }}</h1>

  </div>
</template>

<script>
import {mapMutations} from "vuex";


export default {
  name: "Premium",
  components: {},
  beforeMount() {
    const header = this.$i18n.t('logoPremium')
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
