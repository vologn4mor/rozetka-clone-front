<template>
  <div class="premium">
    <h1>{{ $t('logoPremium') }}</h1>
    <app-card width="'initial'">
      <green-card :content-align="'left'">

      </green-card>
      <img src="~assets/images/Other/Premium/premium_main.png" alt="premium">
    </app-card>

  </div>
</template>

<script>
import {mapMutations} from "vuex";
import AppCard from "../../components/ui/AppCard";
import GreenCard from "../../components/ui/GreenCard";


export default {
  name: "Premium",
  components: {GreenCard, AppCard},
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
