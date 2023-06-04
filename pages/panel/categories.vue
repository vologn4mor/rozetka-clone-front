<template>
  <div class='container'>
    <h1>Категорії</h1>

    <div v-if='$fetchState.pending' class='loading-container'>
      <img src='~/assets/images/loader.gif' alt=''>
    </div>
    <p v-else-if='$fetchState.error'>An error occurred :(</p>
    <div v-else>
      <div v-if='!isCreateNewCat'>
        <div class='search-container'>
          <div class='search'>
            <AdminSearchInput @search='(val) => {search = val; fetchData()}' />
          </div>
          <div class='buttons'>
            <AdminButton type='delete' :color='selectedItemsId.length ? "red" : null ' />
            <AdminButton type='refresh' @click='fetchData' />
            <AdminButton type='plus' @click='isCreateNewCat = true' />
          </div>
        </div>
        <AdminTable :header='header' :data='items' />
        <div class='buttons-container'>
          <button @click='switchPage(false)'>&lt;</button>
          <div v-if='total_pages > 8'>
            <div>
              <button v-for='item in 7' :key='item' :class='page === item ? "active-btn" : null' @click='page = item'>
                {{ item }}
              </button>
              <button>
                ...
              </button>
              <button
                :class='page === total_pages ? "active-btn" : null'
                @click='page = total_pages'>
                {{ total_pages }}
              </button>
            </div>
          </div>
          <div v-else>
            <button
              v-for='item in total_pages'
              :key='item' :class='page === item ? "active-btn" : null'
              @click='page = item'>
              {{ item }}
            </button>
          </div>

          <button @click='switchPage(true)'>&gt;</button>
        </div>
      </div>
      <div v-else class='container-create'>
        <div class='add-new-cat-header'>
          <span><b>Додавання категорії</b></span>
          <div>
            <AdminButton type='save' />
            <AdminButton type='back' @click='isCreateNewCat = false' />
          </div>
        </div>
        <div class='container-new-cat'>
          <div class='menu'>
            <div>
              <span :class='!isCharOpened ? "active": null' @click='isCharOpened = false'>Загальні</span>
              <span :class='isCharOpened ? "active": null' @click='isCharOpened = true'>Характеристики</span>
            </div>
            <div>
              <AdminButton type='plus' />
              <AdminButton type='delete' />
            </div>
          </div>
        </div>
        <div class='main-first'>
          <div class='item'>
            <span>
            Батьківська категорія
          </span>
            <AdminSelect
              :options="['go', 'python', 'rust', 'javascript']"
              class='select'
            />
          </div>
          <div class='item'>
            <span>
            Показувати в категоріЇ
          </span>
            <AdminSelect
              :options="['go', 'python', 'rust', 'javascript']"
              class='select'
            />
          </div>
          <div class='item'>
            <span>
            Назва категорії
          </span>
            <AdminInputWithLang :lang-and-text='nameOfCat' @input='data => nameOfCat = data' />

          </div>
          <div class='item add-lang'>
            <span>
            Додати локалізацію
          </span>
            <AdminSelect
              :options="['ua', 'ru']"
              width='226'
              @input='val => addNewLangValue = val'
              style='margin: 0 20px'
            />
            <AdminButton type='ok' :is-text='true' @click='addNewLang' />
            <div
              v-if='addNewLangValue !== "ua" && langs.includes(addNewLangValue)'
              style='display: flex; align-items: center'>
              <span style='margin-left: 20px'>Видалити локалізацію</span>
              <AdminButton type='delete' style='margin-left: 20px' @click='deleteLang' />
            </div>
          </div>
          <div class='files-selector'>
            <span>
            Додати іконку
          </span>
            <AppDropdown />
            <span>
            Додати зображення
          </span>
            <AppDropdown />
          </div>
          <div class='item checkbox'>
            <span>Показувати іконку в головному меню</span>
            <div>
              <input :id='1' type='checkbox' />
              <label :for='1'></label>
            </div>
          </div>
          <div class='item'>
            <span>
            Опис категорії
          </span>
            <AdminInputWithLang
              :lang-and-text='descriptionOfCat'
              :is-textarea='true'
              @input='data => descriptionOfCat = data' />
          </div>
          <div class='item'>
            <span>
            HTML-тег Title
          </span>
            <AdminInput />
          </div>
          <div class='item'>
            <span>
            HTML-тег H1
          </span>
            <AdminInput />
          </div>
          <div class='item' style='padding-bottom: 40px'>
            <span>
            Мета-тег Description
          </span>
            <AdminInput :is-textarea='true' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSearchInput from '@/components/panel/AdminSearchInput.vue';
import AdminButton from '@/components/panel/AdminButton.vue';
import AdminTable from '@/components/panel/AdminTable.vue';
import AdminSelect from '@/components/panel/AdminSelect.vue';
import AdminInputWithLang from '@/components/panel/AdminInputWithLang.vue';
import AppDropdown from '@/components/panel/AppDropdown.vue';
import AdminInput from '@/components/panel/AdminInput.vue';

export default {
  name: 'Categories',
  components: { AdminInput, AppDropdown, AdminInputWithLang, AdminSelect, AdminTable, AdminButton, AdminSearchInput },
  layout: 'adminLayout',
  data() {
    return {
      header: ['Назва категорії', 'Кількість категорій', 'Кількість товарів в категорії'],
      items: [],
      search: null,
      page: 1,
      total_pages: 0,
      isCreateNewCat: false,
      isCharOpened: false,
      langs: ['ua'],
      addNewLangValue: 'ua',
      nameOfCat: [
        {
          lang: 'ua',
          text: '',
        },
      ],
      addIcon: null,
      addImg: null,
      showIconInMainMenu: false,
      descriptionOfCat: [
        {
          lang: 'ua',
          text: '',
        },
      ],
      htmlTitle: '',
      htmlH1: '',
      metaTag: '',
    };
  },
  async fetch() {
    const res = await this.$axios.$get('/Categories/flat', {
      params: {
        limit: 10,
        search: this.search,
        page: this.page,
      },
    });

    this.items = res.data.map(item => ({
      id: item.id,
      isSelected: false,
      name: item.name,
      child_categories: item.child_categories,
      articles_count: item.articles_count,
    }));
    this.total_pages = res.total_pages;
  },
  computed: {
    selectedItemsId() {
      const arr = [];
      this.items.forEach(item => {
        if (item.isSelected) {
          arr.push(item.id);
        }
      });
      return arr;
    },
  },
  watch: {
    async page() {
      await this.fetchData();
    },
  },
  methods: {
    fetchData() {
      this.$fetch();
    },
    async switchPage(step) {
      if (step) {
        if (this.page === this.total_pages) return;
        this.page += 1;
      } else {
        if (this.page === 1) return;
        this.page -= 1;
      }
      await this.fetchData();
    },
    addNewLang() {

      if (!this.langs.includes(this.addNewLangValue)) this.langs.push(this.addNewLangValue);

      const itemName = this.nameOfCat.filter(item => item.lang === this.addNewLangValue);

      if (!itemName.length) {
        this.nameOfCat.push({
          lang: this.addNewLangValue,
          text: '',
        });
      }

      const itemDesc = this.descriptionOfCat.filter(item => item.lang === this.addNewLangValue);

      if (!itemDesc.length) {
        this.descriptionOfCat.push({
          lang: this.addNewLangValue,
          text: '',
        });
      }
    },
    deleteLang() {
      this.langs = this.langs.filter(item => item !== this.addNewLangValue);
      this.nameOfCat = this.nameOfCat.filter(item => item.lang !== this.addNewLangValue);
      this.descriptionOfCat = this.descriptionOfCat.filter(item => item.lang !== this.addNewLangValue);
    },
  },
};
</script>

<style scoped lang='scss'>

input[type="checkbox"] {
  display: none;
}

/* стили для метки */
label {
  color: #000;
  cursor: pointer;
  font-weight: normal;
  line-height: 30px;
  margin: 0 auto;
  //padding: 10px 0;
  vertical-align: middle;
}

/* формируем внешний вид чекбокса в псевдоэлементе before */
label:before {
  content: " ";
  color: #000;
  display: inline-block;
  font: 20px/30px Arial;
  position: relative;

  text-align: center;
  text-indent: 0px;
  width: 15px;
  height: 15px;
  border-radius: 3px;
  background: #FFF;
  border: 1px solid #e3e3e3;
  border-image: initial;
  vertical-align: middle;
}

/* вариации внешнего вида в зав-ти от статуса checkbox */
/* checked */
input:checked + label:before {
  content: "";
  background: rgba(6, 102, 90);
  color: rgba(6, 102, 90);
}

/* disabled */
input:disabled + label:before {
  background: #eee;
  color: #aaa;
}

.container {
  max-width: 1133px;
  width: 100%;
  height: 100%;
}

.search-container {
  display: flex;
  margin: 20px 0;
  width: 100%;
  justify-content: space-between;

  div:first-child {
    max-width: 952px;
    width: 100%;
  }

  .buttons {
    display: flex;

    div {
      margin: 0 5px;
    }
  }
}

.buttons-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  button {
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

.loading-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-new-cat-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #7C7B8980;

  div {
    display: flex;

    div {
      margin-left: 10px;
    }
  }
}

.container-new-cat {
  //display: flex;
  background-color: $lh-gray;

  .menu {
    display: flex;
    justify-content: space-between;
    padding-top: 20px;

    div {
      display: flex;

      div {
        margin-right: 7px;
      }
    }

    div:first-child {
      span {
        padding: 15px 30px;
      }

      span:hover {
        cursor: pointer;
      }

      .active {
        background-color: #7C7B89;
        color: $lh-gray;
      }
    }
  }
}

.container-create {
  background-color: #EEEBE7;
}

.main-first {
  .item {
    display: flex;
    white-space: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 30px 44px 0 60px;

    div {
      max-width: 787px;
    }
  }

  .checkbox {
    span {
      white-space: normal;
      max-width: 215px;
      margin-right: 25px;
    }

    justify-content: flex-start;
  }

  .add-lang {
    justify-content: normal;
    margin-left: 300px;
  }
}

.files-selector {
  display: flex;
  //justify-content: space-between;
  margin: 30px 44px 0 60px;

  span {
    margin: 0 51px 0 38px;
    white-space: nowrap;
  }

  span:first-child {
    margin-left: 0;
    margin-right: 140px;
  }


}
</style>
