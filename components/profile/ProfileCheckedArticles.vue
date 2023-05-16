<template>
  <div>
    <div v-if='!$fetchState.pending'>
      <h1>Просмотренные товары</h1>
      <div class='product-list'>
        <ProductOne
          v-for='item in items'
          :id='item.id'
          :key='item.id'
          :item-state='item.sell_status'
          :cost='Number(item.price)'
          :name='item.title'
          :image='item.preview_img.url'
        />
      </div>
    </div>
    <div v-else class='loading'>
      <img src='@/assets/images/loader.gif' alt=''>
    </div>
  </div>

</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import ProductOne from '@/components/ui/ProductOne.vue';

export default {
  name: 'ProfileCheckedArticles',
  components: { ProductOne },
  data() {
    return {
      items: [],
    };
  },
  async fetch() {
    if (!this.lastChecked.length) return;
    const reqData = this.lastChecked.slice(0, 10);
    const res = await this.$axios.$post('/Goods/from-list-light', reqData);

    const resultItems = [];

    reqData.forEach(id => {
      const item = res.data.articles.filter(i => id === i.id);
      resultItems.push(item[0]);
    });

    this.items = resultItems;
  },
  fetchKey: 'site-sidebar',
  computed: {
    ...mapGetters({
      lastChecked: 'lastChecked',
    }),
  },
  beforeMount() {
    this.setHeaderLocate([{ name: 'checkedArticles' }]);
  },
  methods: {
    ...mapMutations({
      setHeaderLocate: 'setHeaderLocate',
    }),
  },
};
</script>

<style scoped lang='scss'>
h1 {
  font-size: 31px;
  margin: 0;
}

.product-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  div {
    margin: 0 5px 5px;
  }

  div:first-child, div:nth-child(6n) {
    margin: 0 5px 10px 0;
  }

  div:last-child {
    margin: 0 0 10px 5px
  }
}

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  min-height: 300px;

  img {
    max-width: 50px;
    max-height: 50px;
  }
}
</style>
