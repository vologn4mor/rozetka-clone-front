<template>
  <div class='container'>
    <div class='left-block'>
      <h1>Оформлення замовлення</h1>
      <div class='under-header-left'>
        <AppButton text='Я новий покупець' bg-color='#078071' />
        <AppButton text='Я постійний покупець' />
      </div>
      <div class='first-step'>
        <div class='step-num-and-name'>
          <span>1</span>
          <span>Ваші контактні дані</span>
        </div>
        <div class='first-step-inputs'>
          <AppInput value='' label='Прізвище' placeholder='Введіть прізвище' />
          <AppInput value='' label='Ім’я' placeholder='Введіть ім’я' />
          <AppInput value='+380' label='Мобільний телефон' placeholder='Введіть мобільний телефон' />
          <AppInput value='' label='Електронна пошта' placeholder='Введіть вашу пошту' />
        </div>
      </div>
      <h1>Замовлення №1</h1>
      <div class='articles-container'>
        <div class='step-num-and-name'>
          <span>1</span>
          <span>Товар</span>
        </div>
        <div class='articles'>
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
                <span>{{ $t('price') }}</span>
                <span>{{ item.price }}₴</span>
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
          <hr>
        </div>

      </div>
      <div class='second-step'>
        <div class='step-num-and-name'>
          <span>2</span>
          <span>Доставка</span>
        </div>
        <div class='second-step-block'>
          <div class='left-side'>
            <AppCard width='424'>
              <div class='left-side-block'>
                <div class='locate'>
                  <img src='~assets/images/Execution/locate.svg' alt=''>
                  <div class='locate-city'>
                    <span>Ваше місто</span>
                    <span>Київ</span>
                    <span>Київська обл.</span>
                  </div>
                </div>
                <div class='arrow'>
                  <img src='~assets/images/icons/show-more-arrow.svg' alt=''>
                </div>
              </div>
            </AppCard>
            <img class='map' src='~assets/images/map-example.png' alt=''>
          </div>
          <div class='right-side'>
            <AppCard width='605'>
              <div class='right-side-block'>
                <span>Виберіть відповідне відділення</span>
                <div class='arrow'>
                  <img src='~assets/images/icons/show-more-arrow.svg' alt=''>
                </div>
              </div>
            </AppCard>
            <div class='checkboxes-container'>
              <div class='checkbox'>
                <div>
                  <AppCheckbox label='Самовивіз з точок видачи Ладна Хата' />
                  <span class='gray'>Відправляємо завтра</span>
                </div>
                <span class='price'>50$</span>
              </div>
              <div class='checkbox'>
                <div>
                  <AppCheckbox label='Доставка кур’єром (Нова пошта, Meest)' />
                </div>
                <span class='price'>50$</span>
              </div>
              <div class='checkbox'>
                <div>
                  <AppCheckbox label='Доставка до відділень Нової пошти' />
                </div>
                <span class='price'>50$</span>
              </div>
              <div class='checkbox'>
                <div>
                  <AppCheckbox label='Доставка до відділень Meest' />
                  <span class='gray'>Відправляємо завтра</span>
                </div>
                <span class='price'>50$</span>
              </div>
              <div class='checkbox'>
                <div>
                  <AppCheckbox label='Доставка до відділень Укрпошти' />
                  <span class='gray'>Відправляємо завтра</span>
                </div>
                <span class='price'>50$</span>
              </div>

            </div>
          </div>
        </div>
        <hr>
      </div>
      <div class='third-step'>
        <div class='step-num-and-name'>
          <span>3</span>
          <span>Оплата</span>
        </div>
        <AppCard width='1073'>
          <div class='certificate-container'>
            <span>Сертифікат</span>
            <div class='add'>
              <img src='~assets/images/Execution/add.svg' alt=''>
              <span>Додати</span>
            </div>
          </div>
        </AppCard>
        <AppCard width='1073' style='margin: 16px 0'>
          <AppCheckbox label='Оплатити зараз' />
          <div class='paying-container'>
            <div class='checkboxes'>
              <AppCheckbox label='Карткою онлайн' />
              <AppCheckbox label='Google Pay' />
              <AppCheckbox label='Оплатити онлайн карткою “єПідтримка”' />
            </div>
            <AppInput class='input' value='' placeholder='Введіть вашу пошту' label='Електронна пошта' />
          </div>
        </AppCard>
        <div class='third-step-checkboxes'>
          <div class='checkbox'>
            <AppCheckbox label='Безготівковими для юридичних осіб' />
            <span class='gray'>Оплата для юридичних осіб через розрахунковий рахунок</span>
          </div>
          <div class='checkbox'>
            <AppCheckbox label='Оплата під час отримання товару' />
          </div>
          <div class='checkbox'>
            <AppCheckbox label='Оплатити онлайн соціальною картою "Пакунок малюка"' />
          </div>
          <div class='checkbox'>
            <AppCheckbox label='Кредит та оплата частинами' />
            <span class='gray'>Оформлення кредитів у банках партнерів</span>
          </div>
        </div>
        <hr>
      </div>
      <div class='fourth-step'>
        <div class='step-num-and-name'>
          <span>4</span>
          <span>Контактні дані отримувача замовлення</span>
        </div>
        <AppCard width='1073'>
          <div class='warning'>
            <span>Увага! Отримання замовлення за паспортом. Введіть прізвище, ім'я, по батькові та мобільний номер телефону отримувача замовлення</span>
          </div>
        </AppCard>
        <div class='inputs-container'>
          <AppInput value='' placeholder='Введіть прізвище' label='Прізвище' />
          <AppInput value='' placeholder='Введіть ім’я' label='Ім’я' />
          <AppInput value='' placeholder='Введіть по батькові' label='По батькові' />
          <AppInput value='+380' placeholder='Введіть мобільний телефон' label='Мобільний телефон' />
        </div>

      </div>
    </div>
    <div class='right-block'>
      <div class='cart-main-right'>
        <AppCard width='286'>
          <div class='promo-block'>
            <span>Промокод</span>
            <span>Додати</span>
          </div>
        </AppCard>
        <AppCard width='286' style='margin-top: 16px'>
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
              <nuxt-link :to='localePath("/")'>
                Замовлення підтверджую
              </nuxt-link>
            </div>
            <div class='fifth-block'>
              <span>Отримання замовлення від 5 000 ₴ тільки за паспортом (Закон від 06.12.2019 № 361-IX)</span>
              <span>Підтверджуючи замовлення, я приймаю умови:</span>
              <div class='info-block'>
                <img src='~assets/images/icons/ArticlePage/info-gray.svg' alt=''>
                <span>положення про обробку і захист персональних даних</span>
              </div>
              <div class='info-block'>
                <img src='~assets/images/icons/ArticlePage/info-gray.svg' alt=''>
                <span>угоди користувача</span>
              </div>
            </div>
          </div>
        </AppCard>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import AppButton from '@/components/ui/AppButton.vue';
import AppInput from '@/components/ui/AppInput.vue';
import AppCard from '@/components/ui/AppCard.vue';
import AppCheckbox from '@/components/ui/AppCheckbox.vue';

export default {
  name: 'Execution',
  components: { AppCheckbox, AppCard, AppInput, AppButton },
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
    this.setHeaderLocate([{ name: 'makeOrder' }]);
  },
  methods: {
    ...mapMutations({
      setHeaderLocate: 'setHeaderLocate',
      removeCartItem: 'removeCartItem',
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
.container {
  display: flex;
  justify-content: space-between;

  .left-block {
    max-width: 1073px;
    width: 100%;

    .under-header-left {
      display: flex;

      div {
        margin-right: 10px;
      }
    }

    .step-num-and-name {
      display: flex;
      align-items: center;
      margin: 20px 0;

      span:first-child {
        background-color: black;
        border-radius: 10px;
        color: $lh-white;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        margin-right: 15px;
      }

      span:last-child {
        font-weight: bold;
        font-size: 20px;
      }
    }

    .first-step {
      .first-step-inputs {
        display: flex;
        flex-wrap: wrap;
        max-width: 666px;
        justify-content: space-between;

        div {
          max-width: 303px;
          width: 100%;
        }
      }
    }

    .articles-container {
      div {
        margin-top: 10px;
      }

      .articles {

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
                background-color: $lh-accent-green;
                border-radius: 11px;
                color: $lh-white;
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
                width: 40px;
                text-align: center;
              }

              span:first-child {
                background-color: $main-gray;
                color: $lh-white;

              }

            }
          }

          .fourth-block, .second-block {
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
    }

    .second-step {

      .second-step-block {
        display: flex;
        justify-content: space-between;

        .left-side {
          .left-side-block {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .locate {
              display: flex;

              img {
                margin-right: 10px;
              }

              .locate-city {
                display: flex;
                flex-direction: column;

                span:first-child, span:last-child {
                  color: $main-gray;
                  font-size: 12px;
                }
              }
            }
          }

          .map {
            margin-top: 16px;
          }
        }

        .right-side {
          .right-side-block {
            display: flex;
            justify-content: space-between;
            padding: 14px 0;
          }

          .checkboxes-container {

            .checkbox {
              display: flex;
              justify-content: space-between;
              align-items: center;

              div {
                display: flex;
                align-items: center;

                .gray {
                  color: $main-gray;
                  margin-left: 6px;
                }
              }
            }
          }
        }
      }
    }

    .third-step {

      .certificate-container {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .add {
          display: flex;
          align-items: center;

          span {
            margin-left: 6px;
            color: $lh-accent-orange;
          }
        }
      }

      .paying-container {
        padding: 0 10px;

        .checkboxes {
          display: flex;
          justify-content: space-between;
        }

        .input {
          max-width: 303px;
        }
      }

      .third-step-checkboxes {
        .checkbox {
          .gray {
            color: $main-gray;
            margin-left: 24px;
          }
        }
      }

    }

    .fourth-step {
      .warning {
        text-align: center;
      }

      .inputs-container {
        margin-top: 10px;
        max-width: 666px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
      }
    }
  }

  .right-block {
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
        border-top: 1px solid $main-gray;
        border-bottom: 1px solid $main-gray;

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
          background-color: $lh-accent-green;
          white-space: nowrap;
          color: $lh-white;
        }

        a:nth-child(2) {
          margin-top: 10px;
          background-color: $main-gray;
        }
      }

      .fifth-block {
        color: $main-gray;
        display: flex;
        flex-direction: column;

        span, .info-block {
          margin-top: 16px;
        }

        .info-block {
          span {
            margin-top: 0;
            margin-left: 10px;
          }

          display: flex;
          align-items: center;
        }
      }
    }

    .promo-block {
      display: flex;
      justify-content: space-between;

      span:last-child {
        color: #7C7B89;
      }
    }
  }
}
</style>
