<template>
  <div class='container'>
    <h1>Категорії</h1>
    <div class='search-container'>
      <div class='search'>
        <AdminSearchInput @search='(val) => {search = val; fetchData()}' />
      </div>
      <div class='buttons'>
        <AdminButton type='delete' />
        <AdminButton type='refresh' @click='fetchData' />
        <AdminButton type='plus' />
      </div>
    </div>
    <!--    <div class='loading-container'>-->
    <!--      <img src='~/assets/images/loader.gif' alt=''>-->
    <!--    </div>-->
    <div v-if='$fetchState.pending' class='loading-container'>
      <img src='~/assets/images/loader.gif' alt=''>
    </div>
    <p v-else-if='$fetchState.error'>An error occurred :(</p>
    <div v-else>
      <AdminTable :header='header' :data='items' />
      <div class='buttons-container'>
        <button @click='switchPage(false)'>&lt;</button>
        <div v-if='total_pages > 8'>
          <div>
            <button v-for='item in 7' :key='item' :class='page === item ? "active-btn" : null' @click='page = item'>
              {{ item }}
            </button>
            <button>
              ...
            </button>
            <button
              :class='page === total_pages ? "active-btn" : null'
              @click='page = total_pages'>
              {{ total_pages }}
            </button>
          </div>
        </div>
        <div v-else>
          <button
            v-for='item in total_pages'
            :key='item' :class='page === item ? "active-btn" : null'
            @click='page = item'>
            {{ item }}
          </button>
        </div>

        <button @click='switchPage(true)'>&gt;</button>
      </div>
    </div>
  </div>
</template>

<script>
// import AdminTable from '@/components/panel/AdminTable.vue';
import AdminSearchInput from '@/components/panel/AdminSearchInput.vue';
import AdminButton from '@/components/panel/AdminButton.vue';
import AdminTable from '@/components/panel/AdminTable.vue';

export default {
  name: 'Categories',
  components: { AdminTable, AdminButton, AdminSearchInput },
  layout: 'adminLayout',
  data() {
    return {
      header: ['Назва категорії', 'Кількість категорій', 'Кількість товарів в категорії'],
      items: [],
      search: null,
      page: 1,
      total_pages: 0,
    };
  },
  async fetch() {
    const res = await this.$axios.$get('/Categories/flat', {
      params: {
        limit: 10,
        search: this.search,
        page: this.page,
      },
    });

    this.items = res.data.map(item => ({
      id: item.id,
      name: item.name,
      child_categories: item.child_categories,
      articles_count: item.articles_count,
    }));
    this.total_pages = res.total_pages;
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
    async switchPage(step) {
      if (step) {
        if (this.page === this.total_pages) return;
        this.page += 1;
      } else {
        if (this.page === 1) return;
        this.page -= 1;
      }
      await this.fetchData();
    },
  },
};
</script>

<style scoped lang='scss'>

.container {
  max-width: 1133px;
  width: 100%;
  height: 100%;
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

.buttons-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  button {
    width: 40px;
    height: 40px;
    margin: 0 10px;
    border-radius: 11px;
    border: 2px solid $main-light-gray
  }

  button:hover {
    cursor: pointer;
  }

  .active-btn {
    background-color: $main-gray;
    color: $main-light-gray;
    border: 2px solid $main-gray
  }
}

.loading-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
