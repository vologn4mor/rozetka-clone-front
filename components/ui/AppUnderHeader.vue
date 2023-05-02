<template>
  <div class='under-header'>
    <div class='under-header__left'>
      <div
        v-if='headerLocate && ($route.path.includes("/category") || $route.path.includes("/article"))'
        class='header-home'>
        <img src='~assets/images/icons/home.svg' alt='home'>
        <div
          v-for='(item, idx) in headerLocate' :key='item.id'
          @click='routerTo(idx, item.id)'
        >
          <img src='~assets/images/icons/home-arrow.svg' alt='home-arrow'>
          <span>{{ cuttedName(item.name) }}</span>
        </div>
      </div>
      <div v-else-if='$route.path === localePath("/")'>
        <img src='~assets/images/icons/HomePage/city-location.svg' alt='city-location'>
        <span>{{ $t('cityDot') }} Київ</span>
        <span>&nbsp;·&nbsp;</span>
        <span class='button'>{{ $t('setDeliveryAddress') }}</span>
      </div>
      <div v-else class='header-home'>
        <img src='~assets/images/icons/home.svg' alt='home'>
        <div>
          <img src='~assets/images/icons/home-arrow.svg' alt='home-arrow'>
          <span>{{ $t(headerLocate[0].name) }}</span>
        </div>
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
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AppUnderHeader',
  computed: {
    ...mapGetters({ headerLocate: 'headerLocate' }),
  },
  methods: {
    routerTo(lvl, id) {
      switch (lvl) {
        case 0: {
          return this.$router.push(this.localePath(`/category/${id}`));
        }
        case 1: {
          return this.$router.push(this.localePath(`/category/${this.headerLocate[0].id}/podcategory/${id}`));
        }
        case 2: {
          if (this.headerLocate.length === 4)
            return this.$router.push(this.localePath(`/category/${this.headerLocate[0].id}/podcategory/${id}`));
          else return 0;
        }
        case 4: {
          return 0;
        }
        default: {
          return 0;
        }
      }
    },
    cuttedName(value) {
      if (!value) return;
      if (value.length < 40) return value;
      return value.slice(0, 40) + '...';
    },
  },
};
</script>

<style lang='scss'>
.main-container {
  max-width: 1435px;
  width: 100%;
  margin: 20px auto;
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

.header-home {
  display: flex;
  text-align: center;

  span, div > span {
    color: $main-dark-gray;
    margin: 3px 10px 0 0;
    white-space: nowrap;
  }

  //div:nth-child(5) {
  //  max-width: 100px;
  //  //font-size: 5px;
  //
  //}

  span:hover {
    cursor: pointer;

  }
}
</style>
