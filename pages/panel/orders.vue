<template>
  <div class='container'>
    <h1>Замовлення</h1>
    <div v-if='$fetchState.pending' class='loading-container'>
      <img src='~/assets/images/loader.gif' alt=''>

    </div>
    <p v-else-if='$fetchState.error'>An error occurred :(</p>
    <div v-else>
      <div class='header-first'>
        <div>
          <span>Покупець</span>
          <AdminSearchInput
            :value='byer_search'
            placeholder='Введіть прізвище та ім’я'
            @input='val => byer_search = val'
            @search='fetchData'
          />
        </div>
        <div>
          <span>Номер замовлення</span>
          <AdminSearchInput
            :value='order_id'
            placeholder='Введіть значення'
            @input='val => order_id = val'
            @search='fetchData'
          />
        </div>
      </div>
      <div class='header-second'>
        <span>Пошук замовлень за період </span>
        <div>
          <span> з: </span>
          <AdminInput :value='start_date' type='date' @input='val => start_date = val' />
        </div>
        <div>
          <span> по: </span>
          <AdminInput :value='end_date' type='date' @input='val => end_date = val' />
        </div>
        <AdminGreenBtn text='Знайти' @click='fetchData' />
      </div>
      <div class='header-third'>
        <AdminGreenBtn text='Відправити замовлення в обробку' style='margin-bottom: 20px' />
        <div>
          <AdminButton type='refresh' @click='$fetch()' />
          <AdminButton type='delete' @click='removeSelected()' />
        </div>
      </div>
      <AdminTable :header='header' :data='items' @click='(id) => openChangeModal(id)' />
      <AppPagination
        :total-pages='total_pages'
        :current-page='page'
        @update='(val) => page = val' />
      <AdminModalCard v-if='changeModal' width='1013px' @close='closeChangeModal'>
        <div class='header-modal'>
          <div><h3>Замовлення №{{ selectedOrder.id }}</h3></div>
          <div>
            <div>
              <span>Дата формування</span>
              <AdminInput :value='selectedOrder.create_date'>

              </AdminInput>
            </div>
            <div>
              <span>Статус</span>
              <AdminInput :value='selectedOrder.status'>

              </AdminInput>
            </div>
          </div>
        </div>
        <div class='buttons-modal'>
          <button class='active'>Загальні</button>
          <button>Служба перевізника</button>
        </div>
        <div class='info-modal'>
          <div>
            <span>Покупець</span>
            <AdminInput :value='`${selectedOrder.user.first_name} ${selectedOrder.user.last_name}`' />
          </div>
          <div>
            <div>
              <span>Телефон</span>
              <AdminInput :value='selectedOrder.user.phone' />
            </div>
            <div>
              <span>email:</span>
              <AdminInput :value='selectedOrder.user.email' />
            </div>
          </div>
        </div>
        <AdminTable :data='selectedOrder.goods' :header='headerModal' :checkboxes='false' />
        <div class='total_price_block'>
          <b>Загальна сумма до оплати, грн:</b>
          <div>{{ selectedOrder.total_price }}</div>
        </div>
      </AdminModalCard>
    </div>

  </div>
</template>

<script>
import AdminSearchInput from '@/components/panel/AdminSearchInput.vue';
import AdminInput from '@/components/panel/AdminInput.vue';
import AdminGreenBtn from '@/components/panel/AdminGreenBtn.vue';
import AdminTable from '@/components/panel/AdminTable.vue';
import AppPagination from '@/components/ui/AppPagination.vue';
import AdminModalCard from '@/components/panel/AdminModalCard.vue';
import AdminButton from '@/components/panel/AdminButton.vue';

export default {
  name: 'Orders',
  components: { AdminButton, AdminModalCard, AppPagination, AdminTable, AdminGreenBtn, AdminInput, AdminSearchInput },
  layout: 'adminLayout',
  data() {
    return {
      header: ['Замовлення', 'ПІБ покупця', 'Телефон', 'Сума замовлення', 'Дата створення', 'Дата відправки в обробку'],
      headerModal: ['Фото товару', 'Назва товару', 'Код товару', 'Кількість', 'Ціна, грн'],
      items: [],
      page: 1,
      total_pages: 0,
      changeModal: false,
      selectedOrderId: null,
      selectedOrder: null,
      byer_search: '',
      order_id: '',
      start_date: '',
      end_date: '',
    };
  },
  async fetch() {
    const res = await this.$axios.$get('/Orders/orders-list', {
      params: {
        limit: 10,
        page: this.page,
        only_new: true,
        byer_search: this.byer_search,
        order_id: this.order_id,
        start_date: this.start_date,
        end_date: this.end_date,
      },
    });

    this.items = res.data.orders.map(item => ({
      id: item.id,
      isSelected: false,
      order_id: item.id,
      buyer_name: item.buyer_name,
      phone: item.phone,
      order_sum: item.order_sum,
      order_date: item.order_date,
      orders: item.orders,
    }));
    this.total_pages = res.data.total_pages;
  },
  watch: {
    async page() {
      await this.fetchData();
    },
  },
  methods: {
    fetchData() {
      this.$fetch();
    },
    async openChangeModal(id) {
      this.selectedOrderId = id;
      this.selectedOrder = await this.$axios.$get('/Orders/get',
        {
          params: {
            order_id: this.selectedOrderId,
          },
        });
      this.selectedOrder.goods = this.selectedOrder.goods.map(item => {
        return {
          id: item.article_id,
          isSelected: false,
          small_img: item.small_img,
          title: item.title,
          code: item.article_id,
          quantity: item.quantity,
          price: item.price,
        };
      });
      this.changeModal = true;
    },
    closeChangeModal() {
      this.changeModal = false;
      this.selectedOrderId = null;
      this.selectedOrder = null;
    },
    removeSelected() {

    },
  },
};
</script>

<style scoped lang='scss'>

.loading-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 1133px;
  width: 100%;
  height: 100%;
}

.header-first {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    max-width: 517px;
    width: 100%;

    span {
      margin-right: 30px;
    }
  }
}

.header-second {
  display: flex;
  align-items: center;
  margin: 20px 0;

  div {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
}

.header-third {
  display: flex;
  justify-content: space-between;

  div {
    display: flex;

    div {
      margin-left: 10px;
    }
  }
}

.header-modal {
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    margin-right: 10px;
    align-items: center;

    span {
      white-space: nowrap;
      margin-right: 10px;
    }
  }
}

.buttons-modal {
  display: flex;
  border-bottom: 1px solid $main-gray;

  button {
    padding: 11px 35px;
    color: $main-gray;
    background-color: $admin-white;
    border-top: 1px solid $main-gray;
    border-left: 1px solid $main-gray;
    border-right: 1px solid $main-gray;
    border-bottom: 0;
  }

  button:hover {
    cursor: pointer;
  }

  .active {
    background-color: $main-gray;
    color: $admin-white;
  }
}

.info-modal {
  max-width: 674px;
  margin-bottom: 20px;

  & > div {
    margin-top: 20px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {

      margin-right: 20px;
    }

    div {
      display: flex;
      width: 100%;
      justify-content: flex-start;


      div {
        max-width: 200px;
      }

      span {
        margin-right: 20px;
      }

    }
  }
}

.total_price_block {
  display: flex;
  justify-content: flex-end;
  font-size: 20px;
  margin-top: 15px;
  align-items: center;

  div {
    margin-left: 10px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 15px;
  }
}

</style>
