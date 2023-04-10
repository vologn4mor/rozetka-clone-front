<template>
  <div class='main-container'>
    <div class='under-header'>
      <div class='under-header__left'>
        <div>
          <img src='~assets/images/icons/HomePage/city-location.svg' alt='city-location'>
          <span>{{ $t('cityDot') }} Київ</span>
          <span>&nbsp;·&nbsp;</span>
          <span class='button'>{{ $t('setDeliveryAddress') }}</span>
        </div>
      </div>
      <div class='under-header__right'>
        <div>
          <img src='~assets/images/icons/HomePage/help.svg' alt='help'>
          <span>{{ $t('referenceCenter') }}</span>
        </div>
        <div>
          <img src='~assets/images/icons/HomePage/point-location.svg' alt='point-location'>
          <span>{{ $t('deliveryPoints') }}</span>
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
    <ProductsBlock :title='$t("specialOffers")' link='/'>
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
    </ProductsBlock>
    <ProductsBlock :title='$t("hotNewProducts")' link='/'>
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
    </ProductsBlock>
    <ProductsBlock :title='$t("popularBrands")'>
      <div class='brands-container'>
        <div v-for='item in brands' :key='item.id'>
          <img :src='item.logo' :alt='item.name' />
        </div>
      </div>
    </ProductsBlock>
    <div class='ub-container'>
      <div class='ub_container__left'>
        <app-card :style='$i18n.locale === "ru" ? "margin-top: 12px;" : "margin-top: 16px;" '>
          <p>{{ $t('aboutOurCompany') }}</p>
          <nuxt-link to='/'>{{ $t('aboutUs') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('termsOfUseTheSite') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('vacancies') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('contacts') }}</nuxt-link>
        </app-card>
        <app-card :style='$i18n.locale === "ru" ? "margin-top: 12px;" : "margin-top: 16px;" '>
          <p>{{ $t('help') }}</p>
          <nuxt-link to='/'>{{ $t('deliveryAndPayment') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('credit') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('guarantee') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('productReturn') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('serviceCenters') }}</nuxt-link>
        </app-card>
        <app-card :style='$i18n.locale === "ru" ? "margin-top: 12px;" : "margin-top: 16px;" '>
          <img src='~assets/images/HomePage/qr_code.png' alt='qr_code'>
          <p :style='$i18n.locale === "ru" ? "font-size: 13px;" : null '>{{ $t('installOurApp') }}</p>
        </app-card>
      </div>
      <div class='ub_container__right'>
        <ProductsBlock :title='$t("specialOffers")' link='/'>
          <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
          <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
        </ProductsBlock>
      </div>
    </div>
    <ProductsBlock :title='$t("mostAddedToTheList")' link='/'>
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
    </ProductsBlock>
    <ProductsBlock :title='$t("mostExcepted")' link='/'>
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
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
  async asyncData(ctx) {
    const res = await ctx.$axios.$get('Brands/popular', {
      params: {
        number_to_show: 7,
      },
    });

    return { brands: res.data };
  },
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
  align-items: center;
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

    a {
      max-width: 200px;
    }

    div {
      div {
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
          text-align: center;
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
