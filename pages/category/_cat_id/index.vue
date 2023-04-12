<template>
  <div>
    <AppSlider>
      <div class='slide'><h1>1</h1></div>
      <div class='slide'><h1>2</h1></div>
      <div class='slide'><h1>3</h1></div>
      <div class='slide'><h1>4</h1></div>
    </AppSlider>
    <div class='brands-img-block'>
      <div v-for='brand in brands' :key='brand.id'>
        <img :src='brand.url' alt=''>
      </div>
    </div>
    <div class='podcats-block'>
      <div
        v-for='item in podCats.data'
        :key='item.id'
        class='podcat-item'
        @click='$router.push(localePath(`/category/${id}/podcategory/${item.id}`))'
      >
        <AppCard>
          <img :src='item.big_picture' alt='item'>
        </AppCard>
        <p>{{ item.name }}</p>
      </div>
    </div>
    <ProductsBlock :title='$t("specialOffers")' link='/'>
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
    </ProductsBlock>
    <ProductsBlock :title='$t("hotNewProducts")' link='/'>
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
      <ProductOne :item-state='$t("inAvailable")' :cost='2500' name='GNUSMAS' image='' />
    </ProductsBlock>
  </div>
</template>

<script>
import AppSlider from '@/components/ui/AppSlider.vue';
import AppCard from '@/components/ui/AppCard.vue';
import ProductsBlock from '@/components/ui/ProductsBlock.vue';
import ProductOne from '@/components/ui/ProductOne.vue';

export default {
  name: 'Category',
  components: { ProductOne, ProductsBlock, AppCard, AppSlider },
  async asyncData(ctx) {
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

    // commit('setHeaderLocate', podCats.data.breadcrumbs);

    return { brands, podCats };
  },
  data() {
    return {
      id: this.$route.params.cat_id,
    };
  },
  beforeMount() {
    this.$store.commit('setHeaderLocate', this.podCats.breadcrumbs);
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

  .podcat-item {
    width: 230px;

    div {
      height: 180px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  img {
    max-width: 170px;
    max-height: 170px;
  }
}
</style>
