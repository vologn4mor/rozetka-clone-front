<template>
  <div>
    <h1>{{ $t('myBonuses') }}</h1>
    <div class='empty-window'>
      <img src='@/assets/images/Profile/my-bonuses.svg' alt=''>
      <h3>{{ $t('activateBonusAccForMin') }}</h3>
      <p>{{ $t('smsOrViberSendMessageWithCode') }}</p>
      <div class='custom-input' @click='$refs.inputNumber.focus()'>
        <img src='@/assets/images/Profile/ua.png' alt=''>
        <span>+380 </span>
        <input ref='inputNumber' type='tel' />
      </div>
      <nuxt-link :to='localePath("/")' class='first-btn'>{{ $t('continue') }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ProfileMyBonuses',
  beforeMount() {
    this.setHeaderLocate([{ name: 'myBonuses' }]);
  },
  methods: {
    ...mapMutations({
      setHeaderLocate: 'setHeaderLocate',
    }),
  },
};
</script>

<style scoped lang='scss'>

h1 {
  font-size: 31px;
  margin: 0;
}

.empty-window {
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  *:only-child {
    margin: 15px 0;
  }

  .custom-input {
    //margin: 0;
  }
}

.first-btn {
  background-color: $lh-accent-green;
  color: $lh-white;
  text-align: center;
}

button, a {
  padding: 12.5px 35.5px;
  background-color: gray;
  border-radius: 11px;
  border: 0px solid white;
  margin-top: 15px;
  max-width: 193px;
  width: 100%;
  white-space: nowrap;
}

.custom-input {
  display: flex;
  align-items: center;
  border: 2px solid $main-gray;
  border-radius: 11px;
  padding: 10px;
  max-width: 240px;
  width: 100%;

  span {
    margin: 0 6px;
  }

  input {
    border: 0;
    margin: 0;
  }

  input:focus {
    outline: none;
  }
}

.custom-input:hover {
  cursor: pointer;
}
</style>
