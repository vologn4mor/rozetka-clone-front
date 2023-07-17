<template>
  <div class="cooperate">
    <div class="title">
      <h1>Як стати новим партнером компанії “Ладна Хата”</h1>
    </div>
    <div class="terms">
      <div class="left">
        <p>Якщо ви хочете самостійно продавати на нашому маркетплейсі, будь ласка, заповніть заявку у розділі “Продавати з Ладною Хатою”.</p>
        <p>Якщо ви хочете співпрацювати в якості постачальника, будь ласка, ознайомтеся з наведеною нижче інформацією.</p>
      </div>
      <div class="right">
        <p>Ваші пропозиції надсилайте нам на e-mail:</p>
        <p class="email"> partner@ladnahata.com.ua </p>
      </div>
    </div>
    <div class="cards">
      <app-card :width="'710'">
        <green-card :head-align="'left'" :content-align="'left'" >
          <template #head>
            Для груп товарів, представлених на сайті
          </template>
          <template #content>

            <br><br>Для початку співпраці необхідно надати таку інформацію:<br>
            <ul>
              <li>Коротку характеристику бренду, його частку у відсотках і грошах серед товарних та цінових аналогів на ринку України</li>
              <li>Квартальний оборот за попередніми періодами в різних типах реалізації (онлайн, офлайн, гурт)</li>
              <li>Передбачуваний оборот з урахуванням сезонності</li>
              <li>Список брендів-конкурентів — їхня частка на ринку України</li>
              <li>Список продуктів-конкурентів — їхня частка на ринку України</li>
              <li>Маркетинговий фонд на розвиток бренду з боку постачальника і Бренду</li>
              <li>Маржинальність і ступінь надійності фіксованих цін на ринку</li>
              <li>Вказати переважні характеристики бренду, слабкі та сильні сторони</li>
              <li>Вказати періодичність постачання й обсяг складських залишків</li>
              <li>Кредитні умови</li>
              <li>Форми оплати</li>
              <li>Сервісне обслуговування, можливість повернення</li>
              <li>Консигнація й умови сток ротейшн</li>
              <li>Можливість проведення тренінгів</li>
            </ul>

          </template>
        </green-card>
      </app-card>
      <app-card :width="'710'">
        <green-card :head-align="'left'" :content-align="'left'" >
          <template #head>
            Для груп товарів, представлених на сайті
          </template>
          <template #content>

            <br><br>Для початку співпраці необхідно надати таку інформацію:<br>
            <ul>
              <li>Коротку характеристику бренду, його частку у відсотках і грошах серед товарних і цінових аналогів на ринку України, Європи, Світу</li>
              <li>Квартальний оборот за попередніми періодами в різних типах реалізації (онлайн, офлайн, гурт)</li>
              <li>Передбачуваний оборот з урахуванням сезонності</li>
              <li>Список брендів-конкурентів — їхня частка на ринку України</li>
              <li>Список продуктів-конкурентів — їхня частка на ринку України</li>
              <li>Маркетинговий фонд на розвиток бренду</li>
              <li>Маржинальність і ступінь надійності фіксованих цін на ринку</li>
              <li>Вказати переважні характеристики бренду, слабкі та сильні сторони</li>
              <li>Вказати періодичність постачання й обсяг складських залишків</li>
              <li>Надати зразки продукції</li>
              <li>Кредитні умови</li>
              <li>Форми оплати</li>
              <li>Сервісне обслуговування, можливість повернення</li>
              <li>Можливість проведення тренінгів</li>
              <li>Опис товарів в електронному вигляді</li>
            </ul>
          </template>

        </green-card>
      </app-card>
    </div>


  </div>
</template>

<script>
import {mapMutations} from "vuex";
import AppCard from "../../components/ui/AppCard";
import GreenCard from "../../components/ui/GreenCard";


export default {
  name: "Cooperate",
  components: {GreenCard, AppCard},
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

<style scoped lang="scss">

.terms {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

p {
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  margin: 2px;
}

.right p {
  text-align: end;
}

.right .email {
  color: $lh-accent-orange;
}

.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
  padding-bottom: 40px;
}

li {
  margin: 8px 0 8px -16px;
}

</style>
