<template>
  <div class='footer-container'>
    <div class='footer-container__left'>
      <div>
        <AppCard>
          <p>Сервисы</p>
          <nuxt-link to='/'>Бонусный рахунок</nuxt-link>
          <nuxt-link to='/'>Logo Premium</nuxt-link>
          <nuxt-link to='/'>Подарункові сертифікати</nuxt-link>
          <nuxt-link to='/'>Logo Обмін</nuxt-link>
        </AppCard>
        <AppCard>
          <p>Ми в соц.мережах</p>
          <div>
            <img src='~assets/images/icons/footer/facebook.svg' alt='telegram'>
            <img src='~assets/images/icons/footer/twitter.svg' alt='twitter'>
            <img src='~assets/images/icons/footer/youtube.svg' alt='youtube'>
            <img src='~assets/images/icons/footer/instagram.svg' alt='instagram'>
            <img src='~assets/images/icons/footer/telegram.svg' alt='telegram'>
          </div>
        </AppCard>
        <div class='text_first_block'>
          <span>ТМ використовується на підставі ліцензії правовласника RozetkaLTD</span>
        </div>
      </div>
      <div>
        <AppCard>
          <p>Партнерам</p>
          <nuxt-link to='/'>Продавати на Розетці</nuxt-link>
          <nuxt-link to='/'>Співпраця з нами</nuxt-link>
          <nuxt-link to='/'>Франчайзинг</nuxt-link>
          <nuxt-link to='/'>Оренда приміщень</nuxt-link>
        </AppCard>
        <AppCard>
          <p>Наші додатки</p>
          <div>
            <img src='~assets/images/icons/footer/google-play.svg' alt='google'>
            <img src='~assets/images/icons/footer/appstore.svg' alt='appstore'>
          </div>
        </AppCard>
        <div class='text_second_block'><span>© 2001–2023 Інтернет-магазин «Розетка™» — Щоразу що треба</span></div>
      </div>
    </div>
    <ProductsBlock title='Ожидаемые' link='/'>
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
    </ProductsBlock>
  </div>
</template>

<script>
import AppCard from '@/components/ui/AppCard.vue';
import ProductsBlock from '@/components/ui/ProductsBlock.vue';
import ProductOne from '@/components/ui/ProductOne.vue';

export default {
  name: 'AppFooter',
  components: { ProductOne, ProductsBlock, AppCard },
};
</script>

<style lang='scss'>
.footer-container {
  display: flex;
}

.footer-container__left {
  margin-top: 20px;
  display: flex;

  .text_first_block, .text_second_block {
    font-size: 12px;
    margin-top: 18px;
    max-width: 190px;
  }

  .text_first_block {
    color: #797878;
  }

  .text_second_block {
    color: #221F1F;
  }

  div {

    div:first-child {
      margin: 16px 16px 0 0;
      display: flex;
      flex-direction: column;

      div {
        margin: 0;
      }

      p {
        margin: 0 0 14px 0;
        color: $main-gray;
      }

      a {
        text-decoration: none;
        color: $main-dark-gray;
        margin-bottom: 16px;
      }

      a:last-child {
        margin-bottom: 0;
      }
    }

    div:nth-child(2) {
      margin-top: 16px;

      div {
        margin: 0;
        display: flex;
        justify-content: space-between;
      }

    }
  }
}
</style>
