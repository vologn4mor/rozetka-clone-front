<template>
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
    const reqData = this.lastChecked.slice(0, 9);
    const res = await this.$axios.$post('/Goods/from-list-light', reqData);

    const resultItems = [];

    reqData.forEach(id => {
      const item = res.data.articles.filter(i => id === i.id);
      resultItems.push(item[0]);
    });

    this.items = resultItems;
    console.log(this.items);
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
  margin-bottom: 0;
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
</style>
