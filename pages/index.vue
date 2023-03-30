<template>
  <div class='main-container'>
    <div class='under-header'>
      <div class='under-header__left'>
        <div>
          <img src='~assets/images/icons/HomePage/city-location.svg' alt='city-location'>
          <span>г. Киев</span>
          <span>&nbsp;·&nbsp;</span>
          <span class='button'>Указать адресс доставки</span>
        </div>
      </div>
      <div class='under-header__right'>
        <div>
          <img src='~assets/images/icons/HomePage/help.svg' alt='help'>
          <span>Довидковий центр</span>
        </div>
        <div>
          <img src='~assets/images/icons/HomePage/point-location.svg' alt='point-location'>
          <span>Точки видачи Logo</span>
        </div>
      </div>
    </div>
    <VueSlickCarousel v-bind='settings'>
      <div class='slide'><h1>1</h1></div>
      <div class='slide'><h1>2</h1></div>
      <div class='slide'><h1>3</h1></div>
      <div class='slide'><h1>4</h1></div>

      <template #prevArrow>
        <img src='~assets/images/icons/left-arrow.svg' alt='arrow'>
      </template>

      <template #nextArrow>
        <img src='~assets/images/icons/left-arrow.svg' alt='arrow' style='transform: rotate(180deg);'>
      </template>
    </VueSlickCarousel>
    <ProductsBlock title='Акционные товары' link='/'>
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
    </ProductsBlock>
    <ProductsBlock title='Новинки' link='/'>
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
    </ProductsBlock>
    <ProductsBlock title='Ожидаемые' link='/'>
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
    </ProductsBlock>
    <ProductsBlock title='Популярные бренды'>
      <div class='brands-container'>
        <img src='~assets/images/HomePage/pepsi.png' alt='pepsi'>
        <img src='~assets/images/HomePage/puma.png' alt='puma'>
        <img src='~assets/images/HomePage/avene.png' alt='avene'>
        <img src='~assets/images/HomePage/laroche.png' alt='laroche'>
        <img src='~assets/images/HomePage/adidas.png' alt='adidas'>
        <img src='~assets/images/HomePage/dyson.png' alt='dyson'>
        <img src='~assets/images/HomePage/levis.png' alt='levis'>
      </div>
    </ProductsBlock>
    <div class='ub-container'>
      <div class='ub_container__left'>
        <app-card>
          <p>Про нашу компанию</p>
          <nuxt-link to='/'>Про нас</nuxt-link>
          <nuxt-link to='/'>Умови використання</nuxt-link>
          <nuxt-link to='/'>Вакансии</nuxt-link>
          <nuxt-link to='/'>Контакты</nuxt-link>
        </app-card>
        <app-card>
          <p>Допомога</p>
          <nuxt-link to='/'>Доставка та оплата</nuxt-link>
          <nuxt-link to='/'>Кредит</nuxt-link>
          <nuxt-link to='/'>Гарантия</nuxt-link>
          <nuxt-link to='/'>Повернення товару</nuxt-link>
          <nuxt-link to='/'>Сервисни центри</nuxt-link>
        </app-card>
        <app-card>
          <img src='~assets/images/HomePage/qr_code.png' alt='qr_code'>
          <p>Встановлюйте наш додаток</p>
        </app-card>
      </div>
      <div class='ub_container__right'>
        <ProductsBlock title='Ожидаемые' link='/'>
          <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
        </ProductsBlock>
      </div>
    </div>
    <ProductsBlock title='Ожидаемые' link='/'>
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
    </ProductsBlock>
    <ProductsBlock title='Ожидаемые' link='/'>
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
    </ProductsBlock>
    <AppFooter />
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import ProductsBlock from '@/components/ui/ProductsBlock.vue';
import ProductOne from '@/components/ui/ProductOne.vue';
import AppCard from '@/components/ui/AppCard.vue';

export default {
  name: 'IndexPage',
  components: { AppCard, ProductOne, ProductsBlock, VueSlickCarousel },
  data() {
    return {
      settings: {
        'dots': true,
        'dotsClass': 'slick-dots custom-dot-class',
        'edgeFriction': 0.35,
        'infinite': true,
        'speed': 500,
        'slidesToShow': 1,
        'slidesToScroll': 1,
        // 'autoplay': true,
        // 'autoplaySpeed': 5000,
      },
    };
  },
};
</script>

<style lang='scss'>

.main-container {
  max-width: 1435px;
  width: 100%;
  margin: 20px auto;
}

.slick-slider {
  height: 383px;
}

.slick-list {
  height: 100%;
  background-color: $main-light-gray;
  border-radius: 15px;
}

.slick-dots {
  bottom: 10px !important;
}

.slick-prev {
  left: 15px !important;
  z-index: 1;
}

.slick-next {
  right: 15px !important;;
  z-index: 1;
}

.slick-dots li {
  width: 12px !important;;
  margin: 0 !important;;
}

.slick-dots li button:before {
  font-size: 8px !important;
}

.slick-dots li.slick-active button:before {
  opacity: 0.75 !important;;
  color: $main-dark-gray !important;;
  font-size: 10px !important;;
}

.under-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.under-header__right {
  align-items: center;
  display: flex;

  div {
    align-items: center;
    display: flex;

    img {
      margin-right: 10px;
    }
  }

  div:first-child {
    margin-right: 30px;
  }
}

.under-header__left {
  align-items: center;
  display: flex;

  div {
    display: flex;
  }

  img {
    margin-right: 10px;
  }

  .button {
    color: $main-gray;
  }

}

.brands-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    margin-top: 20px;
    padding: 0 15px;
  }

  img:first-child {
    padding: 0;
    padding-right: 15px;
  }

  img:last-child {
    padding: 0;
    padding-left: 15px;
  }
}

.ub-container {
  display: flex;

  .ub_container__left {
    margin-top: 20px;

    div {
      div {
        margin-top: 16px;
        display: flex;
        flex-direction: column;

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

    }

    div:nth-child(3) {

      div {
        img {
          margin: 0 auto;
          width: 157px;
          height: 157px;
        }

        p {
          white-space: nowrap;
        }
      }
    }
  }

  .ub_container__right {
    width: 100%;
    margin-left: 16px;
  }
}

</style>

<style lang='scss' scoped>
@media (max-width: 1445px) {
  .main-container {
    max-width: none;
    width: auto;
    margin: 20px;
  }
}
</style>
