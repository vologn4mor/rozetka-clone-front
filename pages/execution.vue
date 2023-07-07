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
          <AppInput
            :value='sendData.user.last_name'
            label='Прізвище'
            placeholder='Введіть прізвище'
            @input='(val) => sendData.user.last_name = val'
          />
          <AppInput
            :value='sendData.user.first_name'
            label='Ім’я'
            placeholder='Введіть ім’я'
            @input='(val) => sendData.user.first_name = val'
          />
          <AppInput
            :value='sendData.user.phone' type='phone' label='Мобільний телефон'
            :max-length='9'
            placeholder='Введіть мобільний телефон'
            @input='(val) => sendData.user.phone = val'
          />

          <AppInput
            :value='sendData.user.email'
            type='email'
            label='Електронна пошта'
            placeholder='Введіть вашу пошту'
            @input='(val) => sendData.user.email = val'
          />
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
            <AppCard width='424' @click='cityModal = true'>
              <div class='left-side-block'>
                <div class='locate'>
                  <img src='~assets/images/Execution/locate.svg' alt=''>
                  <div class='locate-city'>
                    <span>Ваше місто</span>
                    <span>{{ citySelected?.name }}</span>
                    <span>{{ citySelected?.area }}</span>
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
            <AppCard width='605' @click='openDeliveryModal'>
              <div class='right-side-block'>
                <span>{{ sendData.delivery_adress.street ? sendData.delivery_adress.street : 'Виберіть відповідне відділення'
                  }}</span>
                <div class='arrow'>
                  <img src='~assets/images/icons/show-more-arrow.svg' alt=''>
                </div>
              </div>
            </AppCard>
            <div class='checkboxes-container'>
              <!--              <div class='checkbox'>-->
              <!--                <div>-->
              <!--                  <AppCheckbox label='Самовивіз з точок видачи Ладна Хата' />-->
              <!--                  <span class='gray'>Відправляємо завтра</span>-->
              <!--                </div>-->
              <!--                <span class='price'>50₴</span>-->
              <!--              </div>-->
              <!--              <div class='checkbox'>-->
              <!--                <div>-->
              <!--                  <AppCheckbox label='Доставка кур’єром (Нова пошта, Meest)' />-->
              <!--                </div>-->
              <!--                <span class='price'>50₴</span>-->
              <!--              </div>-->
              <div class='checkbox'>
                <div>
                  <AppCheckbox
                    label='Доставка до відділень Нової пошти'
                    :checked='sendData.delivery_branch_id === 1'
                    @change=' val => sendData.delivery_branch_id = val ? 1 : null'
                  />
                </div>
                <span class='price'>50₴</span>
              </div>
              <div class='checkbox'>
                <div>
                  <AppCheckbox
                    label='Доставка до відділень Meest'
                    :checked='sendData.delivery_branch_id === 2'
                    @change=' val => sendData.delivery_branch_id = val ? 2 : null'
                  />
                  <span class='gray'>Відправляємо завтра</span>
                </div>
                <span class='price'>50₴</span>
              </div>
              <div class='checkbox'>
                <div>
                  <AppCheckbox
                    label='Доставка до відділень Укрпошти'
                    :checked='sendData.delivery_branch_id === 3'
                    @change=' val => sendData.delivery_branch_id = val ? 3 : null'
                  />
                  <span class='gray'>Відправляємо завтра</span>
                </div>
                <span class='price'>50₴</span>
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
          <AppCheckbox
            label='Оплатити зараз'
            :checked='[1,2,3,4].includes(sendData.payData.payment_type_id)'
            @change=' val => sendData.delivery_branch_id = val ? 1 : null'
          />
          <div class='paying-container'>
            <div class='checkboxes'>
              <AppCheckbox
                label='Карткою онлайн'
                :checked='sendData.payData.payment_type_id === 2'
                @change=' val => sendData.payData.payment_type_id = val ? 2 : null'
              />
              <AppCheckbox
                label='Google Pay'
                :checked='sendData.payData.payment_type_id === 3'
                @change=' val => sendData.payData.payment_type_id = val ? 3 : null'
              />
              <AppCheckbox
                label='Оплатити онлайн карткою “єПідтримка”'
                :checked='sendData.payData.payment_type_id === 4'
                @change=' val => sendData.payData.payment_type_id = val ? 4 : null'
              />
            </div>
            <AppInput
              :value='sendData.user.email'
              class='input'
              placeholder='Введіть вашу пошту'
              label='Електронна пошта'
              @input='(val) => sendData.user.email = val'
            />
          </div>
        </AppCard>
        <div class='third-step-checkboxes'>
          <div class='checkbox'>
            <AppCheckbox
              label='Безготівковими для юридичних осіб'
              :checked='sendData.payData.payment_type_id === 5'
              @change=' val => sendData.payData.payment_type_id = val ? 5 : null'
            />
            <span class='gray'>Оплата для юридичних осіб через розрахунковий рахунок</span>
          </div>
          <div class='checkbox'>
            <AppCheckbox
              label='Оплата під час отримання товару'
              :checked='sendData.payData.payment_type_id === 6'
              @change=' val => sendData.payData.payment_type_id = val ? 6 : null' />
          </div>
          <div class='checkbox'>
            <AppCheckbox
              label='Оплатити онлайн соціальною картою "Пакунок малюка"'
              :checked='sendData.payData.payment_type_id === 7'
              @change=' val => sendData.payData.payment_type_id = val ? 7 : null'
            />
          </div>
          <div class='checkbox'>
            <AppCheckbox
              label='Кредит та оплата частинами'
              :checked='sendData.payData.payment_type_id === 8'
              @change=' val => sendData.payData.payment_type_id = val ? 8 : null' />
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
          <AppInput
            :value='sendData.user.last_name'
            placeholder='Введіть прізвище'
            label='Прізвище'
          />
          <AppInput
            :value='sendData.user.first_name'
            placeholder='Введіть ім’я' label='Ім’я'
          />
          <AppInput
            :value='sendData.user.middle_name'
            placeholder='Введіть по батькові'
            label='По батькові'
          />
          <AppInput
            :value='sendData.user.phone'
            type='phone'
            label='Мобільний телефон'
            placeholder='Введіть мобільний телефон'
          />
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
              <button @click='createOrder'>
                Замовлення підтверджую
              </button>
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
    <AppModalCard v-if='cityModal' width='981px' class='city-modal' @close='cityModal = false'>
      <h2>Виберіть своє місто</h2>
      <hr>
      <span>Найчастіше обирають</span>
      <div class='cities-block'>
        <AppCard v-for='city in citiesSaved' :key='city.id' @click=selectCityFromSaved(city.id)>{{ city.name }}
        </AppCard>
        <!--        <AppCard>Дніпро</AppCard>-->
        <!--        <AppCard>Харків</AppCard>-->
        <!--        <AppCard>Одеса</AppCard>-->
        <!--        <AppCard>Запоріжжя</AppCard>-->
        <!--        <AppCard>Львів</AppCard>-->
        <!--        <AppCard>Луцьк</AppCard>-->
      </div>
      <div class='cities-input-block'>
        <AppInput
          id='inputCity'
          ref-input='inputCity'
          label='Вкажіть населенний пункт України'
          placeholder='Назва мiста'
          value=''
          @focus='cityFocusInput = true'
          @input='val => cityValue = val'
        />
        <div v-if='cityFocusInput && citiesList.length' id='inputCityBlock' class='cities-list-block'>

          <span
            v-for='city in citiesList'
            :key='city.id'
            @click='selectCityFromServer(city.id)'>
            {{ city.name }} - {{ city.area }}
          </span>

        </div>
        <span>Наприклад, <span class='green'>Котюжини</span></span>
      </div>
      <div class='cities-buttons-block'>
        <AppButton text='Перейти на головну сторінку' @click='$router.push(localePath("/"))' />
        <AppButton text='Застосувати' bg-color='#078071' @click='appendCity(cityValue)' />
      </div>
      <div class='cities-footer'>
        <span>Вибір міста допоможе надати актуальну інформацію про наявність товару, його ціни та методів доставки у вашому місті! Це допоможе зберегти більше вільного часу для вас!</span>
      </div>
    </AppModalCard>
    <AppModalCard v-if='deliveryModal' width='981px' class='delivery-modal' @close='deliveryModal = false'>
      <div class='delivery-header'>
        <h2>Виберіть відповідне відділення</h2>
        <AppButton text='Застосувати' bg-color='#078071' @click='selectDelivery' />
      </div>
      <hr>
      <div class='select-block'>
        <span>Вкажіть населенний пункт України</span>
        <AppSelect v-if='deliveryItems' :options='deliveryItems' @input='val => changeDeliveryValue(val)' />
      </div>
      <div class='times-block'>
        <div>
          <b>Понеділок - Суббота:</b>
          <span>09:00 - 20:00</span>
        </div>
        <div>
          <b>Неділя: </b>
          <span>10:00 - 19:00</span>
        </div>
      </div>
    </AppModalCard>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import AppButton from '@/components/ui/AppButton.vue';
import AppInput from '@/components/ui/AppInput.vue';
import AppCard from '@/components/ui/AppCard.vue';
import AppCheckbox from '@/components/ui/AppCheckbox.vue';
import Debug from '@/helpers/Debug';

export default {
  name: 'Execution',
  components: { AppCheckbox, AppCard, AppInput, AppButton },
  data() {
    return {
      items: null,
      total_count: 0,
      total_sum: 0,
      sendData: {
        user: {
          first_name: '',
          last_name: '',
          email: '',
          password: '',
          middle_name: '',
        },
        receiver: {
          first_name: '',
          last_name: '',
          middle_name: '',
          profile_name: '',
          email: '',
          phone: '',
        },
        payData: {
          payment_type_id: 2,
          email: 'email@test.test',
          edrpou: '',
          legal_entity_name: '',
        },
        goods: [
          {
            article_id: 0,
            price: 0,
            quantity: 0,
          },
        ],
        certificates: ['11110000'],
        promo_codes: null,
        delivery_branch_id: 1,
        delivery_adress: {
          city_name: 'Киев',
          street: '',
          building: '1',
          apartment: '1',
        },
        total_price: null,
      },
      cityModal: false,
      cityValue: '',
      cityFocusInput: false,
      citiesList: [],
      citiesSaved: [
        {
          'id': 8837,
          'name': 'Київ',
          'area': 'Київська',
          'coautsu': '8000000000',
          'zip': '01001',
        },
        {
          'id': 5602,
          'name': 'Дніпро',
          'area': 'Дніпропетровська область',
          'coautsu': '1210100000',
          'zip': '49000',
        },
        {
          'id': 24193,
          'name': 'Харків',
          'area': 'Харківська область',
          'coautsu': '6310100000',
          'zip': '61001',
        },
        {
          'id': 16154,
          'name': 'Одеса',
          'area': 'Одеська область',
          'coautsu': '5110100000',
          'zip': '65001',
        },
        {
          'id': 7018,
          'name': 'Запоріжжя',
          'area': 'Херсонська область',
          'coautsu': '6520982003',
          'zip': '74120',
        },
        {
          'id': 12058,
          'name': 'Львів',
          'area': 'Дніпропетровська область',
          'coautsu': '1221881203',
          'zip': '53080',
        },
        {
          'id': 12030,
          'name': 'Луцьк',
          'area': 'Волинська область',
          'coautsu': '0710100000',
          'zip': '43005',
        },
      ],
      citySelected: null,
      deliveryModal: false,
      deliveryItems: [],
      deliveryValue: '',
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

    await this.searchCity();
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
      user: 'user/user',
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
    async cityValue() {
      await this.searchCity();
    },
  },
  beforeMount() {
    this.setHeaderLocate([{ name: 'makeOrder' }]);
    if (this.user) {
      this.sendData.user = {
        first_name: this.user.first_name,
        last_name: this.user.last_name,
        middle_name: this.user.middle_name,
        email: this.user.email,
        phone: this.user.phone,
      };
    }
    this.citySelected = this.citiesSaved[0];
  },
  mounted() {
    document.addEventListener('click', this.hideBlockOutside);
  },
  methods: {
    ...mapMutations({
      setHeaderLocate: 'setHeaderLocate',
      removeCartItem: 'removeCartItem',
      changeItemCount: 'changeItemCount',
      setCartItems: 'setCartItems',
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
    async createOrder() {
      try {
        this.sendData.goods = this.items.map(item => {
          return {
            article_id: item.id,
            price: Number(item.price),
            quantity: item.count,
          };
        });

        this.sendData.total_price = this.total_sum - 100;

        this.sendData.user = {
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          email: this.user.email,
          phone: this.user.phone,
        };

        this.sendData.receiver = {
          first_name: this.user.first_name,
          last_name: this.user.last_name,
          middle_name: this.user.middle_name,
          profile_name: this.user.profile_name,
          email: this.user.email,
          phone: this.user.phone,
        };

        this.sendData.delivery_adress.city_name = this.citySelected.name;

        const res = await this.$axios.$post('/Orders/new', this.sendData);
        if (res.status === 'Success') {
          this.$toast.success('Заявка успешно создана');
          this.setCartItems([]);
          this.$router.push(this.localePath('/'));
        } else this.$toast.error(res.message);
        // this.$router.push(this.localePath('/'));
      } catch (e) {
        Debug.log(e);
        this.$toast.error(e.message);
      }
    },
    async searchCity() {
      const res = await this.$axios.$get('/Delivery/city', {
        params: {
          search: this.cityValue,
          limit: 10,
        },
      });

      this.citiesList = res.data;
    },
    selectCityFromSaved(id) {
      this.citySelected = this.citiesSaved.filter(item => item.id === id)[0];
      this.cityModal = false;
    },
    selectCityFromServer(id) {
      this.citySelected = this.citiesList.filter(item => item.id === id)[0];
      this.cityModal = false;
    },
    appendCity(name) {
      const city = this.citiesList.filter(item => item.name === name)[0];
      if (!city) return this.$toast.error('Такого мiста не має');
      this.citySelected = city;
      this.cityModal = false;
    },
    hideBlockOutside(event) {
      if (!event.target.id) {
        this.cityFocusInput = false;
      }
    },
    async openDeliveryModal() {
      const res = await this.$axios.$get('/Delivery/delivery-branches', {
        params: {
          city_id: this.citySelected.id,
          delivery_id: this.sendData.delivery_branch_id,
          limit: 20,
        },
      });

      this.deliveryItems = res.data.map(item => {
        return {
          ...item,
          value: item.address,
        };
      });

      this.deliveryModal = true;
    },
    selectDelivery() {
      this.sendData.delivery_adress.street = this.deliveryValue;
      this.deliveryModal = false;
    },
    changeDeliveryValue(id) {
      const item = this.deliveryItems.filter(item => item.id === id);
      if (item.length) {
        this.deliveryValue = item[0].address;
      }
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

        div {
          max-width: 260px;
          width: 100%;
        }
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

        button {
          padding: 12px 44px;
          border-radius: 11px;
          text-decoration: none;
          color: $main-light-gray;
          text-align: center;
          border: none;
        }

        button:first-child {
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

  .city-modal {
    h2 {
      margin-bottom: 0;
    }

    hr {
      margin: 20px 0;
    }

    .cities-block {
      display: flex;
      justify-content: space-between;
      text-align: center;
      margin-top: 15px;

      div {
        margin-right: 10px;
      }

      div:last-child {
        margin-right: 0;
      }
    }

    .cities-input-block {
      margin-top: 20px;

      .cities-list-block {
        display: flex;
        max-width: 300px;
        width: 100%;
        padding: 20px;
        flex-direction: column;
        position: absolute;
        background-color: white;
        border: 1px solid $lh-accent-green;

        span {
          margin-bottom: 15px;
        }

        span:last-child {
          margin-bottom: 0;
        }
      }
    }

    .cities-buttons-block {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
    }

    .cities-footer {
      margin-top: 20px;
      color: $main-gray;
    }
  }

  .delivery-modal {
    .delivery-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .select-block {
      margin: 10px 0;

      span {
        font-weight: bold;
      }

      div {
        margin: 10px 0;
      }
    }

    .times-block {
      div {
        margin: 10px 0;

        b {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
