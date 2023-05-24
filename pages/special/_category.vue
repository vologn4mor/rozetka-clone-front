<template>
  <div>
    <div class='main-container-right'>
      <div class='articles-container'>
        <ProductOne
          v-for='item in articles.data.articles'
          :id='Number(item.id)'
          :key='item.id'
          :item-state='item.sell_status'
          :cost='Number(item.price)'
          :cost-old='Number(item.old_price)'
          :name='item.title'
          :image='item.preview_img.url'
        />
      </div>
      <div class='buttons-container'>
        <button @click='switchPage(false)'>&lt;</button>
        <div v-if='articles.data.total_pages > 8'>
          <div>
            <button v-for='item in 7' :key='item' :class='page === item ? "active-btn" : null' @click='page = item'>
              {{ item }}
            </button>
            <button>
              ...
            </button>
            <button
              :class='page === articles.data.total_pages ? "active-btn" : null'
              @click='page = articles.data.total_pages'>
              {{ articles.data.total_pages }}
            </button>
          </div>
        </div>
        <div v-else>
          <button
            v-for='item in articles.data.total_pages'
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
import ProductOne from '@/components/ui/ProductOne.vue';

export default {
  name: 'SpecialCategory',
  components: { ProductOne },
  async asyncData(ctx) {
    const articles = await ctx.$axios.$get(`/Goods/${ctx.route.params.category}`, {
      params: {
        goods_on_page: 12,
        page: 1,
      },
    });

    return {
      articles,
    };
  },
  data() {
    return {
      page: 1,
    };
  },
  watch: {
    async page() {
      await this.fetchPagination();
    },
  },
  beforeMount() {
    this.$store.commit('setHeaderLocate', [this.articles.data.breadcrumbs[0]]);
  },
  methods: {
    async fetchPagination() {
      this.articles = await this.$axios.$get(`/Goods/${this.$route.params.category}`, {
        params: {
          goods_on_page: 12,
          page: this.page,
        },
      });
    },
    async switchPage(step) {
      if (step) {
        if (this.page === this.articles.data.total_pages) return;
        this.page += 1;
      } else {
        if (this.page === 1) return;
        this.page -= 1;
      }
      await this.fetchPagination();
    },
  },
};
</script>

<style scoped lang='scss'>
.articles-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  width: 100%;
}

.buttons-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    //padding: 5px;
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

</style>
