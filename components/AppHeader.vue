<template>
  <div class='header'>
    <div class='header-container'>
      <div class='left-side'>
        <div class='categories-container' @click='isCatOpened = !isCatOpened'>
          <img src='~assets/images/icons/header/categories.svg' alt='categories'>
          <span>{{ $t('categories') }}</span>
        </div>
        <div class='header-logo' @click='routeTo("/")'>
          <img src='~assets/images/logo-header.svg' alt=''>
        </div>
        <div class='search-container'>
          <div class='search-input-container'>
            <div>
              <img src='~assets/images/icons/header/search.svg' alt='search' class='search'>
              <input
                v-model='search'
                type='text'
                :placeholder='$t("iAmLooking")'
                autocomplete='off'
              >
            </div>
            <client-only>
              <img
                v-if='!isMozilla'
                alt='microphone'
                class='microphone'
                src='~assets/images/icons/header/microphone.svg'
                @click='showMicModal = true'>
            </client-only>
          </div>
          <button>{{ $t('found') }}</button>
        </div>
        <div class='lang-selector-container'>
          <span :class='$i18n.locale === "ru" ? "selected" : null' @click='onLanguageChange("ru")'>RU</span>
          <div class='line'></div>
          <span :class='$i18n.locale === "ua" ? "selected" : null' @click='onLanguageChange("ua")'>UA</span>
        </div>
      </div>
      <div class='header-menu'>
        <nuxt-link :to='localePath("/")'>
          <img src='~assets/images/icons/header/favorite.svg' alt='favorite'>
        </nuxt-link>

        <nuxt-link :to='localePath("/cart")'>
          <img
            src='~assets/images/icons/header/cart.svg'
            alt='cart'
          >
        </nuxt-link>
        <nuxt-link v-if='user' :to='localePath("/profile")'>
          <img src='~assets/images/icons/header/profile.svg' alt='user'>
        </nuxt-link>
        <img v-else src='~assets/images/icons/header/user.svg' alt='user' @click='setShowAuth(true)'>
        <!--        <button v-else>login</button>-->
      </div>
    </div>
    <div
      v-if='isCatOpened && categories'
      v-click-outside='closeCategories'
      class='categories-list-container'
    >
      <div
        class='categories-list-container-left'
        :style='"height:" + 49 * categories.length + "px"'
      >
        <div
          v-for='item in categories'
          :key='item.id'
          @click='routeTo(`/category/${item.id}`)'
          @mouseenter='podCatWatchId = item.id'
        >
          <div class='item-name' :class='item.id === podCatWatchId ? "active" : null'>
            <div>
              <div
                v-if='item.smallIcon'>
                <img
                  :src='"data:image/png;base64, " + item.smallIcon'
                  alt='icon'
                >
              </div>
              <span>{{ item.name }}</span>
            </div>
            <img v-if='item.children.length' src='~/assets/images/icons/show-more-arrow.svg' alt='arrow'>
          </div>
        </div>
      </div>
      <div class='categories-list-container-right' :style='"height:" + 49 * categories.length + "px"'>
        <span v-if='podCatWatch.children.length' class='podCat-main-name'>{{ podCatWatch.name }}</span>
        <div
          v-for='children in podCatWatch.children'
          :key='children.id'
        >
          <span
            class='podCat-name'
            @click='routeTo(`/category/${podCatWatchId}/podcategory/${children.id}`)'
          >
            {{ children.name }}
          </span>
          <span
            v-for='podChildren in children.children'
            :key='podChildren.id'
            class='podCat-text'
            @click='routeTo(`/category/${podCatWatchId}/podcategory/${podChildren.id}`)'
          >
            {{ podChildren.name }}
          </span>
        </div>
      </div>
    </div>

    <AppModalCard v-show='showMicModal' @close='showMicModal = false'>
      <img src='~assets/images/icons/footer/mic.gif' alt='mic' style='max-width: 300px'>
      <h2 style='text-align: center'>Говорите...</h2>
      <client-only v-if='showMicModal'>
        <AppMic
          :lang='$i18n.locale === "ru" ? "ru-RU" : "uk-UA"'
          @onEnd='(e) => {search = e.res; showMicModal = false}'
        />
      </client-only>
    </AppModalCard>

    <AppModalCard v-if='showAuth' @close='setShowAuth(false)'>
      <!--      <input v-model='loginEmail' type='email' autocomplete='email'>-->
      <!--      <input v-model='loginPassword' type='password' autocomplete='password'>-->
      <div v-if='!isRegOpened'>
        <AppInput
          :value='loginEmail'
          label='Login'
          placeholder='example@gmail.com'
          @input='val => loginEmail = val'
        />
        <AppInput
          :value='loginPassword'
          label='Password'
          type='password'
          @input='val => loginPassword = val'
        />
        <ButtonProfile :title='$t("login")' class='btn-login' style-btn='orange' @click='loginHandler' />
        <ButtonProfile :title='$t("registration")' class='btn-login' style-btn='green' @click='isRegOpened = true' />
      </div>
      <div v-else>
        <AppInput
          :value='regEmail'
          label='Email'
          type='email'
          placeholder='example@gmail.com'
          @input='val => regEmail = val'
        />
        <AppInput
          :value='regUserName'
          type='text'
          label='Username'
          placeholder='Василь'
          @input='val => regUserName = val'
        />
        <AppInput
          :value='regPassword'
          label='Password'
          type='password'
          @input='val => regPassword = val'
        />
        <AppInput
          :value='regPasswordRepeat'
          label='Password Repeat'
          type='password'
          @input='val => regPasswordRepeat = val'
        />
        <!--        <ButtonProfile title='Войти' class='btn-login' style-btn='orange' @click='loginHandler' />-->
        <!--        <ButtonProfile title='Регистрация' class='btn-login' style-btn='green' @click='isRegOpened = true' />-->
        <ButtonProfile :title='$t("registration")' class='btn-login' style-btn='orange' @click='regHandler' />
        <ButtonProfile
          :title='$t("registrationBefore")'
          class='btn-login'
          style-btn='green'
          @click='isRegOpened = false' />

      </div>
    </AppModalCard>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import AppInput from '@/components/ui/AppInput.vue';
// import AppButton from '@/components/ui/AppButton.vue';
import ButtonProfile from '@/components/ui/Profile/ButtonProfile.vue';

export default {
  name: 'AppHeader',
  components: { ButtonProfile, AppInput },
  data() {
    return {
      showMicModal: false,
      search: '',
      isCatOpened: false,
      podCatWatchId: null,
      podCatWatch: [],
      loginEmail: '',
      loginPassword: '',
      isRegOpened: false,
      regEmail: '',
      regUserName: '',
      regPassword: '',
      regPasswordRepeat: '',
    };
  },
  computed: {
    ...mapGetters({
      categories: 'categories',
    }),
    ...mapGetters('user', {
      user: 'user',
      showAuth: 'showAuth',
    }),
    isMozilla: () => {
      if (!process.client) return;
      let sr = null;
      try {
        const Recognition = window.speechRecognition || window.webkitSpeechRecognition;
        sr = new Recognition();
        if (sr) return false;
      } catch (e) {
        return true;
      }
    },
  },
  watch: {
    podCatWatchId() {
      this.podCatWatch = this.categories.find(item => item.id === this.podCatWatchId);
    },
  },
  mounted() {
    if (this.categories)
      this.podCatWatchId = this.categories[0].id;
  },
  methods: {
    ...mapActions({
      initCategories: 'initCategories',
    }),
    ...mapActions('user', {
      login: 'login',
      register: 'register',
    }),
    ...mapMutations('user', {
      setShowAuth: 'setShowAuth',
    }),
    async onLanguageChange(event) {
      this.podCatWatchId = this.categories[0].id;
      await this.$router.replace(this.switchLocalePath(event));
      await this.initCategories();
      this.podCatWatch = this.categories.find(item => item.id === this.podCatWatchId);
    },
    closeCategories(e) {
      if (e.target.className === 'categories-container' || e.target.parentNode.className === 'categories-container') return null;
      this.isCatOpened = false;
    },
    routeTo(link) {
      this.isCatOpened = false;
      this.$router.push(this.localePath(link));
    },
    async loginHandler() {
      const res = await this.login({ email: this.loginEmail, password: this.loginPassword });
      if (res) this.setShowAuth(false);
      else this.$toast.error('Неверный email или пароль');
    },
    async regHandler() {
      if (!this.regEmail) return this.$toast.error('Email не указан');
      if (!this.regUserName) return this.$toast.error('Имя пользователя не указано');
      if (!this.regPassword) return this.$toast.error('Пароль не указан');
      if (this.regPassword !== this.regPasswordRepeat) return this.$toast.error('Пароли не совпадают');

      const res = await this.register({
        email: this.regEmail,
        password: this.regPassword,
        user_name: this.regUserName,
      });
      if (res) this.setShowAuth(false);
      else this.$toast.error('Неверный email или пароль');
    },
  },
};
</script>

<style scoped lang='scss'>
.header {
  background-color: $lh-dark;
  height: 68px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
}

.header-container, .left-side {
  max-width: 1435px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;

}

.categories-container {
  background-color: $lh-accent-green;
  width: 140px;
  height: 41px;
  border-radius: 109px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-right: 7px;
  }

  span {
    font-size: 20px;
    color: $lh-white;
  }

}

.categories-container:hover {
  cursor: pointer;
}

.categories-list-container {
  max-width: 1435px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  background-color: white;
  color: black;
  padding: 10px 0;


  .categories-list-container-left {
    display: flex;
    flex-direction: column;
    max-width: 300px;
    width: 100%;
    margin-right: 20px;

    .item-name {
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      padding: 10px;
      border-radius: 67px;

      div {
        display: flex;
        align-items: center;

        div {
          display: flex;
          width: 16px;
          justify-content: center;
          margin-right: 5px;

          img {
            height: 16px;
          }
        }
      }
    }

    .active {
      background-color: $lh-gray;
    }

    .item-name:hover {
      cursor: pointer;
    }
  }

  .categories-list-container-right {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;

    div {
      display: flex;
      flex-direction: column;
    }

    .podCat-main-name, .podCat-name {
      margin-bottom: 10px;
    }

    .podCat-main-name {
      font-size: 18px;
      font-weight: bold;
    }

    .podCat-name {
    }

    .podCat-text {
      margin-bottom: 5px;
      font-size: 12px;
      color: $lh-accent-orange;
    }

    .podCat-name:hover, .podCat-text:hover {
      cursor: pointer;
    }

  }
}

.header-logo {
  margin-left: 5px;

  span {
    font-family: KyivTypeSans;
    font-weight: 700;
    font-size: 32px;
    color: $main-light-gray;
  }
}

.header-logo:hover {
  cursor: pointer;
}

.search-container {
  display: flex;
  align-items: center;
  max-width: 836px;
  width: 100%;

  .search-input-container {
    margin-left: 5px;
    background-color: $lh-white;
    padding: 11.5px;
    border-radius: 151px 0 0 151px;
    justify-content: space-between;
    display: flex;
    width: 100%;
  }

  div {
    display: flex;
    width: 100%;

    input {
      margin-left: 7px;
      border: none;
      background-color: $lh-white;
      width: 100%;
    }

    input:focus {
      outline: none;
    }

  }

  button {
    border: none;
    color: $lh-white;
    background-color: $lh-accent-green;
    padding: 12.4px 20px;
    border-radius: 0 151px 151px 0;
  }

  button:hover {
    cursor: pointer;
  }
}

.lang-selector-container {
  color: $lh-accent-green;
  font-size: 18px;
  display: flex;
  align-items: center;
  margin-left: 20px;

  span:hover {
    cursor: pointer;
  }

  .line {
    background-color: $main-gray;
    width: 2px;
    height: 14px;
    border-radius: 151px;
    margin: 0 10px;
  }

  .selected {
    font-weight: 800;
    text-decoration: underline;
  }
}

.header-menu {
  display: flex;
  align-items: center;

  a:first-child {
    margin-left: 20px;
  }

  a:nth-child(2) {
    margin: 0 20px;
  }

  a:hover {
    cursor: pointer;
  }
}

.microphone:hover {
  cursor: pointer;
}

.btn-login {
  margin-top: 10px;
  width: 100%;
}

</style>

<style lang='scss' scoped>
@media (max-width: 1445px) {
  .header-container {
    max-width: none;
    width: auto;
    margin: 0 20px;
  }
}
</style>
