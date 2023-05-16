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
    <div class='main-container'>
      <div class='filter-container'>
        <div>
          <div><span class='bold'>Цiна</span></div>
          <div class='cost-inputs-container'>
            <input value='' type='text' placeholder='вид' @input='minCost = Number($event.target.value)'>
            <span>&mdash;</span>
            <input value='' type='text' placeholder='до' @input='maxCost = Number($event.target.value)'>
            <button @click='filterFetch'>ok</button>
          </div>
          <div>
            <span class='bold'>бренд</span>
            <input v-model='searchBrand' type='text' placeholder='пошук'>
          </div>
          <div class='brands-list' v-if='filtredBrands'>
            <div v-for='item in filtredBrands' :key='item.id'>
              <input v-model='item.isSelected' type='checkbox' />
              <small>{{ item.name }}</small>
            </div>
          </div>
        </div>
        <div v-for='item in filtres' :key='item.id'>
          <div class='brands-list-item' @click='toggleFilters(item.id)'>
            <p>{{ item.name }}</p>
            <img src='~assets/images/icons/category-arrow.svg' alt='' :class='item.isOpened ? "opened-filter" : null'>
          </div>
          <div v-for='value in item.values' :key='value.id' style='max-width: 258px'>
            <div :class='!item.isOpened ? "hide" : null'>
              <input v-model='value.isSelected' type='checkbox' />
              <small>{{ clearText(value.name) }}</small>
            </div>
          </div>
        </div>
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
  </div>
</template>

<script>
// import AppCatCard from '@/components/ui/AppCatCard.vue';

import AppCatCard from '@/components/ui/AppCatCard.vue';
import ProductOne from '@/components/ui/ProductOne.vue';

export default {
  name: 'Podcat',
  components: { ProductOne, AppCatCard },
  async asyncData(ctx) {
    try {
      let podCats = await ctx.$axios.$get('/Categories/get-sub', {
        params: {
          category_id: ctx.route.params.podcat_id,
        },
      });

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

      const filtres = await ctx.$axios.$get('/Values/category-chars-values', {
        params: {
          category_id: ctx.route.params.podcat_id,
        },
      });

      const brands = await ctx.$axios.$get('/Brands/filter-brands', {
        params: {
          category_id: ctx.route.params.podcat_id,
          count: 999,
        },
      });

      return {
        podCats,
        podCatsItems: podCatsItems.reverse(),
        articles,
        filtres: filtres.data.map(item => ({
          ...item,
          isOpened: false,
          values: item.values.map(val => ({ ...val, isSelected: false })),
        })),
        brands: brands.data.map(item => ({ ...item, isSelected: false })),
      };
    } catch (e) {
      return ctx.error({ statusCode: 404, message: 'Podcategory not found' });
    }
  },
  data() {
    return {
      searchBrand: '',
      filtredBrands: [],
      selectedBrands: [],
      selectedChars: [],
      minCost: 0,
      maxCost: 0,
    };
  },
  watch: {
    searchBrand(val) {
      this.filtredBrands = this.brands.filter(item => item.name.toLowerCase().includes(val.toLowerCase()));
    },
  },
  beforeMount() {
    this.$store.commit(
      'setHeaderLocate', this.podCatsItems);
    this.filtredBrands = this.brands;
  },
  methods: {
    toggleFilters(id) {
      this.filtres = this.filtres.map(item => {
        if (item.id === id) return { ...item, isOpened: !item.isOpened };
        return item;
      });
    },
    clearText(value) {
      if (!value) return;
      const regex = /( |<([^>]+)>)/ig;
      value = value.replace(regex, ' ');
      if (value.length < 40) return value;
      return value.slice(0, 40) + '...';
    },
    async filterFetch() {
      const brands = [];
      const filtres = [];
      this.filtredBrands.forEach(item => {
        if (item.isSelected) brands.push(item.id);
      });
      this.filtres.forEach(item => {
        item.values.forEach(val => {
          if (val.isSelected) filtres.push(val.id);
        });
      });

      const res = await this.$axios.$post('/Goods/category-articles', {
          values_id: filtres,
          brands_id: brands,
          slider_values: [
            {
              characteristic_id: 0,
              lower_value: 0,
              upper_value: 0,
            },
          ],
          price_low: !isNaN(this.minCost) ? this.minCost : 0,
          price_high: !isNaN(this.maxCost) ? this.maxCost : 999999,
        },
        {
          params: {
            category_id: this.$route.params.podcat_id,
            goods_on_page: 20,
            page: 1,
          },
        });

      this.articles = res;
      //
      // console.log(brands);
      // console.log(filtres);
      // console.log(res);
    },
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
  align-content: start;
}

.main-container {
  display: flex;
}

.hide {
  display: none;
}

.filter-container {

  input {
    border-radius: 9px;
    border: 2px solid $main-light-gray;
    padding: 3px;
    margin: 5px 0;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: $main-light-gray;
  }

  .bold {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .cost-inputs-container {
    display: flex;
    align-items: center;

    input {
      max-width: 41px;
      text-align: center;
    }

    input::placeholder {
      text-align: center;
    }

    span {
      margin: 0 5px;
      color: $main-light-gray;
    }
  }

  .brands-list {
    max-height: 346px;
    overflow-y: scroll;
  }

  .brands-list-item {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 9px;
      height: 6px;
    }
  }

  .brands-list-item:hover {
    cursor: pointer;
  }

  .opened-filter {
    transform: rotate(180deg);
  }

  .brands-list::-webkit-scrollbar {
    width: 6px; /* ширина всей полосы прокрутки */
    margin: 0px;
  }

  .brands-list::-webkit-scrollbar-track {
    background: $main-light-gray; /* цвет зоны отслеживания */
    border-radius: 20px;
  }

  .brands-list::-webkit-scrollbar-thumb {
    background-color: #B0B1BA; /* цвет бегунка */
    border-radius: 20px; /* округлось бегунка */
    border: 0px solid $main-light-gray; /* отступ вокруг бегунка */
    margin: 6px;
  }
}
</style>
