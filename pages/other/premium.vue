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

  </div>
</template>

<script>
import {mapMutations} from "vuex";
import AppImgCard from "@/components/ui/AppImgCard";
import AppButton from "@/components/ui/AppButton";


export default {
  name: "Premium",
  components: {AppButton, AppImgCard},
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
</style>
