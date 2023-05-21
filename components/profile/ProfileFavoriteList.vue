<template>
  <div>
    <h1>{{ $t('favoriteList') }}</h1>
    <!--    {{ items }}-->
    <div class='product-list'>
      <ProductOne
        v-for='item in items'
        :id='item.id'
        :key='item.id'
        :item-state='item.sell_status'
        :cost='Number(item.price)'
        :cost-old='Number(item.old_price)'
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
  name: 'ProfileFavoriteList',
  components: { ProductOne },
  data() {
    return {
      items: [],
    };
  },
  // async fetch() {
  //   if (!this.favoriteItems.length) return;
  //   const reqData = this.favoriteItems;
  //   const res = await this.$axios.$post('/Goods/from-list-light', reqData);
  //
  //   const resultItems = [];
  //
  //   reqData.forEach(id => {
  //     const item = res.data.articles.filter(i => id === i.id);
  //     resultItems.push(item[0]);
  //   });
  //
  //   this.items = resultItems;
  // },
  fetchKey: 'site-sidebar',
  computed: {
    ...mapGetters({
      favoriteItems: 'favoriteItems',
    }),
  },
  beforeMount() {
    this.setHeaderLocate([{ name: 'favoriteList' }]);
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
</style>
