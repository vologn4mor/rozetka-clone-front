<template>
  <div class="certificates">
    <h1>{{ $t('giftCertificates') }}</h1>
    <app-card class="head-card" :width="948">
      <green-card :head-align="'center'">
        <template #head>
          <h3>Найкращий подарунок – це можливість вибору.</h3>
        </template>
        <template #content>
          <h4>Дуже часто виникає питання про те, що подарувати друзям чи близьким,<br>
            колегам чи партнерам з якоїсь нагоди.

            У всіх дуже різні смаки, і вибрати саме те, що потрібно іноді здається просто неможливим.

            Ось чому Подарунковий сертифікат Ладної Хати – найкраще рішення. З ним легко
            подарувати людині можливість на свій смак вибрати саме те, що їй потрібно!

            А ще дарувати сертифікат дуже зручно: де б не була людина, можна надіслати їй електронний варіант Подарункового сертифікату на email або пластиковий подарунковий сертифікат - перевізником, придбавши його на маркетплейсі Ладна Хата.

            Подарунковий сертифікат на товари маркетплейса Ладна Хата буде актуальним у будь-який сезон та до будь-якого свята: день народження, Новий рік, Різдво, День закоханих, 8 березня та інших.

            Подарунковий сертіфікат Ладної Хати у вигляді пластикової карти або електронного сертифікату — це попередній платіж, який дає можливість купувати будь-які товари магазину,
            на суму еквівалентну його номіналу.</h4>
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
