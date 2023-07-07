<template>
  <div class="wrapper">
    <div class="topchart">
      <div class="intro">
        <div class="intro-text">
          <h3>Франшиза - те що тобі треба</h3>
          <p class="hint">Відкрийте точку видачі Ладної Хати та заробляйте від 35 000 ₴ чистого прибутку на місяць*</p>
          <p class="remark">* Вказаний фінансовий результат залежить від багатьох факторів та є орієнтовним</p>
        </div>
      </div>
      <div class="img">
        <img src="~assets/images/Other/Franchise/intro.png">
      </div>

    </div>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Franchise",
  beforeMount() {
    const header = this.$i18n.t('franchising')
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
.topchart {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex: 1 1 auto;
}

.intro {
  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.img {
  flex-basis: 100%;
}

.intro-text{

  width: 544px;
  display: flex;
  flex-direction: column;

}
</style>
