<template>
  <div class='container'>
    <div v-if='$fetchState.pending' class='loading-container'>
      <img src='~/assets/images/loader.gif' alt=''>

    </div>
    <p v-else-if='$fetchState.error'>An error occurred :(</p>
    <div v-else>
      <h1>Завершені замовлення</h1>
      <div class='header'>
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
        <div class='button-container'>
          <AdminGreenBtn text='Зберегти у файл (*.pdf)' />
          <span>зберегти у файл можна або весь перелік або виділені позиції</span>
        </div>
      </div>
      <AdminTable :data='items' :header='header' />
    </div>
  </div>
</template>

<script>
import AdminInput from '@/components/panel/AdminInput.vue';
import AdminGreenBtn from '@/components/panel/AdminGreenBtn.vue';
import AdminTable from '@/components/panel/AdminTable.vue';

export default {
  name: 'ClosedList',
  components: { AdminTable, AdminGreenBtn, AdminInput },
  layout: 'adminLayout',
  data() {
    return {
      header: [
        'Оплата',
        'Замовлення',
        'ПІБ покупця',
        'Телефон',
        'Дата',
        'Статус замовлення',
      ],
      start_date: '',
      end_date: '',
      items: null,
      page: 1,
      total_pages: 0,
    };
  },
  async fetch() {
    const res = await this.$axios.$get('/Storage/closed-list', {
      params: {
        start_date: this.start_date,
        end_date: this.end_date,
        page: this.page,
      },
    });

    this.items = res.data.orders.map(item => {
      return {
        id: item.id,
        isSelected: false,
        payment_status: item.payment_status,
        order: item.id,
        fio: item.buyer_name,
        phone: item.phone,
        order_date: item.order_date,
        status: item.status,
      };
    });

    this.total_pages = res.data.total_pages
  },
};
</script>

<style scoped lang='scss'>

.container {
  max-width: 1133px;
  margin-bottom: 20px;
}

.loading-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  margin-bottom: 20px;

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

  .button-container {
    margin-top: 20px;
    display: flex;
    align-items: flex-end;

    span {
      margin-left: 20px;
    }
  }
}
</style>
