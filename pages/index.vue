<template>
  <div class='main-container'>
    <div class='under-header'>
      <div class='under-header__left'>
        <div>
          <img src='~assets/icons/HomePage/city-location.svg' alt='city-location'>
          <span>г. Киев</span>
          <span>&nbsp;·&nbsp;</span>
          <span class='button'>Указать адресс доставки</span>
        </div>
      </div>
      <div class='under-header__right'>
        <div>
          <img src='~assets/icons/HomePage/help.svg' alt='help'>
          <span>Довидковий центр</span>
        </div>
        <div>
          <img src='~assets/icons/HomePage/point-location.svg' alt='point-location'>
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
        <img src='~assets/icons/left-arrow.svg' alt='arrow'>
      </template>

      <template #nextArrow>
        <img src='~assets/icons/left-arrow.svg' alt='arrow' style='transform: rotate(180deg);'>
      </template>
    </VueSlickCarousel>
    <ProductsBlock title='Акционные товары' link='/akzii'>
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
    </ProductsBlock>
    <ProductsBlock title='Новинки' link='/novinki'>
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
    </ProductsBlock>
    <ProductsBlock title='Ожидаемые' link='/ozhidaemie'>
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne item-state='В наличии' :cost='2500' name='GNUSMAS' image='' />
    </ProductsBlock>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';
import ProductsBlock from '@/components/ui/ProductsBlock.vue';
import ProductOne from '@/components/ui/ProductOne.vue';

export default {
  name: 'IndexPage',
  components: { ProductOne, ProductsBlock, VueSlickCarousel },
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
