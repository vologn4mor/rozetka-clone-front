<template>
  <div class='container'>
    <div v-if='$fetchState.pending' class='loading-container'>
      <img src='~/assets/images/loader.gif' alt=''>

    </div>
    <p v-else-if='$fetchState.error'>An error occurred :(</p>
    <div v-else>
      <h1>Товари</h1>
      <div class='header-first'>
        <AdminSearchInput placeholder='Назва товару' />
      </div>
      <div class='header-second'>
        <AdminSearchInput placeholder='Код товару' />
        <AdminSearchInput placeholder='Категорії' />
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
    };
  },
  async fetch() {
    const res = await this.$axios.$get('/GoodsAdmin/get-list', {
      params: {
        page: this.page,
        limit: 8,
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
  methods: {
    fetchData() {
      this.$fetch();
    },
  },
  watch: {
    async page() {
      await this.fetchData();
    },
  },
};
</script>

<style scoped lang='scss'>

.container {
  max-width: 1133px;
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
