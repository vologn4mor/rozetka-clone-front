<template>
  <div class='container'>
    <div v-if='$fetchState.pending' class='loading-container'>
      <img src='~/assets/images/loader.gif' alt=''>

    </div>
    <p v-else-if='$fetchState.error'>An error occurred :(</p>
    <div v-else>
      <h1>Товари</h1>
      <div class='header-first'>
        <AdminSearchInput
          placeholder='Назва товару'
          :value='search'
          @search='fetchData'
          @input='val => search = val' />
      </div>
      <div class='header-second'>
        <AdminSearchInput
          placeholder='Код товару'
          :value='article_id'
          @search='fetchData'
          @input='val => article_id = val' />
        <AdminSearchInput
          placeholder='Категорії (id)'
          :value='category_id'
          @search='fetchData'
          @input='val => category_id = val' />
      </div>
      <AdminTable :data='items' :header='header' />
      <AppPagination
        :total-pages='total_pages'
        :current-page='page'
        @input='(val) => {page = val}' />
    </div>
  </div>
</template>

<script>
import AdminSearchInput from '@/components/panel/AdminSearchInput.vue';
import AdminTable from '@/components/panel/AdminTable.vue';
import AppPagination from '@/components/ui/AppPagination.vue';

export default {
  name: 'Articles',
  components: { AppPagination, AdminTable, AdminSearchInput },
  layout: 'adminLayout',
  data() {
    return {
      header: ['Назва товару', 'Код товару', 'Ціна, грн', 'Категорія', 'Фото товару', 'Кількість', 'Статус'],
      items: [],
      page: 1,
      total_pages: 0,
      search: '',
      article_id: '',
      category_id: '',
    };
  },
  async fetch() {
    const res = await this.$axios.$get('/GoodsAdmin/get-list', {
      params: {
        page: this.page,
        limit: 8,
        search: this.search ? this.search : null,
        article_id: this.article_id ? this.article_id : null,
        category_id: this.category_id ? this.category_id : null,
      },
    });

    this.items = res.data.articles.map(item => ({
      id: item.id,
      isSelected: false,
      name: item.name,
      code: item.id,
      price: item.price,
      category: item.category,
      preview: item.preview,
      quantity: item.quantity,
      status: item.status,
    }));

    this.total_pages = res.data.total_pages;
  },
  watch: {
    async page() {
      await this.fetchData();
    },
    // async search() {
    //   await this.fetchData();
    // },
    // async article_id() {
    //   await this.fetchData();
    // },
    // async category_id() {
    //   await this.fetchData();
    // },
  },
  methods: {
    async fetchData() {
      await this.$fetch();
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
  width: 100%;
}

.header-second {
  display: flex;
  align-items: center;
  margin: 20px 0;

  div {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
}
</style>
