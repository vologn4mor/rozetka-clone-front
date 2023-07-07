<template>
  <div class='footer-container'>
    <div class='footer-container__left'>
      <div>
        <AppCard>
          <p>{{ $t('services') }}</p>
          <nuxt-link to='/'>{{ $t('bonusAccount') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('logoPremium') }}</nuxt-link>
          <nuxt-link :to='localePath("/other/gift-certificates")'>{{ $t('giftCertificates') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('logoExchange') }}</nuxt-link>
        </AppCard>
        <AppCard>
          <p>{{ $t('weAreInSocialNetworks') }}</p>
          <div>
            <img src='~assets/images/icons/footer/facebook.svg' alt='telegram'>
            <img src='~assets/images/icons/footer/twitter.svg' alt='twitter'>
            <img src='~assets/images/icons/footer/youtube.svg' alt='youtube'>
            <img src='~assets/images/icons/footer/instagram.svg' alt='instagram'>
            <img src='~assets/images/icons/footer/telegram.svg' alt='telegram'>
          </div>
        </AppCard>
        <div class='text_first_block'>
          <span>{{ $t('tmUsage') }}</span>
        </div>
      </div>
      <div>
        <AppCard>
          <p>{{ $t('toPartners') }}</p>
          <nuxt-link to='/'>{{ $t('sellOnLogo') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('cooperationWithUs') }}</nuxt-link>
          <nuxt-link :to='localePath("/other/franchise")'>{{ $t('franchising') }}</nuxt-link>
          <nuxt-link to='/'>{{ $t('rentOfPremises') }}</nuxt-link>
        </AppCard>
        <AppCard>
          <p>{{ $t('ourApplications') }}</p>
          <div>
            <img src='~assets/images/icons/footer/google-play.svg' alt='google'>
            <img src='~assets/images/icons/footer/appstore.svg' alt='appstore'>
          </div>
        </AppCard>
        <div class='text_second_block'><span>{{ $t('copyright') }}</span></div>
      </div>
    </div>
    <ProductsBlock
      :title='$t("lastReviewedProducts")'
      :link='localePath("/profile/checked")'
      custom-style='footer-style'
    >
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
    </ProductsBlock>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AppCard from '@/components/ui/AppCard.vue';
import ProductsBlock from '@/components/ui/ProductsBlock.vue';
import ProductOne from '@/components/ui/ProductOne.vue';

export default {
  name: 'AppFooter',
  components: { ProductOne, ProductsBlock, AppCard },
  data() {
    return {
      items: [],
    };
  },
  async fetch() {
    if (!this.lastChecked.length) return;
    const reqData = this.lastChecked.slice(0, 4);
    const res = await this.$axios.$post('/Goods/from-list-light', reqData);

    const resultItems = [];

    reqData.forEach(id => {
      const item = res.data.articles.filter(i => id === i.id);
      resultItems.push(item[0]);
    });

    this.items = resultItems;
  },
  fetchOnServer: false,
  computed: {
    ...mapGetters({
      lastChecked: 'lastChecked',
    }),
  },
};
</script>

<style lang='scss'>
.footer-container {
  display: flex;
}

.footer-container__left {
  margin-top: 20px;
  display: flex;

  .text_first_block, .text_second_block {
    font-size: 12px;
    margin-top: 18px;
    max-width: 190px;
  }

  .text_first_block {
    color: #797878;
  }

  .text_second_block {
    color: #221F1F;
  }

  div {

    div:first-child {
      margin: 16px 16px 0 0;
      display: flex;
      flex-direction: column;

      div {
        margin: 0;
      }

      p {
        margin: 0 0 14px 0;
        color: $main-gray;
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

    div:nth-child(2) {
      margin-top: 16px;

      div {
        margin: 0;
        display: flex;
        justify-content: space-between;
      }

    }
  }
}
</style>
