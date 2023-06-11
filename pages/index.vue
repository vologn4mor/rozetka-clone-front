<template>
  <div>
    <AppSlider>
      <div v-for='banner in banners' :key='banner.url' class='slide'>
        <img :src='banner.url' alt=''>
      </div>
    </AppSlider>
    <ProductsBlock :title='$t("specialOffers")' :link='localePath("/special/all-actions")'>
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
    <ProductsBlock :title='$t("hotNewProducts")' :link='localePath("/special/hot-news")'>
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
    <ProductsBlock :title='$t("popularBrands")'>
      <div class='brands-container'>
        <div v-for='item in brands' :key='item.id'>
          <img :src='item.logo' :alt='item.name' />
        </div>
      </div>
    </ProductsBlock>
    <div class='ub-container'>
      <div class='ub_container__left'>
        <app-card :style='$i18n.locale === "ru" ? "margin-top: 12px;" : "margin-top: 16px;" '>
          <p>{{ $t('aboutOurCompany') }}</p>
          <nuxt-link :to='localePath("/other/about")'>{{ $t('aboutUs') }}</nuxt-link>
          <nuxt-link :to='localePath("/other/usage-rules")'>{{ $t('termsOfUseTheSite') }}</nuxt-link>
          <nuxt-link :to='localePath("/other/vacancies")'>{{ $t('vacancies') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('contacts') }}</nuxt-link>
        </app-card>
        <app-card :style='$i18n.locale === "ru" ? "margin-top: 12px;" : "margin-top: 16px;" '>
          <p>{{ $t('help') }}</p>
          <nuxt-link to='/'>{{ $t('deliveryAndPayment') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('credit') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('guarantee') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('productReturn') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('serviceCenters') }}</nuxt-link>
        </app-card>
        <app-card :style='$i18n.locale === "ru" ? "margin-top: 12px;" : "margin-top: 16px;" '>
          <img src='~assets/images/HomePage/qr_code.png' alt='qr_code'>
          <p :style='$i18n.locale === "ru" ? "font-size: 13px;" : null '>{{ $t('installOurApp') }}</p>
        </app-card>
      </div>
      <div class='ub_container__right'>
        <ProductsBlock :title='$t("mostImportantPoints")' :link='localePath("/special/best-points")'>
          <ProductOne
            v-for='item in mostImportantPoints'
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
    </div>
    <ProductsBlock :title='$t("mostAddedToTheList")' :link='localePath("/special/most-favorites")'>
      <ProductOne
        v-for='item in mostFavorites'
        :id='Number(item.id)'
        :key='item.id'
        :item-state='item.sell_status'
        :cost='Number(item.price)'
        :cost-old='Number(item.old_price)'
        :name='item.title'
        :image='item.preview_img.url'
      />
    </ProductsBlock>
    <ProductsBlock :title='$t("mostExcepted")' :link='localePath("/special/most-awaitable")'>
      <ProductOne
        v-for='item in mostAwaitable'
        :id='Number(item.id)'
        :key='item.id'
        :item-state='item.sell_status'
        :cost='Number(item.price)'
        :cost-old='Number(item.old_price)'
        :name='item.title'
        :image='item.preview_img.url'
      />
    </ProductsBlock>
    <AppFooterMain />
  </div>
</template>

<script>
import ProductsBlock from '@/components/ui/ProductsBlock.vue';
import ProductOne from '@/components/ui/ProductOne.vue';
import AppCard from '@/components/ui/AppCard.vue';
import AppSlider from '@/components/ui/AppSlider.vue';
import AppFooterMain from '@/components/AppFooterMain.vue';

export default {
  name: 'IndexPage',
  components: { AppSlider, AppCard, ProductOne, ProductsBlock, AppFooterMain },
  async asyncData(ctx) {
    const res = await ctx.$axios.$get('Brands/popular', {
      params: {
        number_to_show: 7,
      },
    });

    const hotNews = await ctx.$axios.$get('Goods/hot-news', {
      params: {
        goods_on_page: 6,
        page: 1,
      },
    });

    const mostAwaitable = await ctx.$axios.$get('Goods/most-awaitable', {
      params: {
        goods_on_page: 6,
        page: 1,
      },
    });

    const mostFavorites = await ctx.$axios.$get('Goods/most-favorites', {
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


    const mostImportantPoints = await ctx.$axios.$get('/Goods/best-points', {
      params: {
        goods_on_page: 10,
        page: 1,
      },
    });


    const banners = await ctx.$axios.$get('/Banners/category-banners', {
      params: {
        category_id: 0,
      },
    });

    return {
      brands: res.data,
      hotNews: hotNews.data.articles,
      mostAwaitable: mostAwaitable.data.articles,
      mostFavorites: mostFavorites.data.articles,
      stock: stock.data.articles,
      mostImportantPoints: mostImportantPoints.data.articles,
      banners,
    };
  },
  data() {
    return {};
  },
};
</script>

<style lang='scss'>

.brands-container {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  img {
    margin-top: 20px;
    padding: 0 15px;
  }

  img:first-child {
    padding: 0;
    padding-right: 15px;
  }

  img:last-child {
    padding: 0;
    padding-left: 15px;
  }
}

.ub-container {
  display: flex;

  .ub_container__left {
    margin-top: 20px;

    a {
      max-width: 200px;
    }

    div {
      div {
        display: flex;
        flex-direction: column;

        p {
          margin: 0 0 14px 0;
          color: $lh-accent-orange;
        }

        a {
          text-decoration: none;
          color: $main-dark-gray;
          margin-bottom: 16px;
        }

        a:last-child {
          margin-bottom: 0;
        }
      }

    }

    div:nth-child(3) {

      div {
        img {
          margin: 0 auto;
          width: 157px;
          height: 157px;
        }

        p {
          text-align: center;
          white-space: nowrap;
        }
      }
    }
  }

  .ub_container__right {
    width: 100%;
    margin-left: 16px;
  }
}

</style>

<style lang='scss' scoped>
@media (max-width: 1445px) {
  .main-container {
    max-width: none;
    width: auto;
    margin: 20px;
  }
}
</style>
