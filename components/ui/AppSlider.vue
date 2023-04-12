<template>
  <VueSlickCarousel v-bind='settings'>
    <slot>

    </slot>

    <template #prevArrow>
      <img src='~assets/images/icons/left-arrow.svg' alt='arrow'>
    </template>

    <template #nextArrow>
      <img src='~assets/images/icons/left-arrow.svg' alt='arrow' style='transform: rotate(180deg);'>
    </template>
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
  name: 'AppSlider',
  components: { VueSlickCarousel },
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

</style>
