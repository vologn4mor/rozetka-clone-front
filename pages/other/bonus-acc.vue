<template>
  <div class="premium">

    <div class="first">
      <app-card :width="'908'">
        <green-card :head-color="'#F45D48'">
          <template #head>
            <div class="advantages">
              <div class="icon">
                <img src="~assets/images/Other/Bonus/purce.png"/>
              </div>
              <span>1 бонусна ₴  =  1 гривня знижки</span>
            </div>
          </template>
          <template #content>
            <p>Накопичуйте бонусні гривні на бонусному рахунку та використовуйте їх для знижки на товар при його покупці</p>
          </template>
        </green-card>
      </app-card>
    </div>
    <div class="second">

      <h3>Як накопичувати бонусні ₴?</h3>

      <div class="blocks">

        <app-img-card :direction="'column'" :width="'710'">
          <template #img-start>
            <img src="~assets/images/Other/Bonus/bonus1.png" alt="curier">
          </template>
          <template #content>
            <div class="content">
              <h5>Бонусні ₴ за покупки</h5>
              <p>Купуйте через особистий кабінет товари з позначкою бонусних гривень та <br>автоматично отримуйте бонуси на рахунок.</p>
              <p>Суму бонусів вказано у картці товару. Бонуси нараховуються цілим числом без <br>округлення, не враховуючи цифри після коми.</p>
              <p>Сума бонусних гривень для нарахування може змінитися, якщо під час оплати <br>товару ви застосували бонусні гривні чи інші знижки.</p>
              <p>Бонусні гривні, нараховані за товар, анулюються, якщо ви не забрали замовлення, <br>відмовилися від нього або оформили повернення товару.</p>
            </div>

          </template>
        </app-img-card>

        <app-img-card :direction="'column'" :width="'710'">
          <template #img-start>
            <img src="~assets/images/Other/Bonus/bonus2.png" alt="curier">
          </template>
          <template #content>
            <div class="content">
              <h5>Бонусні ₴ за відгуки на сайті</h5>

              <p>Шукайте позначку бонусних гривень у блоці «Відгуки покупців» <br>картки товару. Там буде вказано суму бонусних гривень за відгук.</p>

              <div>Нарахування відбувається, якщо:
                <ul>
                  <li>ви придбали товар, до якого залишаєте відгук;</li>
                  <li>відгук є унікальним;</li>
                  <li>містить корисну інформацію про товар;</li>
                  <li>відгук не дублює інші коментарі та не містить спам;</li>
                  <li>за 1 місяць враховується не більше 10 відгуків від користувача.</li>
                </ul>
              </div>

              <p>Період нарахування – протягом 7 днів після публікації відгуку на <br>сайті. Усю інформацію про нарахування/ненарахування відстежуйте <br>в особистому кабінеті.</p>
            </div>

          </template>
        </app-img-card>

      </div>

    </div>
    <div class="third">

      <h3>Як активувати бонусний рахунок?</h3>
      <p>Бонусні гривні нараховуються, тільки якщо ви авторизовані на сайті і ваш бонусний рахунок активован</p>
      <div class="blocks">

        <app-card :width="'710'">
          <green-card :head-color="'#222525'" :content-align="'left'" :head-align="'left'">
            <template #head>
              Якщо ви новий користувач сайту
            </template>
            <template #content>
              <ul>
                <li>Зареєструйтеся на ladnahata.com.ua</li>
                <li>Ваш бонусний рахунок буде активовано автоматично</li>
              </ul>
              <div class="btn">
                <app-button :bg-color="'#078071'" :text="'Зареєструватися'" @click="$router.push('/profile')"></app-button>
              </div>
            </template>
          </green-card>
        </app-card>

        <app-card :width="'710'">
          <green-card :head-color="'#222525'" :content-align="'left'" :head-align="'left'">
            <template #head>
              Якщо ви новий авторизований користувач
            </template>
            <template #content>
              <ul>
                <li><strong>Підтвердьте ваш номер телефону.</strong></li>
                <li>Бонусні ₴ нараховуються тільки, якщо ваш рахунок активовано</li>
                <li>До активації рахунку бонусні гривні мають інформаційний характер</li>
              </ul>
              <div class="btn">
                <app-button :bg-color="'#078071'" :text="'Активувати рахунок'" @click="$router.push('/profile')"></app-button>
              </div>
            </template>
          </green-card>
        </app-card>

      </div>
    </div>
    <div class="fourth">
      <h3>Умови застосування бонусних ₴</h3>
      <div class="blocks">

        <app-card :width="'710'">
          <green-card :head-color="'#222525'" :content-align="'left'" :head-align="'left'">
            <template #head>
              <h6>Термін активації</h6>
            </template>
            <template #content>
              <p>Бонусні ₴ за купівлю товару стають доступними на 16-й день з моменту виконання <br>
                замовлення. До цього часу вони неактивні і використати їх для отримання знижки <br>неможливо.</p>
            </template>
          </green-card>
        </app-card>

        <app-card :width="'710'">
          <green-card :head-color="'#222525'" :content-align="'left'" :head-align="'left'">
            <template #head>
              <h6>Термін дії</h6>
            </template>
            <template #content>
              <p>Термін дії бонусних ₴ – 180 днів з дати активації. Після закінчення 180 днів <br>невикористані бонусні гривні анулюються</p>
              <p>Термін дії бонусних ₴, нарахованих за акційними чи іншими спецпропозиціями, може <br>бути змінено відповідно до умов акції</p>
            </template>
          </green-card>
        </app-card>

      </div>
    </div>



  </div>
</template>

<script>
import {mapMutations} from "vuex";
import AppCard from "@/components/ui/AppCard";
import GreenCard from "@/components/ui/GreenCard";
import AppImgCard from "@/components/ui/AppImgCard";
import AppButton from "@/components/ui/AppButton";


export default {
  name: "BonusAcc",
  components: {AppButton, AppImgCard, GreenCard, AppCard},
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

<style scoped lang="scss">

.first {
  display: flex;
  justify-content: center;
}

.advantages {
  display: flex;
  margin: 20px 0;
  justify-content: center;

  .icon {
    margin-right: 6px;
  }
}

.first p {
  font-size: 16px;
}

h3{
  text-align: center;
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

h5  {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 4px 0;
}

h6 {
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 20px 0;
}

.content {
  display: flex;
  flex-direction: column;
  margin: auto 40px;

}

p {
  margin: 8px 0;
}

.blocks {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
}

.third>p{
  text-align: center;
  margin-bottom: 35px ;
}

.fourth p {
  font-size: 16px ;
}

.btn {
  margin: 0 auto;
  display: flex;
}

li  {
  margin: 8px 0;
}

.fourth {
  margin-bottom: 35px;
}
</style>
