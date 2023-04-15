<template>
  <div>
    <div class='article-container'>
      <div class='article-left'>
        <h3>{{ article.title }}</h3>
        <AppArticleSlider class='article-slider'>
          <div
            v-for='image in article.images'
            :key='image.id'
            class='article-slider-container'>
            <img
              :src='image.original.url'
              :alt='image.original.url'
              class='image-slider'
            >
          </div>
        </AppArticleSlider>
        <div class='article-small-img-container'>
          <div
            v-for='image in article.images'
            :key='image.id'
            class='article-slider-container'>
            <img
              :src='image.preview.url'
              :alt='image.preview.url'
              class='image-slider'
            >
          </div>
        </div>
        <div class='info-block'>
          <div class='info-buttons'>
          <span
            :class='isAboutActive ? "active-button" : null'
            @click='isAboutActive = true'
          >ОПИС</span>
            <span
              :class='!isAboutActive ? "active-button" : null'
              @click='isAboutActive = false'
            >Характеристики</span>
          </div>
          <div
            class='info-text'
            :class='isOpenedInfo ? "opened-info-text" : "closed"'
            @click='isOpenedInfo = !isOpenedInfo'
          >
            <div v-if='isAboutActive'>
              {{ xssClear(article.description) }}
            </div>
            <div v-else>
              <div
                v-for='item in characteristic.data[0].options'
                :key='item.id'
              >
                <strong>{{ item.title }}:</strong>
                <p>{{ xssClear(item.values[0].title) }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class='article-right'>
        <app-card width='710'>
          <div class='right-first'>
            <div class='right-first-item'>
              <span>{{ article.price }}₴</span>
              <span>{{ $t('productRating') }}4.0</span>
              <div>
                <img src='~assets/images/icons/ArticlePage/star-filled-black.svg' alt=''>
                <img src='~assets/images/icons/ArticlePage/star-filled-black.svg' alt=''>
                <img src='~assets/images/icons/ArticlePage/star-filled-black.svg' alt=''>
                <img src='~assets/images/icons/ArticlePage/star-filled-black.svg' alt=''>
                <img src='~assets/images/icons/ArticlePage/star-black.svg' alt=''>
              </div>
            </div>
            <div class='hr'></div>
            <div class='right-first-item'>
              <span class='gray'>{{ $t('seller') }}</span>
              <span>{{ $t('shopName') }}</span>
              <span class='gray'>{{ $t('shopRating') }}4.0</span>
              <div>
                <img src='~assets/images/icons/ArticlePage/star-filled-black.svg' alt=''>
                <img src='~assets/images/icons/ArticlePage/star-filled-black.svg' alt=''>
                <img src='~assets/images/icons/ArticlePage/star-filled-black.svg' alt=''>
                <img src='~assets/images/icons/ArticlePage/star-filled-black.svg' alt=''>
                <img src='~assets/images/icons/ArticlePage/star-black.svg' alt=''>
              </div>
            </div>
            <div class='hr'></div>
            <div class='right-first-item'>
              <AppArticleButton
                padding='9.5px 35.5px'
                :text='$t("buy")'
                width='165'
                :icon='buyIcon'
              />
              <div>
                <img src='~/assets/images/icons/ArticlePage/heart-black.svg' alt='heart'>
                <span>{{ $t('addToFavorite') }}</span>
              </div>
              <div>
                <img src='~/assets/images/icons/ArticlePage/compare.svg' alt='heart'>
                <span>{{ $t('compareProducts') }}</span>
              </div>
            </div>
          </div>
        </app-card>

        <AppCard width='710'>
          <div class='right-second'>
            <div>
              <img src='~/assets/images/icons/ArticlePage/write-seller.svg' alt=''>
              <span>{{ $t('writeToSeller') }}</span>
            </div>
            <div>
              <img src='~/assets/images/icons/ArticlePage/complaint.svg' alt=''>
              <span>{{ $t('complainProduct') }}</span>
            </div>
            <div>
              <img src='~/assets/images/icons/ArticlePage/brand-page-icon.svg' alt=''>
              <span>{{ $t('sellerPage') }}</span>
            </div>
          </div>
        </AppCard>

        <AppCard width='710'>
          <div class='right-third'>
            <div>
              <div>
                <span>{{ $t('deliveryTo') }} </span>
                <span>Назва миста</span>
              </div>
              <div>
                <img src='~/assets/images/icons/ArticlePage/repost-article.svg' alt=''>
                <span>{{ $t('repostProduct') }}</span>
              </div>
            </div>
            <hr>
            <div>
              <div>
                <img src='~/assets/images/icons/ArticlePage/self-take.svg' alt=''>
                <span>{{ $t('sellTakeFromLogo') }} </span>
                <span class='gray'>{{ $t('lookAtMap') }}</span>
              </div>
              <div>
                <span>{{ $t('carriersTariffs') }}</span>
              </div>
            </div>
            <div>
              <div>
                <img src='~/assets/images/icons/ArticlePage/courier.svg' alt=''>
                <span>{{ $t('deliveryCourier') }} </span>
                <span class='gray'>{{ $t('lookAtMap') }}</span>
              </div>
              <div>
                <span>{{ $t('carriersTariffs') }}</span>
              </div>
            </div>
            <div>
              <div>
                <img src='~/assets/images/icons/ArticlePage/np-icon.svg' alt=''>
                <span>{{ $t('deliveryNP') }} </span>
                <span class='gray'>{{ $t('lookAtMap') }}</span>
              </div>
              <div>
                <span>{{ $t('carriersTariffs') }}</span>
              </div>
            </div>
            <div>
              <div>
                <img src='~/assets/images/icons/ArticlePage/meest-icon.svg' alt=''>
                <span>{{ $t('deliveryMeest') }} </span>
                <span class='gray'>{{ $t('lookAtMap') }}</span>
              </div>
              <div>
                <span>{{ $t('carriersTariffs') }}</span>
              </div>
            </div>
            <div>
              <div>
                <img src='~/assets/images/icons/ArticlePage/ukr-pochta-icon.svg' alt=''>
                <span>{{ $t('deliveryUkrPochta') }} </span>
                <span class='gray'>{{ $t('lookAtMap') }}</span>
              </div>
              <div>
                <span>{{ $t('carriersTariffs') }}</span>
              </div>
            </div>
          </div>
        </AppCard>

        <!--        <AppCard width='710'>-->
        <!--          <div class='right-fourth'>-->

        <!--          </div>-->
        <!--        </AppCard>-->
      </div>
    </div>
    <ProductsBlock :title='$t("specialOffers")' link='/'>
      <ProductOne :id='1' image='' item-state='available' :cost='2500' name='GNUSMAS' />
      <ProductOne :id='1' image='' item-state='available' :cost='2500' name='GNUSMAS' />
      <ProductOne :id='1' image='' item-state='available' :cost='2500' name='GNUSMAS' />
      <ProductOne :id='1' image='' item-state='available' :cost='2500' name='GNUSMAS' />
      <ProductOne :id='1' image='' item-state='available' :cost='2500' name='GNUSMAS' />
      <ProductOne :id='1' image='' item-state='available' :cost='2500' name='GNUSMAS' />
    </ProductsBlock>
    <ProductsBlock :title='$t("specialOffers")' link='/'>
      <ProductOne :id='1' image='' item-state='available' :cost='2500' name='GNUSMAS' />
      <ProductOne :id='1' image='' item-state='available' :cost='2500' name='GNUSMAS' />
      <ProductOne :id='1' image='' item-state='available' :cost='2500' name='GNUSMAS' />
      <ProductOne :id='1' image='' item-state='available' :cost='2500' name='GNUSMAS' />
      <ProductOne :id='1' image='' item-state='available' :cost='2500' name='GNUSMAS' />
      <ProductOne :id='1' image='' item-state='available' :cost='2500' name='GNUSMAS' />
    </ProductsBlock>
  </div>
</template>

<script>
import AppArticleSlider from '@/components/ui/AppArticleSlider.vue';
import ProductsBlock from '@/components/ui/ProductsBlock.vue';
import ProductOne from '@/components/ui/ProductOne.vue';
import AppCard from '@/components/ui/AppCard.vue';
import AppArticleButton from '@/components/ui/AppArticleButton.vue';
import buyIcon from '~/assets/images/icons/ArticlePage/buy-icon.svg';

export default {
  name: 'ArticleID',
  components: { AppArticleButton, AppCard, ProductOne, ProductsBlock, AppArticleSlider },
  async asyncData(ctx) {
    const article = await ctx.$axios.$get('/Goods/get-main', {
      params: {
        goodsid: ctx.route.params.id,
      },
    });

    const podCatsItems = [];

    article.data.breadcrumbs.map(item => {
      return podCatsItems.push(item);
    });

    article.data.images = article.data.images.slice(0, 6);

    const characteristic = await ctx.$axios.$get('/Goods/get-characteristic', {
      params: {
        goodsid: ctx.route.params.id,
      },
    });

    return {
      article: article.data,
      characteristic,
      podCatsItems: podCatsItems.reverse(),
    };
  },
  data() {
    return {
      isOpenedInfo: false,
      isAboutActive: true,
      buyIcon,
    };
  },
  beforeMount() {
    this.$store.commit(
      'setHeaderLocate', this.podCatsItems);
  },
  methods: {
    xssClear(value) {
      const regex = /( |<([^>]+)>)/ig;
      return value.replace(regex, ' ');
    },
  },
};
</script>

<style scoped lang='scss'>

.article-container {
  display: flex;
  justify-content: space-between;
}

.article-left {
  max-width: 700px;
}

.article-small-img-container {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    max-width: 100px;
    width: 100%;
    max-height: 100px;
  }
}

.image-slider {
  max-width: 600px;
  max-height: 600px;
  //width: 100%;
}

.info-block {
  margin-top: 30px;

  .info-buttons {
    display: flex;

    span {
      padding: 13px 40px;
      background-color: $light-gray;
      border-radius: 15px 15px 0 0;
    }

    span:hover {
      cursor: pointer;
    }

    .active-button {
      background-color: $main-light-gray;
    }
  }

  .info-text {
    background: $main-light-gray;
    padding: 1rem;
    max-height: 355px;
    height: auto;
    overflow: hidden;
    position: relative;
    border-radius: 0 15px 15px 15px;
  }

  .info-text:hover {
    cursor: pointer;
  }

  .closed:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    background: linear-gradient(180deg, transparent, $main-light-gray 50%);
  }

  .opened-info-text {
    max-height: none;
  }
}

.gray {
  color: #6A6C7E;
}

.article-right {
  max-width: 710px;
  width: 100%;

  .app-card {
    margin-bottom: 10px;
  }

  .right-first {
    display: flex;
    justify-content: space-evenly;

    .hr {
      border: none;
      border-left: 1px solid gray;
      width: 1px;
    }

    .right-first-item {
      display: flex;
      flex-direction: column;

      * {
        margin-bottom: 5px;
      }
    }

    .right-first-item:first-child {
      span:first-child {
        font-weight: bold;
        font-size: 64px;
      }

      span:nth-child(2) {
        color: #6A6C7E;
        margin-bottom: 9px;
      }
    }

    .right-first-item:nth-child(2) {
      span {
        color: gray;
      }

      span:nth-child(odd) {
        color: $main-dark-gray;
      }

      div {
        margin-top: 9px;
      }
    }

    .right-first-item:last-child {
      div {
        display: flex;
        align-items: center;
        margin-top: 10px;

        img {
          margin-right: 5px;
        }
      }
    }
  }

  .right-second {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    justify-items: center;

    div {
      display: flex;
      align-items: center;

      img {
        margin-right: 5px;
      }
    }
  }

  .right-third {
    div:first-child {
      display: flex;
      align-items: center;
      justify-content: space-between;

      div {
        display: flex;
        align-items: center;
        margin: 0;

        img {
          margin-right: 5px;
        }
      }
    }

    margin: 10px 45px;

    div:not(:nth-child(1)) {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
      text-align: center;

      img {
        margin-right: 5px;
      }

      span {
        font-size: 14px;
      }

      div {
        display: flex;
        margin: 0;


        div {
          display: flex;
        }
      }
    }
  }
}
</style>
