<template>
  <div>

    <AppSlider v-if="banners.length !== 0">
      <div v-for='banner in banners' :key='banner.url' class='slide'>
        <img :src='banner.url' alt=''>
      </div>
    </AppSlider>

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
          <div><span class='bold'>{{ $t('price') }}</span></div>
          <div class='cost-inputs-container'>
            <input value='' type='text' :placeholder='$t("from")' @input='minCost = Number($event.target.value)'>
            <span>&mdash;</span>
            <input value='' type='text' :placeholder='$t("to")' @input='maxCost = Number($event.target.value)'>
            <button @click='filterFetch'>OK</button>
          </div>
          <div class='brands-search'>
            <span class='bold'>{{ $t('brand') }}</span>
            <input v-model='searchBrand' type='text' :placeholder='$t("search")'>
          </div>
          <div v-if='filtredBrands' class='brands-list'>
            <div v-for='item in filtredBrands' :key='item.id' class='checkbox-container'>
              <div>
                <input :id='item.id' v-model='item.isSelected' type='checkbox' class='checkbox' />
                <label :for='item.id'></label>
                <span>{{ item.name }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-for='item in filtres' :key='item.id'>
          <div class='brands-list-item' @click='toggleFilters(item.id)'>
            <p>{{ item.name }}</p>
            <img src='~assets/images/icons/category-arrow.svg' alt='' :class='item.isOpened ? "opened-filter" : null'>
          </div>
          <div v-for='value in item.values' :key='value.id' style='max-width: 258px' class='checkbox-container'>
            <div :class='!item.isOpened ? "hide" : null'>
              <input :id='value.id' v-model='value.isSelected' type='checkbox' class='checkbox' :disabled = 'countsFormatted[value.id] == null' />
              <label :for='value.id'></label>
              <span>{{ clearText(value.name) }}</span>
              <span v-if="countsFormatted[value.id] != null" class="count">({{countsFormatted[value.id]}})</span>
            </div>
          </div>
        </div>
      </div>
      <div class='main-container-right'>
        <div class='articles-container'>
          <ProductOne
            v-for='item in articles.data.articles'
            :id='Number(item.id)'
            :key='item.id'
            :item-state='item.sell_status'
            :cost='Number(item.price)'
            :cost-old='Number(item.old_price)'
            :name='item.title'
            :image='item.preview_img.url'
          />
        </div>
        <!--        <div class='buttons-container'>-->
        <!--          <button @click='switchPage(false)'>&lt;</button>-->
        <!--          <div v-if='articles.data.total_pages > 8'>-->
        <!--            <div>-->
        <!--              <button v-for='item in 7' :key='item' :class='page === item ? "active-btn" : null' @click='page = item'>-->
        <!--                {{ item }}-->
        <!--              </button>-->
        <!--              <button>-->
        <!--                ...-->
        <!--              </button>-->
        <!--              <button-->
        <!--                :class='page === articles.data.total_pages ? "active-btn" : null'-->
        <!--                @click='page = articles.data.total_pages'>-->
        <!--                {{ articles.data.total_pages }}-->
        <!--              </button>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div v-else>-->
        <!--            <button-->
        <!--              v-for='item in articles.data.total_pages'-->
        <!--              :key='item' :class='page === item ? "active-btn" : null'-->
        <!--              @click='page = item'>-->
        <!--              {{ item }}-->
        <!--            </button>-->
        <!--          </div>-->

        <!--          <button @click='switchPage(true)'>&gt;</button>-->
        <!--        </div>-->
        <AppPagination
          :total-pages='articles.data.total_pages'
          :current-page='page'
          :arrows-space-between='false'
          @update='(val) => page = val'
        />

      </div>
    </div>
  </div>
</template>

<script>
// import AppCatCard from '@/components/ui/AppCatCard.vue';
import AppSlider from '@/components/ui/AppSlider.vue';
import AppCatCard from '@/components/ui/AppCatCard.vue';
import ProductOne from '@/components/ui/ProductOne.vue';
import AppPagination from '@/components/ui/AppPagination.vue';

export default {
  name: 'Podcat',
  components: { AppPagination, ProductOne, AppCatCard,AppSlider },
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

      const banners = await ctx.$axios.$get('/Banners/category-banners', {
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
        banners,
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
      page: 1,
    };
  },

  computed:{
    countsFormatted(){
      const counts={};
      if(this.articles.data.filter_data != null)
        this.articles.data.filter_data.forEach(e=>{
          counts[e.key] = e.count;
        });
      return counts;
    }
  },

  watch: {
    searchBrand(val) {
      this.filtredBrands = this.brands.filter(item => item.name.toLowerCase().includes(val.toLowerCase()));
    },
    async page() {
      await this.filterFetch(false);
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
    async filterFetch(clearPage = true) {
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

      if (clearPage) this.page = 1;

      this.articles = await this.$axios.$post('/Goods/category-articles', {
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
            page: this.page,
          },
        });
    },
    async switchPage(step) {
      if (step) {
        if (this.page === this.articles.data.total_pages) return;
        this.page += 1;
      } else {
        if (this.page === 1) return;
        this.page -= 1;
      }
      await this.filterFetch(false);
    },
  },
};
</script>

<style scoped lang='scss'>

input[type="checkbox"] + label {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid $lh-accent-green;
  border-radius: 5px;
  cursor: pointer;
}

input[type="checkbox"]:disabled + label {

  border: 2px solid $lh-gray;
}

.count {
  color: $lh-panel-gray;
}

input[type="checkbox"]:checked + label:after {
  position: relative;
  top: -2px;
  left: 2px;
  content: '\2714';
  color: $lh-accent-orange;
  font-size: 14px;
}

input[type="checkbox"] {
  display: none;
}


.podcats-block {
  display: flex;
  justify-content: space-evenly;
}

.main-container-right {
  width: 100%;
}

.articles-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: flex-start;
  width: 100%;
}

.buttons-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  button {
    //padding: 5px;
    width: 40px;
    height: 40px;
    margin: 0 10px;
    border-radius: 11px;
    border: 2px solid $main-light-gray
  }

  button:hover {
    cursor: pointer;
  }

  .active-btn {
    background-color: $main-gray;
    color: $main-light-gray;
    border: 2px solid $main-gray
  }
}

.main-container {
  display: flex;
}

.checkbox-container {
  div {
    display: flex;
    align-items: center;
    margin-bottom: 5px;

    span {
      margin-left: 5px;
    }
  }
}

.hide {
  display: none !important;
}

.filter-container {
  max-width: 226px;
  width: 100%;
  margin-right: 20px;
  padding: 0 6px;

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
      padding: 11px 16px;
    }

    input::placeholder {
      text-align: center;
    }

    span {
      margin: 0 5px;
      color: $main-light-gray;
    }

    button {
      margin-left: 10px;
      border-radius: 11px;
      border: none;
      background-color: $lh-accent-green;
      padding: 11px 12px;
      color: $lh-white;
      text-transform: uppercase;
    }

    button:hover {
      cursor: pointer;
    }
  }

  .brands-search {
    display: flex;
    flex-direction: column;

    input {
      padding: 11px 10px;
    }

    span {
      margin: 10px 0 0 0;
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
    margin: 0;
  }

  .brands-list::-webkit-scrollbar-track {
    background: $main-light-gray; /* цвет зоны отслеживания */
    border-radius: 20px;
  }

  .brands-list::-webkit-scrollbar-thumb {
    background-color: #B0B1BA; /* цвет бегунка */
    border-radius: 20px; /* округлось бегунка */
    border: 0 solid $main-light-gray; /* отступ вокруг бегунка */
    margin: 6px;
  }
}
</style>
