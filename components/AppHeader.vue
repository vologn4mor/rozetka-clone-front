<template>
  <div class='header'>
    <div class='header-container'>
      <div class='left-side'>
        <div class='categories-container'>
          <img src='~assets/icons/header/categories.svg' alt='categories'>
          <span>{{ $t('categories') }}</span>
        </div>
        <div class='header-logo'>
          <span>LOGO</span>
        </div>
        <div class='search-container'>
          <div class='search-input-container'>
            <div>
              <img src='~assets/icons/header/search.svg' alt='search' class='search'>
              <input type='text' :placeholder='$t("iAmLooking")'>
            </div>
            <img src='~assets/icons/header/microphone.svg' alt='microphone' class='microphone'>
          </div>
          <button>{{ $t('found') }}</button>
        </div>
        <div class='lang-selector-container'>
          <span @click='onLanguageChange("ru")' :class='$i18n.locale === "ru" ? "selected" : null'>RU</span>
          <div class='line'></div>
          <span @click='onLanguageChange("ua")' :class='$i18n.locale === "ua" ? "selected" : null'>UA</span>
        </div>
      </div>
      <div class='header-menu'>
        <img src='~assets/icons/header/favorite.svg' alt='favorite'>
        <img src='~assets/icons/header/cart.svg' alt='cart'>
        <img src='~assets/icons/header/user.svg' alt='user'>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    onLanguageChange(event) {
      this.$router.replace(this.switchLocalePath(event));
    },
  },
};
</script>

<style scoped lang='scss'>
.header {
  background-color: $main-dark-gray;
  height: 68px;
  width: 100%;
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
  background-color: $main-light-gray;
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
  }

}

.header-logo {
  margin-left: 49px;

  span {
    font-family: KyivTypeSans;
    font-weight: 700;
    font-size: 32px;
    color: $main-light-gray;
  }
}

.search-container {
  display: flex;
  align-items: center;
  margin-left: 49px;
  max-width: 836px;
  width: 100%;

  .search-input-container {
    background-color: $main-light-gray;
    padding: 11px;
    border-radius: 151px 0px 0px 151px;
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
      background-color: $main-light-gray;
      width: 100%;
    }

    input:focus {
      outline: none;
    }

  }

  button {
    border: none;
    color: $main-light-gray;
    background-color: $main-gray;
    padding: 12.4px 20px;
    border-radius: 0px 151px 151px 0px;
  }

  button:hover {
    cursor: pointer;
  }
}

.lang-selector-container {
  color: $main-light-gray;
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

  img:first-child {
    margin-left: 20px;
  }

  img:nth-child(2) {
    margin: 0 20px;
  }
}
</style>
