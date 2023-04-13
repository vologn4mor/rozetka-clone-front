<template>
  <div>
    <VueSlickArticleCarousel v-bind='itemSettings'>
      <slot>

      </slot>

      <template #prevArrow>
        <img src='~assets/images/icons/left-arrow.svg' alt='arrow'>
      </template>

      <template #nextArrow>
        <img src='~assets/images/icons/left-arrow.svg' alt='arrow' style='transform: rotate(180deg);'>
      </template>


    </VueSlickArticleCarousel>
    <style>

      .slick-slider {
        max-height: 710px !important;
        max-width: 710px !important;
        width: 100% !important;
        height: 100% !important;
      }

      .slick-list {
        border-radius: 15px;
        background-color: #fff !important;
        height: 100% !important;
      }

      .slick-slide {
        display: flex !important;
        align-items: center !important;
        justify-content: center !important;
        align-self: center !important;
      }

      .slick-track {
        display: flex !important;
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
        display: none !important;
      }

      .slick-dots li button:before {
        font-size: 8px !important;
      }

      .slick-dots li.slick-active button:before {
        opacity: 0.75 !important;;
        color: #fff !important;
        font-size: 10px !important;;
      }

    </style>
  </div>

</template>

<script>
import VueSlickArticleCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'AppArticleSlider',
  components: { VueSlickArticleCarousel },
  data() {
    return {
      itemSettings: {
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

<style scoped lang='scss'>

</style>


