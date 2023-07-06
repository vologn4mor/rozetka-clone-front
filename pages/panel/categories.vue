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
            <AdminButton type='delete' :color='selectedItemsId.length ? "red" : null ' @click='deleteCategories' />
            <AdminButton type='refresh' @click='fetchData' />
            <AdminButton type='plus' @click='getCats' />
          </div>
        </div>
        <AdminTable :header='header' :data='items' />
        <!--        <div class='buttons-container'>-->
        <!--          <button @click='switchPage(false)'>&lt;</button>-->
        <!--          <div v-if='total_pages > 8'>-->
        <!--            <div>-->
        <!--              <button v-for='item in 7' :key='item' :class='page === item ? "active-btn" : null' @click='page = item'>-->
        <!--                {{ item }}-->
        <!--              </button>-->
        <!--              <button>-->
        <!--                ...-->
        <!--              </button>-->
        <!--              <button-->
        <!--                :class='page === total_pages ? "active-btn" : null'-->
        <!--                @click='page = total_pages'>-->
        <!--                {{ total_pages }}-->
        <!--              </button>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div v-else>-->
        <!--            <button-->
        <!--              v-for='item in total_pages'-->
        <!--              :key='item' :class='page === item ? "active-btn" : null'-->
        <!--              @click='page = item'>-->
        <!--              {{ item }}-->
        <!--            </button>-->
        <!--          </div>-->

        <!--          <button @click='switchPage(true)'>&gt;</button>-->
        <!--        </div>-->
        <AppPagination
          :total-pages='total_pages'
          :current-page='page'
          @update='(val) => page = val'
        />
      </div>
      <div v-else class='container-create'>
        <div class='add-new-cat-header'>
          <span><b>Додавання категорії</b></span>
          <div>
            <AdminButton type='save' @click='createNewCat' />
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
        <div v-if='!isCharOpened' class='main-first'>
          <div class='item'>
            <span>
            Батьківська категорія
          </span>
            <AdminSelect
              placeholder='Оберіть категорію'
              :options='catsList.map(item => {return {id: item.id, value: item.name}})'
              class='select'
              @input='val => typeof val === "number" ? addNewCatData.parent_id = val : null'
            />
          </div>
          <div class='item'>
            <span>
            Показувати в категоріЇ
          </span>
            <AdminSelect
              placeholder='Оберіть категорію'
              :options='catsList.map(item => {return {id: item.id, value: item.name}})'
              class='select'
              @input='val => typeof val === "number" ? addNewCatData.showin_category_id = val : null'
            />
          </div>
          <div class='item'>
            <span>
            Назва категорії
          </span>
            <AdminInputWithLang :lang-and-text='addNewCatData.names' @input='data => addNewCatData.names = data' />

          </div>
          <div class='item add-lang'>
            <span>
            Додати локалізацію
          </span>
            <AdminSelect
              :options='langs'
              width='226'
              style='margin: 0 20px'
              @input='val => setAddNewLangValue(val)'
            />
            <AdminButton type='ok' :is-text='true' @click='addNewLang' />
            <div
              v-if='addNewLangValue !== "UK" && addNewCatData.names.length > 1'
              style='display: flex; align-items: center'>
              <span style='margin-left: 20px'>Видалити локалізацію</span>
              <AdminButton type='delete' style='margin-left: 20px' @click='deleteLang' />
            </div>
          </div>
          <div class='files-selector'>
            <span>
            Додати іконку
          </span>
            <AppDropdown
              placeholder='Перетягніть файли сюди чи натисніть на кнопку. Додавайте зображення у форматі .png'
              @input='val => addNewCatData.root_icon = val'
            />
            <span>
            Додати зображення
          </span>
            <AppDropdown
              placeholder='Перетягніть файл сюди чи натисніть на кнопку. Додавайте зображення у форматі .jpg, .gif, .png, розміром файлу до 5 МБ'
              @input='val => addNewCatData.category_image = val' />
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
        <div v-else class='main-second'>
          <div class='langs-block'>
            <AdminInputWithLang :lang-and-text='descriptionOfCat' :without-input='true' />
            <div class='item add-lang'>
            <span>
            Додати локалізацію
          </span>
              <AdminSelect
                :options="['UK', 'RU']"
                width='226'
                style='margin: 0 20px'
                @input='val => addNewLangValue = val'
              />
              <AdminButton type='ok' :is-text='true' @click='addNewLang' />
              <div
                v-if='addNewLangValue !== "UK" && langs.includes(addNewLangValue)'
                style='display: flex; align-items: center'>
                <span style='margin-left: 20px'>Видалити локалізацію</span>
                <AdminButton type='delete' style='margin-left: 20px' @click='deleteLang' />
              </div>
            </div>
          </div>
          <div class='adding-container'>
            <p>Додавання характеристик для товарів цієї категорії</p>
            <div class='adding'>
              <span>Додавання групи характеристик </span>
              <div class='buttons'>
                <AdminButton type='plus' />
                <AdminButton type='delete' />
              </div>
            </div>
            <div class='adding'>
              <span>Додавання характеристики </span>
              <div class='buttons'>
                <AdminButton type='plus' />
                <AdminButton type='delete' />
              </div>
            </div>
          </div>
          <hr>
          <div class='add-char-container'>
            <AdminAddChar />
            <AdminAddChar />
            <AdminAddChar />
            <AdminAddChar />
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
import AdminSelect from '@/components/AppSelect.vue';
import AdminInputWithLang from '@/components/panel/AdminInputWithLang.vue';
import AppDropdown from '@/components/panel/AppDropdown.vue';
import AdminInput from '@/components/panel/AdminInput.vue';
import AdminAddChar from '@/components/panel/AdminAddChar.vue';
import AppPagination from '@/components/ui/AppPagination.vue';

export default {
  name: 'Categories',
  components: {
    AppPagination,
    AdminAddChar,
    AdminInput,
    AppDropdown,
    AdminInputWithLang,
    AdminSelect,
    AdminTable,
    AdminButton,
    AdminSearchInput,
  },
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
      langs: [{ id: 1, value: 'UK' }, { id: 2, value: 'RU' }],
      addNewLangValue: 'UK',
      nameOfCat: [
        {
          lang: 'UK',
          text: '',
        },
      ],
      showIconInMainMenu: false,
      descriptionOfCat: [
        {
          lang: 'UK',
          text: '',
        },
      ],
      htmlTitle: '',
      htmlH1: '',
      metaTag: '',
      catsList: null,
      addNewCatData: {
        id: null,
        names: [{
          lang: 'UK',
          text: '',
        }],
        parent_id: null,
        showin_category_id: null,
        root_icon: null,
        existing_icon: null,
        category_image: null,
        existing_image: null,
        is_active: null,
        children: null,
      },
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

      // if (!this.langs.includes(this.addNewLangValue)) this.langs.push(this.addNewLangValue);

      const itemName = this.addNewCatData.names.filter(item => item.lang === this.addNewLangValue);

      if (!itemName.length) {
        this.addNewCatData.names.push({
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
      // this.langs = this.langs.filter(item => item !== this.addNewLangValue);
      this.addNewCatData.names = this.addNewCatData.names.filter(item => item.lang !== this.addNewLangValue);
      this.descriptionOfCat = this.descriptionOfCat.filter(item => item.lang !== this.addNewLangValue);
    },
    async getCats() {
      const res = await this.$axios.$get('/Categories/parent-candidates');
      console.log(res);
      this.catsList = res.data;
      this.isCreateNewCat = true;
    },
    setAddNewLangValue(id) {
      const item = this.langs.filter(item => item.id === id)[0];
      // console.log(item);
      // this.addNewLangValue = item.value;
      if (item) this.addNewLangValue = item.value;
    },
    async createNewCat() {
      try {
        const form = new FormData();
        // const names = this.addNewCatData.names.map(item => {
        //   return {
        //     [item.lang]: item.text,
        //   };
        // });
        const namesRes = {};
        this.addNewCatData.names.forEach(item => {
          namesRes[item.lang] = item.text;
        });
        // console.log(namesRes);
        form.append('names', JSON.stringify(namesRes));
        form.append('parent_id', this.addNewCatData.parent_id);
        form.append('showin_category_id', this.addNewCatData.showin_category_id);
        form.append('root_icon', this.addNewCatData.root_icon[0]);
        form.append('category_image', this.addNewCatData.category_image[0]);
        // console.log()
        await this.$axios.$post('/Categories/create', form);
        // console.log(res);
      } catch (e) {
        // console.log(e);
        if (e.errors) {
          Object.keys(e.errors).forEach(key => {
            console.log(e.errors[key]);
            this.$toast.error(e.errors[key]);
          });
        } else this.$toast.error(e);
      }
    },
    async deleteCategories() {
      await Promise.all(
        this.selectedItemsId.map(async id => {
          try {
            const res = await this.$axios.$delete('/categories/delete', {
              params: {
                category_id: id,
              },
            });
            if (!res) {
              this.$toast.error('ошибка');
            }
          } catch (e) {
            this.$toast.error(e);
          }

        }),
      );
      await this.$fetch();
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

.main-second {
  display: flex;
  flex-direction: column;

  .langs-block {
    max-width: 787px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-self: flex-end;

    .add-lang {
      display: flex;
      border-top: 1px solid;
      padding-top: 20px;
      align-items: center;
    }
  }

  .adding-container {
    padding: 20px 50px;

    .adding {
      display: flex;
      align-items: center;
      padding: 20px 0;

      .buttons {
        display: flex;
        margin-left: 20px;

        div {
          margin-right: 5px;
        }
      }
    }
  }

  .add-char-container {
    div {
      padding: 20px;
    }
  }
}
</style>
