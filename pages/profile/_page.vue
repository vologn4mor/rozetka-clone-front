<template>
  <div class='profile-container'>
    <div class='profile-menu'>
      <AppCard>
        <div class='card-content'>
          <div>
            <img src='@/assets/images/icons/profile/user.svg' alt=''>
            <span>Имя Фамилия</span>
          </div>
          <hr>
          <div>
            <img src='@/assets/images/icons/profile/my-orders.svg' alt=''>
            <span><nuxt-link :to='localePath("/profile/orders")'>Мои заказы</nuxt-link></span>
          </div>
          <div>
            <img src='@/assets/images/icons/profile/favorite-list.svg' alt=''>
            <span><nuxt-link :to='localePath("/profile/favorite")'>Список желаний</nuxt-link></span>
          </div>
          <div>
            <img src='@/assets/images/icons/profile/checked-articles.svg' alt=''>
            <span><nuxt-link :to='localePath("/profile/checked")'>Просмотренные товары</nuxt-link></span>
          </div>
          <div>
            <img src='@/assets/images/icons/profile/my-bonuses.svg' alt=''>
            <span><nuxt-link :to='localePath("/profile/bonuses")'>Мои бонусы</nuxt-link></span>
          </div>
          <div>
            <img src='@/assets/images/icons/profile/my-wallet.svg' alt=''>
            <span><nuxt-link :to='localePath("/profile/wallet")'>Мой кошелек</nuxt-link></span>
          </div>
          <div>
            <img src='@/assets/images/icons/profile/mailing-lists.svg' alt=''>
            <span><nuxt-link :to='localePath("/profile/mailing")'>Рассылки</nuxt-link></span>
          </div>
        </div>

      </AppCard>
    </div>
    <div class='profile-page'>
      <ProfileMyOrders
        v-if="$route.path === localePath('/profile/orders') ||
              $route.path === localePath('/profile')" />
      <ProfileFavoriteList v-if="$route.path === localePath('/profile/favorite')" />
      <ProfileCheckedArticles v-if="$route.path === localePath('/profile/checked')" />
      <ProfileMyBonuses v-if="$route.path === localePath('/profile/bonuses')" />
      <ProfileMyWallet v-if="$route.path === localePath('/profile/wallet')" />
      <ProfileMailingLists v-if="$route.path === localePath('/profile/mailing')" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import AppCard from '@/components/ui/AppCard.vue';


export default {
  name: 'ProfilePage',
  components: { AppCard },
  data() {
    return {};
  },
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

.profile-container {
  display: flex;
}

.profile-menu {
  margin-right: 20px;

  .card-content {

    div {
      display: flex;
      align-items: center;
      margin-top: 20px;

      img {
        max-width: 20px;
      }

      span {
        margin-left: 10px;
        white-space: nowrap;
      }
    }

    div:first-child {
      margin: 0 0 10px 0;
    }

  }
}

.profile-page {
  width: 100%;
}

a.nuxt-link-active {
  font-weight: bold;
}
</style>
