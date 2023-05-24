<template>
  <div>
    <AppSlider>
      <div v-for='banner in banners' :key='banner.url' class='slide'>
        <img :src='banner.url' alt=''>
      </div>
    </AppSlider>
    <div class='brands-img-block'>
      <div v-for='brand in brands' :key='brand.id'>
        <img :src='brand.url' alt=''>
      </div>
    </div>
    <div class='podcats-block'>
      <AppCatCard
        v-for='item in podCats.data'
        :key='item.id'
        :image='item.big_picture'
        :name='item.name'
        @click='$router.push(localePath(`/category/${id}/podcategory/${item.id}`))'
      >
      </AppCatCard>
    </div>
    <ProductsBlock :title='$t("specialOffers")' link='/'>
      <ProductOne
        v-for='item in stock'
        :id='Number(item.id)'
        :key='item.id'
        :item-state='item.sell_status'
        :cost='Number(item.price)'
        :cost-old='Number(item.old_price)'
        :name='item.title'
        :image='item.preview_img.url'
      />
    </ProductsBlock>
    <ProductsBlock :title='$t("hotNewProducts")' link='/'>
      <ProductOne
        v-for='item in hotNews'
        :id='Number(item.id)'
        :key='item.id'
        :item-state='item.sell_status'
        :cost='Number(item.price)'
        :cost-old='Number(item.old_price)'
        :name='item.title'
        :image='item.preview_img.url'
      />
    </ProductsBlock>
  </div>
</template>

<script>
import AppSlider from '@/components/ui/AppSlider.vue';
import ProductsBlock from '@/components/ui/ProductsBlock.vue';
import ProductOne from '@/components/ui/ProductOne.vue';
import AppCatCard from '@/components/ui/AppCatCard.vue';

export default {
  name: 'Category',
  components: { AppCatCard, ProductOne, ProductsBlock, AppSlider },
  async asyncData(ctx) {
    try {
      let brands = await ctx.$axios.$get('/Brands/category-brands', {
        params: {
          category_id: ctx.route.params.cat_id,
          count: 20,
        },
      });

      if (brands.data) {
        brands = brands.data.filter(item => {
          return item.url !== null;
        });

        brands = brands.slice(0, 9);
      }

      const podCats = await ctx.$axios.$get('/Categories/get-sub', {
        params: {
          category_id: ctx.route.params.cat_id,
        },
      });

      const hotNews = await ctx.$axios.$get('Goods/hot-news', {
        params: {
          goods_on_page: 6,
          page: 1,
        },
      });

      const stock = await ctx.$axios.$get('Goods/all-actions', {
        params: {
          goods_on_page: 6,
          page: 1,
        },
      });

      const banners = await ctx.$axios.$get('/Banners/category-banners', {
        params: {
          category_id: ctx.route.params.cat_id,
        },
      });

      if (!podCats) return ctx.error({ statusCode: 404, message: 'Category not found' });
      return {
        brands,
        podCats,
        stock: stock.data.articles,
        hotNews: hotNews.data.articles,
        banners,
      };
    } catch (e) {
      return ctx.error({ statusCode: 404, message: 'Category not found' });
    }
  },
  data() {
    return {
      id: this.$route.params.cat_id,
    };
  },
  beforeMount() {
    this.$store.commit('setHeaderLocate', [this.podCats.breadcrumbs[0]]);
  },
};
</script>

<style scoped lang='scss'>
.brands-img-block {
  margin: 20px 0;
  display: flex;
  width: 100%;
  justify-content: space-between;

  align-items: center;

  img {
    max-height: 50px
  }
}

.podcats-block {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;


}
</style>
