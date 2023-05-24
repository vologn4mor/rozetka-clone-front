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
        <AppCard width='710'>
          <div class='right-first'>
            <div class='right-first-item'>
              <span>{{ Number(article.price).toLocaleString('ru-RU') }}₴</span>
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
              <span>{{ article.seller.seller_name }}</span>
              <span class='gray'>{{ $t('shopRating') }} {{ article.seller.seller_rate }}</span>
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
                @click='routeToCart'
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
        </AppCard>

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

        <AppCard width='710'>
          <div class='right-fourth'>
            <div>
              <div>
                <img src='~/assets/images/icons/ArticlePage/wallet.svg' alt=''>
                <span>13₴ {{ $t('addingBonusWhenBuy') }}</span>
              </div>
              <img src='~/assets/images/icons/ArticlePage/info-gray.svg' alt=''>
            </div>
            <hr>
            <div>
              <img src='~/assets/images/icons/ArticlePage/pay-online-card.svg' alt=''>
              <span>{{ $t('buyingOnlineWithCard') }}</span>
            </div>
            <div>
              <img src='~/assets/images/icons/ArticlePage/guarantee.svg' alt=''>
              <span>{{ $t('guarantee12Month') }}</span>
            </div>
          </div>
        </AppCard>

        <div class='reviews-container'>
          <div class='reviews-header'>
            <div class='review-header-left'>
              <span>
              {{ $t('buyersReviews') }}
            </span>
              <span>{{ comments.items_total }}</span>
            </div>
            <div class='review-header-right'>
              <div
                class='write-review-btn'
                @click='isWriteReviewOpened = true'
              >
                <img src='~/assets/images/icons/ArticlePage/write-review.svg' alt=''>
                <span>{{ $t('writeReview') }}</span>
              </div>
            </div>
          </div>
          <div v-if='comments.items_total' class='reviews-list'>
            <div
              v-for='item in comments.reviews'
              :key='item.id'
              class='reviews-list-item'
            >
              <div class='reviews-list-item-header'>
                <div>
                  <img src='~/assets/images/icons/ArticlePage/review-avatar.svg' alt=''>
                  <span class='review-user-name'>{{ item.user_name }}</span>
                </div>
                <div>
                  <span>{{ item.post_date }}</span>
                </div>
              </div>
              <div class='review-list-item-main'>
                <div class='review-list-item-main-container'>
                  <div class='review-stars'>
                    <span>{{ $t('grade') }}:</span>
                    <AppStarRating
                      :ico-star-out='icoStarOut'
                      :ico-star='icoStar'
                      :grade='item.rate'
                      :is-changeble='false'
                    />
                  </div>
                  <div class='review-pos-and-neg'>
                    <div class='review-pos'>
                      <span>{{ $t('pluses') }}:</span>
                      <span>{{ item.pros }}</span>
                    </div>
                    <div class='review-neg'>
                      <span>{{ $t('minuses') }}:</span>
                      <span>{{ item.cons }}</span>
                    </div>
                  </div>
                </div>
                <hr>
                <div class='review-list-item-main-container'>
                  <div class='review-text'>
                  <span>
                    {{ item.comment }}
                  </span>
                  </div>
                  <div v-if='item.user_images' class='review-images-container'>
                    <img
                      v-for='image in item.user_images'
                      :key='image'
                      :src='image'
                      alt='image'
                    >
                  </div>
                  <div class='review-bottom-menu'>
                    <div
                      class='review-bottom-menu-left'
                      @click='isWriteAnswerReviewOpened = true; writeAnswerReview = {...writeAnswerReview, review_id: item.id}'
                    >
                      <img src='~/assets/images/icons/ArticlePage/answer-comment.svg' alt=''>
                      <span>{{ $t('writeAnswer') }}</span>
                    </div>
                    <div class='review-bottom-menu-right'>
                      <img src='~/assets/images/icons/ArticlePage/like-comment.svg' alt=''>
                      <img src='~/assets/images/icons/ArticlePage/unlike-comment.svg' alt=''>
                    </div>
                  </div>
                </div>
                <div v-if='item.answers'>
                  <hr>
                  <div v-for='answer in item.answers' :key='answer.id'>
                    <div class='answer-review-container'>
                      <div class='img-and-name'>
                        <img src='~/assets/images/icons/ArticlePage/review-avatar.svg' alt=''>
                        <span>{{ answer.user_name }}</span>
                      </div>
                      <div class='comment'>
                        <span>{{ answer.comment }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-else style='text-align: center'>
            <h2>{{ $t('reviewsNotExist') }}</h2>
          </div>
        </div>
      </div>
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
    <ProductsBlock :title='$t("mostAddedToTheList")' link='/'>
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

    <AppModalCard
      v-show='isWriteReviewOpened'
      class='write-review-modal-container'
      :default-header='false'
      width='732px'
      @close='isWriteReviewOpened = false'
    >
      <div class='write-review-modal'>
        <span class='title'>{{ $t('writeReview') }}</span>
        <hr>
        <AppInput
          :is-textarea='true'
          :is-bold-label='true'
          :label='$t("comment")'
          :value='writeReview.comment'
          @input='(val) => writeReview.comment = val'
        />
        <div class='write-review-stars-block'>
          <div>
            <span>{{ $t('grade') }}</span>
            <AppStarRating
              :ico-star-out='icoStarOut'
              :ico-star='icoStar'
              :grade='0'
              @update='(val) => writeReview.rate = val'
            />
          </div>
          <div>
            <div>
              <input
                id='select_images'
                type='file'
                class='file_upload'
                multiple
                accept='image/*'
                @change='reviewAddImages'
              >
              <label for='select_images'>
                <img src='~/assets/images/icons/ArticlePage/write-review-photo.svg' alt=''>
                <span>{{ $t('addPhoto') }}</span>
              </label>
            </div>
            <div>
              <img src='~/assets/images/icons/ArticlePage/write-review-video.svg' alt=''>
              <span>{{ $t('addVideo') }}</span>
            </div>
          </div>
        </div>
        <AppInput
          :is-bold-label='true'
          :label='$t("pluses")'
          :placeholder='$t("whatYouLike")'
          :value='writeReview.pros'
          @input='(val) => writeReview.pros = val'
        />
        <AppInput
          :is-bold-label='true'
          :label='$t("minuses")'
          :placeholder='$t("whatYouDidntLike")'
          :value='writeReview.cons'
          @input='(val) => writeReview.cons = val'
        />
        <AppInput
          :is-bold-label='true'
          :label='$t("yourFIO")'
          :placeholder='$t("placeholderName")'
          :value='writeReview.name'
          @input='(val) => writeReview.name = val'
        />
        <AppInput
          :is-bold-label='true'
          :label='$t("yourEmail")'
          placeholder='example@mail.com'
          :value='writeReview.email'
          @input='(val) => writeReview.email = val'
        />
        <div class='write-review-buttons' style='display: flex; justify-content: space-between; margin-top: 20px'>
          <AppButton
            :text='$t("add")'
            bg-color='#221F1F'
            color='#D2D4E9'
            @click='sendReview'>
          </AppButton>
          <AppButton
            :text='$t("cancel")'
            bg-color='#6A6C7E'
            color='#D2D4E9'
            @click='isWriteReviewOpened = false'>
          </AppButton>
        </div>
      </div>
    </AppModalCard>

    <AppModalCard
      v-show='isWriteAnswerReviewOpened'
      class='write-review-modal-container'
      :default-header='false'
      width='732px'
      @close='isWriteAnswerReviewOpened = false'
    >
      <div class='write-review-modal'>
        <span class='title'>{{ $t('writeAnswerReview') }}</span>
        <hr>
        <AppInput
          :is-textarea='true'
          :is-bold-label='true'
          :label='$t("comment")'
          :value='writeAnswerReview.comment'
          @input='(val) => writeAnswerReview.comment = val'
        />
        <AppInput
          :is-bold-label='true'
          :label='$t("yourFIO")'
          :placeholder='$t("placeholderName")'
          :value='writeAnswerReview.name'
          @input='(val) => writeAnswerReview.name = val'
        />
        <AppInput
          :is-bold-label='true'
          :label='$t("yourEmail")'
          placeholder='example@mail.com'
          :value='writeAnswerReview.email'
          @input='(val) => writeAnswerReview.email = val'
        />
        <div class='write-review-buttons' style='display: flex; justify-content: space-between; margin-top: 20px'>
          <AppButton
            :text='$t("add")'
            bg-color='#221F1F'
            color='#D2D4E9'
            @click='sendAnswerReview'>
          </AppButton>
          <AppButton
            :text='$t("cancel")'
            bg-color='#6A6C7E'
            color='#D2D4E9'
            @click='isWriteAnswerReviewOpened = false'>
          </AppButton>
        </div>
      </div>
    </AppModalCard>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import AppArticleSlider from '@/components/ui/AppArticleSlider.vue';
import ProductsBlock from '@/components/ui/ProductsBlock.vue';
import ProductOne from '@/components/ui/ProductOne.vue';
import AppCard from '@/components/ui/AppCard.vue';
import AppArticleButton from '@/components/ui/AppArticleButton.vue';
import AppInput from '@/components/ui/AppInput.vue';
import AppButton from '@/components/ui/AppButton.vue';
import AppStarRating from '@/components/ui/AppStarRating.vue';
import buyIcon from '~/assets/images/icons/ArticlePage/buy-icon.svg';
import icoStar from '~/assets/images/icons/ArticlePage/star-filled-gray.svg';
import icoStarOut from '~/assets/images/icons/ArticlePage/star-gray.svg';
import Debug from '@/helpers/Debug';

export const writeReview = {
  name: '',
  comment: '',
  rate: 0,
  pros: '',
  cons: '',
  email: '',
  video_url: null,
  images: null,
  get_email_on_answers: false,
};

export const writeAnswerReview = {
  name: '',
  comment: '',
  email: '',
};

export default {
  name: 'ArticleID',
  components: {
    AppStarRating,
    AppButton,
    AppInput,
    AppArticleButton,
    AppCard,
    ProductOne,
    ProductsBlock,
    AppArticleSlider,
  },
  async asyncData(ctx) {
    try {
      const article = await ctx.$axios.$get('/Goods/get-main', {
        params: {
          goodsid: ctx.route.params.id,
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

      const comments = await ctx.$axios.$get('/Reviews/get', {
        params: {
          article_id: ctx.route.params.id,
          sort: 'by_date',
          type: 'review',
          limit: 100,
          page: 1,
        },
      });

      comments.data.reviews = comments.data.reviews.reverse();

      return {
        article: article.data,
        characteristic,
        podCatsItems: podCatsItems.reverse(),
        comments: comments.data,
        stock: stock.data.articles,
        mostFavorites: mostFavorites.data.articles,
      };
    } catch (e) {
      return ctx.error({ statusCode: 404, message: 'Article not found' });
    }
  },
  data() {
    return {
      icoStarOut,
      icoStar,
      isOpenedInfo: false,
      isAboutActive: true,
      isWriteReviewOpened: false,
      isWriteAnswerReviewOpened: false,
      buyIcon,
      writeReview: { ...writeReview, article_id: this.$route.params.id },
      writeAnswerReview: { ...writeAnswerReview, article_id: this.$route.params.id },
      writeReviewErrors: [],
    };
  },
  computed: {
    ...mapGetters({
      cartItems: 'cartItems',
    }),
  },
  beforeMount() {
    this.$store.commit(
      'setHeaderLocate', this.podCatsItems);
    this.pushLastChecked(Number(this.$route.params.id));
  },
  methods: {
    ...mapMutations({
      pushCartItem: 'pushCartItem',
      pushLastChecked: 'pushLastChecked',
    }),
    xssClear(value) {
      const regex = /( |<([^>]+)>)/ig;
      return value.replace(regex, ' ');
    },
    async sendReview() {

      const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      let error = false;

      if (this.writeReview.comment.length < 5) {
        this.$toast.error('Длина комментария меньше 5');
        error = true;
      }

      if (this.writeReview.comment.length > 200) {
        this.$toast.error('Длина комментария больше 200');
        error = true;
      }

      if (this.writeReview.rate === 0) {
        this.$toast.error('Оценка не указанна');
        error = true;
      }

      if (this.writeReview.cons.length < 5) {
        this.$toast.error('Длина недостатков меньше 5');
        error = true;
      }

      if (this.writeReview.cons.length > 100) {
        this.$toast.error('Длина недостатков больше 100');
        error = true;
      }

      if (this.writeReview.pros.length < 5) {
        this.$toast.error('Длина плюсов меньше 5');
        error = true;
      }

      if (this.writeReview.pros.length > 100) {
        this.$toast.error('Длина плюсов больше 100');
        error = true;
      }

      if (this.writeReview.name.length < 3) {
        this.$toast.error('Длина имени меньше 3');
        error = true;
      }

      if (this.writeReview.name.length > 30) {
        this.$toast.error('Длина имени больше 30');
        error = true;
      }

      if (!regEmail.test(this.writeReview.email)) {
        this.$toast.error('Email указан неккоректно');
        error = true;
      }

      if (error) return;

      const formData = new FormData();
      Object.keys(this.writeReview).forEach(key => {
          if (key !== 'images') {
            formData.append(key, this.writeReview[key]);
          }
        },
      );

      if (this.writeReview.images) {
        this.writeReview.images.forEach(image => {
          formData.append('images', image);
        });
      }

      for (const pair of formData.entries()) {
        Debug.log(pair[0] + ', ' + pair[1]);
      }

      const res = await this.$axios.$post('/Reviews/post_review',
        formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      if (!res) return;

      const comments = await this.$axios.$get('/Reviews/get', {
        params: {
          article_id: this.$route.params.id,
          sort: 'by_date',
          type: 'review',
          limit: 100,
          page: 1,
        },
      });

      this.comments = comments.data;
      this.comments.reviews = this.comments.reviews.reverse();

      this.isWriteReviewOpened = false;
      this.writeReview = { ...writeReview, article_id: this.$route.params.id };
    },
    async sendAnswerReview() {

      const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      let error = false;

      if (this.writeAnswerReview.comment.length < 5) {
        this.$toast.error('Длина комментария меньше 5');
        error = true;
      }

      if (this.writeAnswerReview.comment.length > 200) {
        this.$toast.error('Длина комментария больше 200');
        error = true;
      }

      if (this.writeAnswerReview.name.length < 3) {
        this.$toast.error('Длина имени меньше 3');
        error = true;
      }

      if (this.writeAnswerReview.name.length > 30) {
        this.$toast.error('Длина имени больше 30');
        error = true;
      }

      if (!regEmail.test(this.writeAnswerReview.email)) {
        this.$toast.error('Email указан неккоректно');
        error = true;
      }

      if (error) return;

      const formData = new FormData();
      Object.keys(this.writeAnswerReview).forEach(key => {
          formData.append(key, this.writeAnswerReview[key]);
        },
      );

      for (const pair of formData.entries()) {
        Debug.log(pair[0] + ', ' + pair[1]);
      }

      const res = await this.$axios.$post('/Reviews/post_answer',
        formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      if (!res) return;

      const comments = await this.$axios.$get('/Reviews/get', {
        params: {
          article_id: this.$route.params.id,
          sort: 'by_date',
          type: 'review',
          limit: 100,
          page: 1,
        },
      });

      this.comments = comments.data;
      this.comments.reviews = this.comments.reviews.reverse();

      this.isWriteAnswerReviewOpened = false;
      this.writeAnswerReview = { ...writeAnswerReview, article_id: this.$route.params.id };
    },
    reviewAddImages(e) {
      const files = e.target.files;
      if (!files.length)
        return;
      this.writeReview.images = files;
      Debug.log(files);
    },
    routeToCart() {
      const id = Number(this.$route.params.id);
      if (!this.cartItems.includes(id)) this.pushCartItem(id);
      this.$router.push(this.localePath('/cart'));
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
      background-color: #EEEBE780;;
      border-radius: 15px 15px 0 0;
    }

    span:hover {
      cursor: pointer;
    }

    .active-button {
      background-color: $lh-gray;
    }
  }

  .info-text {
    background: $lh-gray;
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
    background: linear-gradient(180deg, transparent, $lh-gray 50%);
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

  .right-fourth {
    margin: 10px 45px;

    div {
      margin-top: 15px;
      display: flex;
      align-items: center;
    }

    div:first-child {
      margin: 0;
      display: flex;
      justify-content: space-between;

      span {
        white-space: nowrap;
      }
    }

    span {
      margin-left: 7px;
    }

    img {
      width: 18px;
    }
  }

  .reviews-container {
    border: 3px solid $lh-gray;
    border-radius: 11px;

    .reviews-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px 45px 0 20px;

      .review-header-left {
        font-size: 31px;
        font-weight: bold;

        span:nth-child(2) {
          color: $main-light-gray;
        }
      }

      .write-review-btn {
        display: flex;
        align-items: center;
        background-color: $lh-accent-green;
        padding: 8px 12px;
        border-radius: 11px;

        img {
          margin-right: 10px;
        }

        span {
          color: $lh-gray;
          font-size: 18px;
        }
      }

      .write-review-btn:hover {
        cursor: pointer;
      }

    }

    .reviews-list {
      max-height: 600px;
      overflow-y: scroll;
      padding: 0 16px 0 8px;
      margin: 16px;

      .reviews-list-item {
        margin: 10px 0;
        border: 3px solid $lh-gray;
        border-radius: 15px;

        .reviews-list-item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: $lh-gray;
          padding: 10px;
          border-radius: 11px 11px 0 0;

          div:first-child {
            display: flex;
            align-items: center;

            img {
              margin-right: 5px;
            }
          }

          div:last-child {
            color: $main-gray;
          }
        }


        .review-list-item-main-container {
          padding: 10px;
        }

        .review-stars {
          display: flex;
          align-items: center;

          img {
            margin-right: 3px;
          }

          span {
            margin-right: 5px;
            color: $main-gray;
          }
        }

        .review-pos-and-neg {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;

          div {
            display: flex;
            flex-direction: column;

            span:first-child {
              margin-bottom: 5px;
              color: $main-gray
            }
          }
        }

        .review-bottom-menu {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;

          div {
            display: flex;
            align-items: center;

            span {
              color: $main-gray
            }

            img {
              margin-right: 5px;
            }
          }
        }

        .review-images-container {
          display: flex;
          align-items: center;
          margin-top: 10px;

          img {
            max-width: 105px;
            max-height: 105px;
            margin-left: 16px;
          }
        }

      }
    }

    .reviews-list::-webkit-scrollbar {
      width: 12px; /* ширина всей полосы прокрутки */
      margin: 6px;
    }

    .reviews-list::-webkit-scrollbar-track {
      background: $lh-gray; /* цвет зоны отслеживания */
      border-radius: 20px;
    }

    .reviews-list::-webkit-scrollbar-thumb {
      background-color: $lh-accent-green; /* цвет бегунка */
      border-radius: 20px; /* округлось бегунка */
      border: 3px solid $lh-gray; /* отступ вокруг бегунка */
      margin: 6px;
    }
  }
}

.write-review-modal-container {


  .write-review-modal {

    .title {
      font-size: 31px;
      font-weight: bold;
    }

    hr {
      margin-bottom: 20px;
    }

    .write-review-stars-block {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;

      div {
        display: flex;
        align-items: center;

        div {
          label {
            display: flex;
            align-items: center;
          }

          span {
            margin-left: 10px
          }
        }

        span {
          margin-right: 5px
        }

        img {
          margin-left: 5px;
        }
      }
    }
  }
}

.file_upload {
  display: none;
}

.answer-review-container {
  padding: 10px;

  .img-and-name {
    display: flex;
    align-items: center;

    img {
      margin-right: 5px;
    }
  }

  .comment {
    margin: 10px 0;
  }
}
</style>
