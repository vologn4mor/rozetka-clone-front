<template>
  <div class="certificates">
    <h1>{{ $t('giftCertificates') }}</h1>
    <app-card class="head-card" :width="948">

    </app-card>

  </div>
</template>

<script>
import {mapMutations} from "vuex";
import AppCard from "@/components/ui/AppCard";

export default {
  name: "GiftCertificates",
  components: {AppCard},
  beforeMount() {
    const header = this.$i18n.t('giftCertificates')
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

.certificates{
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 35px;
  text-align: center;
  font-weight: 700;
  font-family: Mariupol-Bold, serif;
}

.head-card {

}
</style>
