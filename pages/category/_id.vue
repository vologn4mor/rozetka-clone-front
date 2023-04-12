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
      <div class='podcat-item' v-for='item in podCats' :key='item.id'>
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
        category_id: ctx.route.params.id,
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
        category_id: ctx.route.params.id,
      },
    });
    return { brands, podCats: podCats.data };
  },
  data() {
    return {
      id: this.$route.params.id,
    };
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
  justify-content: space-between;

  .podcat-item {
    margin-right: 10px;
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
