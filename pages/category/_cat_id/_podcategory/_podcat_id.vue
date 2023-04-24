<template>
  <div>
    <div class='podcats-block'>
      <AppCatCard
        v-for='item in podCats.data'
        :key='item.id'
        :image='item.big_picture'
        :name='item.name'
        @click='$router.push(localePath(`/category/${$route.params.cat_id}/podcategory/${item.id}`))'
      >
      </AppCatCard>
    </div>
    <div class='articles-container'>
      <ProductOne
        v-for='item in articles.data.articles'
        :id='Number(item.id)'
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
// import AppCatCard from '@/components/ui/AppCatCard.vue';

import AppCatCard from '@/components/ui/AppCatCard.vue';
import ProductOne from '@/components/ui/ProductOne.vue';

export default {
  name: 'Podcat',
  components: { ProductOne, AppCatCard },
  // components: { AppCatCard },
  async asyncData(ctx) {
    try {
      let podCats = await ctx.$axios.$get('/Categories/get-sub', {
        params: {
          category_id: ctx.route.params.podcat_id,
        },
      });

      // const podCatItem = podCats.breadcrumbs.filter(item => {
      //   return item.id === Number(ctx.route.params.podcat_id);
      // });

      const podCatsItems = [];

      podCats.breadcrumbs.map(item => {
        return podCatsItems.push(item);
      });

      podCats = {
        ...podCats,
        data: podCats.data.slice(0, 6),
      };

      const articles = await ctx.$axios.$get('/Goods/category-articles', {
        params: {
          category_id: ctx.route.params.podcat_id,
          goods_on_page: 20,
          page: 1,
        },
      });

      return {
        podCats,
        podCatsItems: podCatsItems.reverse(),
        articles,
      };
    } catch (e) {
      return ctx.error({ statusCode: 404, message: 'Podcategory not found' });
    }
  },
  beforeMount() {
    this.$store.commit(
      'setHeaderLocate', this.podCatsItems);
  },
};
</script>

<style scoped lang='scss'>
.podcats-block {
  display: flex;
  justify-content: space-evenly;
}

.articles-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
