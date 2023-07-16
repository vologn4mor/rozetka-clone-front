<template>
  <div class="premium">
    <h1>{{ $t('logoPremium') }}</h1>

    <br>
    <app-img-card :width="'initial'" >
      <template #img-end>
        <img src="~assets/images/Other/Premium/premium.png" alt="premium">
      </template>
      <template #content >
        <div class="ofert">
          <h3>Переваги підписки Premium</h3>

          <div class="advantages">
            <div class="icon">
              <img src="~assets/images/Other/Premium/cam_vector.png"/>
            </div>
            <span>Безкоштовна кур’єрська доставка</span>
          </div>

          <div class="advantages">
            <div class="icon">
              <img src="~assets/images/Other/Premium/film_vector.png"/>
            </div>
            <span>Фільми, серіали та телевізійні канали</span>
          </div>

          <div class="advantages">
            <div class="icon">
              <img src="~assets/images/Other/Premium/cargo_vector.png"/>
            </div>
            <span>Повернення товару кур’єром до 30 днів</span>
          </div>

          <div class="btn">
            <app-button :bg-color="'#F45D48'" :text="'Спробувати 1 місяць за 1₴'" @click="$router.push('/')"></app-button>
          </div>

          <p class="add">А потім: 149₴ на три місяці або 399₴ на 12 місяців</p>


        </div>
      </template>
    </app-img-card>


    <div class="verticals">

      <div class="card">
        <app-img-card :width="'464'" :direction="'column'">
          <template #img-start>
            <img src="~assets/images/Other/Premium/curier.png" alt="curier">
          </template>
          <template #content>
            <green-card>
              <template #head>
                Безкоштовна кур’єрська доставка
              </template>
              <template #content>
                <br><br>
                При замовленні від 250₴
                <br><br>
                Не поширюється на великогабаритні товари
              </template>
            </green-card>
          </template>
        </app-img-card>
      </div>

      <div class="card">
        <app-img-card :width="'464'" :direction="'column'">
          <template #img-start>
            <img src="~assets/images/Other/Premium/megogo.png" alt="curier">
          </template>
          <template #content>
            <green-card>
              <template #head>
                Дивіться на Megogo
              </template>
              <template #content>
                <br><br>
                Доступ до онлайн кінотеатру Megogo на<br> термін дії підписки
                <br><br>
              </template>
            </green-card>
          </template>
        </app-img-card>
      </div>

      <div class="card">
        <app-img-card :width="'464'" :direction="'column'">
          <template #img-start>
            <img src="~assets/images/Other/Premium/additional.png" alt="curier">
          </template>
          <template #content>
            <green-card>
              <template #head>
                Додаткові привелеї для підписників
              </template>
              <template #content>
                <br><br>
                Повернення товару кур’єром до 30 днів
                <br><br>
                Додаткові знижки на деякі категорії товарів
              </template>
            </green-card>
          </template>
        </app-img-card>
      </div>

    </div>

  </div>
</template>

<script>
import {mapMutations} from "vuex";
import AppImgCard from "@/components/ui/AppImgCard";
import AppButton from "@/components/ui/AppButton";
import GreenCard from "@/components/ui/GreenCard";


export default {
  name: "Premium",
  components: {GreenCard, AppButton, AppImgCard},
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

<style scoped lang="scss">

.ofert {
  margin: auto;
  width: fit-content;
}

h3 {
  font-size: 20px;
}

.advantages {
  display: flex;
  margin: 20px 0;

  .icon {
    margin-right: 6px;
  }
}

.btn {
  margin-top: 25px;
}

.add {
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
}

.verticals {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 35px 0;

  .card {
    border-radius: 11px 11px 15px 15px;
    border: $lh-gray 2px solid;
  }

}
</style>
