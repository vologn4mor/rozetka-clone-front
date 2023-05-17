<template>
  <div>
    <h1>{{ $t('myOrders') }}</h1>
    <div class='buttons'>
      <button class='first-btn'>{{ $t('allOrders') }}</button>
      <button class='second-btn'>{{ $t('guaranteeAndReturns') }}</button>
    </div>
    <div class='empty-window'>
      <img src='@/assets/images/Profile/orders-empty.svg' alt=''>
      <h3>{{ $t('ordersListEmpty') }}</h3>
      <p>{{ $t('youHaveNotOrdered') }}</p>
      <nuxt-link :to='localePath("/")' class='first-btn'>{{ $t('goToMain') }}</nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ProfileMyOrders',
  beforeMount() {
    this.setHeaderLocate([{ name: 'myOrders' }]);
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

.buttons {
  margin-top: 20px;
  display: flex;
}

button, a {
  padding: 12.5px 35.5px;
  background-color: gray;
  border-radius: 11px;
  border: 0 solid white;
}

button:hover {
  cursor: pointer;
}

.first-btn {
  background-color: $main-gray;
  color: $main-light-gray;
}

.second-btn {
  background-color: $main-light-gray;
  color: $main-gray;
  margin-left: 16px;
}

.empty-window {
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;

  * {
    margin: 15px 0;
  }
}

</style>
