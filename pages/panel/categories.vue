<template>
  <div class='container'>
    <h1>Категорії</h1>
    <div class='search-container'>
      <div class='search'>
        <AdminSearchInput />
      </div>
      <div class='buttons'>
        <AdminButton type='delete' />
        <AdminButton type='refresh' />
        <AdminButton type='plus' />
      </div>
    </div>
    <AdminTable :header='header' :data='items' />
  </div>
</template>

<script>
import AdminTable from '@/components/panel/AdminTable.vue';
import AdminSearchInput from '@/components/panel/AdminSearchInput.vue';
import AdminButton from '@/components/panel/AdminButton.vue';

export default {
  name: 'Categories',
  components: { AdminButton, AdminSearchInput, AdminTable },
  layout: 'adminLayout',
  data() {
    return {
      header: ['Назва категорії', 'Кількість категорій', 'Кількість товарів в категорії'],
      items: [],
    };
  },
  async fetch() {
    const res = await this.$axios.$get('/Categories/flat', {
      params: {
        limit: 10,
        page: 1,
      },
    });

    this.items = res.data.map(item => ({
      id: item.id,
      name: item.name,
      child_categories: item.child_categories,
      articles_count: item.articles_count,
    }));
  },
};
</script>

<style scoped lang='scss'>

.container {
  max-width: 1133px;
  width: 100%;
}

.search-container {
  display: flex;
  margin: 20px 0;
  width: 100%;
  justify-content: space-between;

  div:first-child {
    max-width: 952px;
    width: 100%;
  }

  .buttons {
    display: flex;

    div {
      margin: 0 5px;
    }
  }
}
</style>
