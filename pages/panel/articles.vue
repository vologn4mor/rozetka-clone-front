<template>
  <div class='container'>
    <div v-if='$fetchState.pending' class='loading-container'>
      <img src='~/assets/images/loader.gif' alt=''>

    </div>
    <p v-else-if='$fetchState.error'>An error occurred :(</p>
    <div v-else-if='!showCreateArticle'>
      <h1>Товари</h1>
      <div class='header-first'>
        <AdminSearchInput
          placeholder='Назва товару'
          :value='search'
          @search='fetchData'
          @input='val => search = val' />
      </div>
      <div class='header-second'>
        <AdminSearchInput
          placeholder='Код товару'
          :value='article_id'
          @search='fetchData'
          @input='val => article_id = val' />
        <AdminSearchInput
          placeholder='Категорії (id)'
          :value='category_id'
          @search='fetchData'
          @input='val => category_id = val' />
        <AdminButton type='plus' @click='showCreateArticle = true' />
        <AdminButton type='refresh' @click='fetchData' />
        <AdminButton type='delete' />
      </div>
      <AdminTable :data='items' :header='header' />
      <AppPagination
        :total-pages='total_pages'
        :current-page='page'
        @input='(val) => {page = val}' />
    </div>
    <div v-else class='container-create'>
      <h2>Товари</h2>
      <div class='add-new-cat-header'>
        <span><b>Додавання товару</b></span>
        <div>
          <AdminButton type='save' />
          <AdminButton type='back' @click='showCreateArticle = false' />
        </div>
      </div>
      <div class='container-new-cat'>
        <div class='menu'>
          <div>
            <span :class='pageOpenArticleNumber === 1 ? "active": null'
                  @click='pageOpenArticleNumber = 1'>Загальні</span>
            <span :class='pageOpenArticleNumber === 2 ? "active": null'
                  @click='pageOpenArticleNumber = 2'>Опис товару</span>
            <span :class='pageOpenArticleNumber === 3 ? "active": null' @click='pageOpenArticleNumber = 3'>Характеристики</span>
            <span :class='pageOpenArticleNumber === 4 ? "active": null' @click='pageOpenArticleNumber = 4'>Бонуси</span>
            <span :class='pageOpenArticleNumber === 5 ? "active": null' @click='pageOpenArticleNumber = 5'>Акції</span>
            <span :class='pageOpenArticleNumber === 6 ? "active": null' @click='pageOpenArticleNumber = 6'>Знижки</span>
          </div>
          <div>
            <AdminButton type='plus' />
            <AdminButton type='delete' />
          </div>
        </div>
      </div>
      <div v-if='pageOpenArticleNumber === 1' class='main-first'>
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
        <div class='item'>
            <span>
            Категорія
          </span>
          <AdminSelect
            placeholder='Оберіть категорію'
            :options='[{id: 0, value: ""}]'
            class='select'
          />
        </div>
        <div class='item'>
            <span>
            Назва товару
          </span>
          <AdminInput />
        </div>
        <div class='files-selector'>
            <span>
            Додати зображення
          </span>
          <AppDropdown
            placeholder='Перетягніть файл сюди чи натисніть на кнопку. Додавайте зображення у форматі .jpg, .gif, .png, розміром файлу до 5 МБ'
            @input='val => addNewCatData.root_icon = val'
          />
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

      <div v-if='pageOpenArticleNumber === 2' class='main-first'>
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
        <div class='item'>
            <span>
            Категорія
          </span>
          <AdminSelect
            placeholder='Оберіть категорію'
            :options='[{id: 0, value: ""}]'
            class='select'
          />
        </div>
        <div class='item'>
            <span>
            Назва товару
          </span>
          <AdminInput />
        </div>
        <div class='files-selector'>
            <span>
            Додати зображення
          </span>
          <AppDropdown
            placeholder='Перетягніть файл сюди чи натисніть на кнопку. Додавайте зображення у форматі .jpg, .gif, .png, розміром файлу до 5 МБ'
            @input='val => addNewCatData.root_icon = val'
          />
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
        <div class='item' style='padding-bottom: 40px'>
            <span>
            Опис товару
          </span>
          <AdminInput :is-textarea='true' />
        </div>
        <hr>
        <div class='item item-plus'>
          <div>
            <span>
              Додавання попередження
            </span>
            <AdminButton type='plus' style='align-self: flex-start' />
          </div>
        </div>
        <div class='item' style='padding-bottom: 40px'>
            <span>

          </span>
          <AdminInput :is-textarea='true'
                      value='Увага! Перед встановленням програмного забезпечення прохання перевірити сумісність із пристроєм, зазначену на упаковці, документації або на веб-сайті    ' />
        </div>
        <div class='item' style='padding-bottom: 40px'>
            <span>

          </span>
          <AdminInput :is-textarea='true' value='   Характеристики та комплектація товару можуть змінюватися виробником без повідомлення.
* Огляд підготовлений на базі однієї з моделей серії. Точні специфікації дивіться у вкладці "Характеристики"' />
        </div>
        <!--        <div class='adding-container'>-->
        <!--          <p>Додавання характеристик для товарів цієї категорії</p>-->
        <!--          <div class='adding'>-->
        <!--            <span>Додавання групи характеристик </span>-->
        <!--            <div class='buttons'>-->
        <!--              <AdminButton type='plus' />-->
        <!--              <AdminButton type='delete' />-->
        <!--            </div>-->
        <!--          </div>-->
        <!--          <div class='adding'>-->
        <!--            <span>Додавання характеристики </span>-->
        <!--            <div class='buttons'>-->
        <!--              <AdminButton type='plus' />-->
        <!--              <AdminButton type='delete' />-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
        <hr>
        <!--        <div class='add-char-container'>-->
        <!--          <AdminAddChar />-->
        <!--          <AdminAddChar />-->
        <!--          <AdminAddChar />-->
        <!--          <AdminAddChar />-->
        <!--        </div>-->
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
      <div v-if='pageOpenArticleNumber === 3' class='main-first'>
        <div class='langs-block' style='padding: 20px 0'>
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

        <div class='add-char-container' style='padding: 20px 0'>
          <AdminAddChar />
          <AdminAddChar />
          <AdminAddChar />
          <AdminAddChar />
        </div>
      </div>
      <div v-if='pageOpenArticleNumber === 6' class='main-first'>
        <div class='item'>
            <span>
            Батьківська категорія
          </span>
          <AdminSelect
            placeholder='Оберіть категорію'
            :options='[{id: 0, value: ""}]'
            class='select'
          />
        </div>
        <div class='item'>
            <span>
            Показувати в категоріЇ
          </span>
          <AdminSelect
            placeholder='Оберіть категорію'
            :options='[{id: 0, value: ""}]'
            class='select'
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
    </div>
  </div>
</template>

<script>
import AdminSearchInput from '@/components/panel/AdminSearchInput.vue';
import AdminTable from '@/components/panel/AdminTable.vue';
import AppPagination from '@/components/ui/AppPagination.vue';
import AdminButton from '@/components/panel/AdminButton.vue';
// import AdminAddChar from '@/components/panel/AdminAddChar.vue';
// import AdminSelect from '@/components/panel/AdminSelect'
import AdminSelect from '@/components/AppSelect.vue';
import AdminInputWithLang from '@/components/panel/AdminInputWithLang.vue';
import AppDropdown from '@/components/panel/AppDropdown.vue';
import AdminInput from '@/components/panel/AdminInput.vue';
import AdminAddChar from '@/components/panel/AdminAddChar.vue';

export default {
  name: 'Articles',
  components: {
    AdminAddChar,
    AdminInput,
    AppDropdown,
    AdminInputWithLang,
    AdminButton,
    AppPagination,
    AdminTable,
    AdminSearchInput,
    AdminSelect,
  },
  layout: 'adminLayout',
  data() {
    return {
      header: ['Назва товару', 'Код товару', 'Ціна, грн', 'Категорія', 'Фото товару', 'Кількість', 'Статус'],
      items: [],
      page: 1,
      total_pages: 0,
      search: '',
      article_id: '',
      category_id: '',
      showCreateArticle: false,
      pageOpenArticleNumber: 1,
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
      catsList: null,
    };
  },
  async fetch() {
    const res = await this.$axios.$get('/GoodsAdmin/get-list', {
      params: {
        page: this.page,
        limit: 8,
        search: this.search ? this.search : null,
        article_id: this.article_id ? this.article_id : null,
        category_id: this.category_id ? this.category_id : null,
      },
    });

    this.items = res.data.articles.map(item => ({
      id: item.id,
      isSelected: false,
      name: item.name,
      code: item.id,
      price: item.price,
      category: item.category,
      preview: item.preview,
      quantity: item.quantity,
      status: item.status,
    }));

    this.total_pages = res.data.total_pages;
  },
  watch: {
    async page() {
      await this.fetchData();
    },
    // async search() {
    //   await this.fetchData();
    // },
    // async article_id() {
    //   await this.fetchData();
    // },
    // async category_id() {
    //   await this.fetchData();
    // },
  },
  methods: {
    async fetchData() {
      await this.$fetch();
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
    setAddNewLangValue(id) {
      const item = this.langs.filter(item => item.id === id)[0];
      // console.log(item);
      // this.addNewLangValue = item.value;
      if (item) this.addNewLangValue = item.value;
    },
  },
};
</script>

<style scoped lang='scss'>

.loading-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  max-width: 1133px;
  width: 100%;
  height: 100%;
}

.header-first {
  width: 100%;
}

.header-second {
  display: flex;
  align-items: center;
  margin: 20px 0;

  div {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }

  div:last-child {
    margin-right: 0;
  }
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
    //margin-left: 300px;
    margin-top: 0;
  }

  .langs-block {
    margin-left: 300px;
  }

  .item-plus {
    div {
      display: flex;
      align-content: center;

      div {
        margin-left: 50px;
      }
    }
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

.add-char-container {
  div {
    margin-bottom: 20px;
  }
}
</style>
