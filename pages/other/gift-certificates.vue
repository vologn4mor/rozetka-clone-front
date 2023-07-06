<template>
  <div class="certificates">
    <h1>{{ $t('giftCertificates') }}</h1>
    <app-card class="head-card" :width="948">
      <green-card :head-align="'left'">
        <template #head>
          <h3>Найкращий подарунок – це можливість вибору.</h3>
        </template>
        <template #content>
          <h4>Content</h4>
        </template>
      </green-card>
    </app-card>

  </div>
</template>

<script>
import {mapMutations} from "vuex";
import AppCard from "@/components/ui/AppCard";
import GreenCard from "@/components/ui/GreenCard";

export default {
  name: "GiftCertificates",
  components: {GreenCard, AppCard},
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
