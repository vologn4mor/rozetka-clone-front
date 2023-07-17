<template>
  <div class='container'>
    <div v-if='$fetchState.pending' class='loading-container'>
      <img src='~/assets/images/loader.gif' alt=''>

    </div>
    <p v-else-if='$fetchState.error'>An error occurred :(</p>
    <div v-else>
      <h1>Товари на поповнення</h1>
      <div class='header'>
        <div class='search-container'>
          <AdminSearchInput
            :value='search'
            placeholder='Назва товару'
            @input='val => search = val'
            @search='$fetch()'
          />
          <AdminSearchInput
            :value='article_id'
            placeholder='Код товару'
            @input='val => article_id = val'
            @search='$fetch()'
          />
        </div>
        <div class='button-container'>
          <AdminGreenBtn text='Зберегти у файл (*.pdf)' />
          <span>зберегти у файл можна або весь перелік або виділені позиції</span>
        </div>
      </div>
      <AdminTable :data='items' :header='header' />
      <AppPagination
        :total-pages='total_pages'
        :current-page='page'
        @update='(val) => {page = val}' />
    </div>
  </div>
</template>

<script>
import AdminSearchInput from '@/components/panel/AdminSearchInput.vue';
import AdminGreenBtn from '@/components/panel/AdminGreenBtn.vue';
import AdminTable from '@/components/panel/AdminTable.vue';
import AppPagination from '@/components/ui/AppPagination.vue';

export default {
  name: 'RefillList',
  components: { AppPagination, AdminTable, AdminGreenBtn, AdminSearchInput },
  layout: 'adminLayout',
  data() {
    return {
      items: null,
      header: [
        'Назва товару',
        'Код товару',
        'Ціна, грн',
        'Категорія',
        'Фото товару',
        'Кількість',
        'Статус',
      ],
      page: 1,
      total_pages: 0,
      search: '',
      article_id: '',
    };
  },
  async fetch() {
    const res = await this.$axios.$get('/Storage/refill_list', {
      params: {
        page: this.page,
        search: this.search,
        article_id: this.article_id,
      },
    });

    this.items = res.data.articles.map(item => {
      return {
        id: item.id,
        isSelected: false,
        name: item.name,
        code: item.id,
        price: item.price,
        category: item.category,
        preview: item.preview,
        quantity: item.quantity,
        status: item.status,
      };
    });
    this.total_pages = res.data.total_pages;
  },
  watch: {
    async page() {
      await this.fetchData();
    },
  },
  methods: {
    async fetchData() {
      await this.$fetch();
    },
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

  .search-container {
    display: flex;

    div:first-child {
      width: 175%;
    }

    div:last-child {
      margin-left: 34px;
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
