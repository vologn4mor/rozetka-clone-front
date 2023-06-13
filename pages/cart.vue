<template>
  <div class='cart-container'>
    <div class='cart-main'>
      <div class='cart-main-left'>
        <AppCard
          v-for='item in items'
          :key='item.id'
          width='1073'
        >
          <div class='cart-main-container'>
            <div class='img-and-name' @click='$router.push(localePath(`/article/${item.id}`))'>
              <div>
                <img :src='item.preview_img.url' alt=''>
              </div>
              <span>{{ item.title }}</span>
            </div>
            <div class='second-block'>
              <div>
                <img id='favorite' src='~assets/images/icons/product-favorite.svg' alt='favorite' class='favorite'>
                <span>{{ $t('save') }}</span>
              </div>
              <div @click='removeItem(item.id)'>
                <img id='favorite' src='~assets/images/icons/item-cart-minus.svg' alt='favorite' class='favorite'>
                <span>{{ $t('delete') }}</span>
              </div>
            </div>
            <div class='third-block'>
              <span>{{ $t('quantity') }}</span>
              <div>
                <span @click='changeCount(item.id, false)'>-</span>
                <span>{{ item.count }}</span>
                <span @click='changeCount(item.id, true)'>+</span>
              </div>
            </div>
            <div class='fourth-block'>
              <span>{{ $t('sum') }}</span>
              <span>{{ item.total_sum_item }}₴</span>
            </div>
          </div>
        </AppCard>
      </div>
      <div class='cart-main-right'>
        <AppCard width='286'>
          <div class='cart-main-right-container'>
            <div class='first-block'>
              <span>{{ $t('together') }}</span>
            </div>
            <div class='second-block'>
              <div>
                <span>{{ total_count }} {{ $t('productsOnSum') }}</span>
                <span>{{ total_sum }}₴</span>
              </div>
              <div>
                <span>{{ $t('deliveryPrice') }}</span>
                <span>{{ $t('carriersTariffs') }}</span>
              </div>
            </div>
            <div class='third-block'>
            <span>
              {{ $t('forPaying') }}
            </span>
              <span>
              {{ total_sum }}₴
            </span>
            </div>
            <div class='fourth-block'>
              <nuxt-link :to='localePath("/execution")'>
                {{ $t('makeOrder') }}
              </nuxt-link>
              <nuxt-link :to='localePath("/")'>
                {{ $t('continueShopping') }}
              </nuxt-link>
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import AppCard from '@/components/ui/AppCard.vue';

export default {
  name: 'Cart',
  components: { AppCard },
  data() {
    return {
      items: null,
      total_count: 0,
      total_sum: 0,
    };
  },
  async fetch() {
    const cartItemsIds = this.cartItems.map(item => item.id);
    const res = await this.$axios.$post('/Goods/from-list-light', cartItemsIds);
    if (!res) return;

    const data = res.data.articles.map(item => {
      const cartItem = this.cartItems.filter((itemCart) => itemCart.id === item.id);
      return {
        ...item,
        count: cartItem[0].count,
        total_sum_item: item.price,
      };
    });
    this.items = data.sort((a, b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    this.total_count = data.length;
    this.items.forEach(item => {
      this.total_sum += Number(item.price);
    });
  },
  fetchOnServer: false,
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
    }),
  },
  watch: {
    items() {
      this.total_count = 0;
      this.total_sum = 0;
      this.items.forEach(item => {
        this.total_sum += Number(item.price) * item.count;
        this.total_count += item.count;
      });
    },
  },
  beforeMount() {
    this.setHeaderLocate([{ name: 'cart' }]);
  },
  methods: {
    ...mapMutations({
      removeCartItem: 'removeCartItem',
      setHeaderLocate: 'setHeaderLocate',
      changeItemCount: 'changeItemCount',
    }),
    changeCount(id, isAdd) {
      this.items = this.items.map(item => {
        if (item.id === id) {
          if (!isAdd && item.count === 1) return item;
          this.changeItemCount({ id, count: item.count + (isAdd ? 1 : -1) });
          return {
            ...item,
            count: item.count + (isAdd ? 1 : -1),
            total_sum_item: (item.count + (isAdd ? 1 : -1)) * item.price,
          };
        }
        return item;
      });
    },
    removeItem(id) {
      this.items = this.items.filter(item => {
        return item.id !== id;
      });
      this.removeCartItem(id);
    },
  },

};
</script>

<style scoped lang='scss'>
.cart-main {
  display: flex;
  justify-content: space-between;
}

.cart-main-left {
  div {
    margin: 10px 0;
  }

  .cart-main-container {
    display: flex;
    align-items: center;
    justify-content: space-around;

    div {
      margin: 0;
    }

    .img-and-name {
      display: flex;
      align-items: center;

      div {
        width: 105px;
        height: 105px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          max-width: 105px;
          max-height: 105px;
        }
      }

      span {
        margin-left: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 295px;
      }
    }

    .img-and-name:hover {
      cursor: pointer;
    }

    .second-block {
      padding: 20px 70px;
      border-left: 2px solid $main-gray;
      border-right: 2px solid $main-gray;

      div {
        display: flex;
        align-items: center;
      }

      div:first-child {
        margin-bottom: 16px;
      }

      div:hover {
        cursor: pointer;
      }

      img {
        margin-right: 5px;
      }
    }

    .third-block {
      span {
        color: $main-gray;
      }

      div {
        display: flex;
        align-items: center;
        margin-top: 10px;

        span:nth-child(2n+1) {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: $main-dark-gray;
          border-radius: 11px;
          color: $main-light-gray;
          width: 37px;
          height: 37px;
          -webkit-user-select: none; /* Safari */
          -ms-user-select: none; /* IE 10 and IE 11 */
          user-select: none; /* Standard syntax */
        }

        span:nth-child(2n+1):hover {
          cursor: pointer;
        }

        span:nth-child(2n) {
          font-size: 20px;
          //margin: 0 10px;
          width: 40px;
          text-align: center;
        }

      }
    }

    .fourth-block {
      display: flex;
      flex-direction: column;

      span:first-child {
        color: $main-gray;
        margin-bottom: 10px;
      }

      span:nth-child(2) {
        font-size: 20px;
        width: 60px;
      }
    }
  }
}

.cart-main-right-container {
  .first-block {
    margin-bottom: 16px;

    span {
      font-size: 31px;
      color: #221F1F;
      font-weight: bold;
    }
  }

  .second-block {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;

      span:first-child {
        white-space: nowrap;
        color: $main-gray;
      }

      span:nth-child(2) {
        font-size: 13px;
        max-width: 78px;
      }
    }
  }

  .third-block {
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    margin: 10px 0;
    border-top: 3px solid $main-gray;
    border-bottom: 3px solid $main-gray;

    span:first-child {
      color: $main-gray;
    }
  }

  .fourth-block {
    display: flex;
    flex-direction: column;

    a {
      padding: 12px 44px;
      border-radius: 11px;
      text-decoration: none;
      color: $main-light-gray;
      text-align: center;
    }

    a:first-child {
      background-color: #2B2C34;
    }

    a:nth-child(2) {
      margin-top: 10px;
      background-color: $main-gray;
    }
  }
}
</style>
