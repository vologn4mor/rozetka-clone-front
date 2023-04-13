<template>
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
          v-for='(image, idx) in article.images'
          :key='image.id'
          class='article-slider-container'>
          <img
            v-if='idx <= 5'
            :src='image.preview.url'
            :alt='image.preview.url'
            class='image-slider'
          >
        </div>
      </div>
      <div>
        {{ xssClear(article.description) }}
      </div>
    </div>
    <div class='article-right'>

    </div>
  </div>
</template>

<script>
import AppArticleSlider from '@/components/ui/AppArticleSlider.vue';

export default {
  name: 'ArticleID',
  components: { AppArticleSlider },
  async asyncData(ctx) {
    const article = await ctx.$axios.$get('/Goods/get-main', {
      params: {
        goodsid: ctx.route.params.id,
      },
    });

    return { article: article.data };
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
</style>
