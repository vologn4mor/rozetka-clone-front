<template>
  <client-only>
    <div v-if='user' class='profile-container'>
      <div class='profile-menu'>
        <AppCard>
          <div class='card-content'>
            <div>
              <img src='@/assets/images/icons/profile/user.svg' alt=''>
              <span><nuxt-link :to='localePath("/profile")'>{{ user.first_name }} {{ user.last_name
                }}</nuxt-link></span>
            </div>
            <hr>
            <div v-if='user.roles.includes("Admin")'>
              <span style='margin-left: 29px'>
                <nuxt-link :to='localePath("/panel/categories")'>Панель</nuxt-link>
              </span>
            </div>
            <div>
              <img src='@/assets/images/icons/profile/my-orders.svg' alt=''>
              <span><nuxt-link :to='localePath("/profile/orders")'>{{ $t('myOrders') }}</nuxt-link></span>
            </div>
            <div>
              <img src='@/assets/images/icons/profile/favorite-list.svg' alt=''>
              <span><nuxt-link :to='localePath("/profile/favorite")'>{{ $t('favoriteList') }}</nuxt-link></span>
            </div>
            <div>
              <img src='@/assets/images/icons/profile/checked-articles.svg' alt=''>
              <span><nuxt-link :to='localePath("/profile/checked")'>{{ $t('checkedArticles') }}</nuxt-link></span>
            </div>
            <div>
              <img src='@/assets/images/icons/profile/my-bonuses.svg' alt=''>
              <span><nuxt-link :to='localePath("/profile/bonuses")'>{{ $t('myBonuses') }}</nuxt-link></span>
            </div>
            <div>
              <img src='@/assets/images/icons/profile/my-wallet.svg' alt=''>
              <span><nuxt-link :to='localePath("/profile/wallet")'>{{ $t('myWallet') }}</nuxt-link></span>
            </div>
            <div>
              <img src='@/assets/images/icons/profile/mailing-lists.svg' alt=''>
              <span><nuxt-link :to='localePath("/profile/mailing")'>{{ $t('mailingLists') }}</nuxt-link></span>
            </div>
            <div>
              <span style='margin-left: 29px' @click='logoutHandler'>Выход</span>
            </div>
          </div>

        </AppCard>
      </div>
      <div class='profile-page'>
        <ProfilePersonalData v-if="$route.path === localePath('/profile')" />
        <ProfileMyOrders
          v-if="$route.path === localePath('/profile/orders')" />
        <ProfileFavoriteList v-if="$route.path === localePath('/profile/favorite')" />
        <ProfileCheckedArticles v-if="$route.path === localePath('/profile/checked')" />
        <ProfileMyBonuses v-if="$route.path === localePath('/profile/bonuses')" />
        <ProfileMyWallet v-if="$route.path === localePath('/profile/wallet')" />
        <ProfileMailingLists v-if="$route.path === localePath('/profile/mailing')" />
      </div>
    </div>
  </client-only>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import AppCard from '@/components/ui/AppCard.vue';


export default {
  name: 'ProfilePage',
  components: { AppCard },
  data() {
    return {};
  },
  computed: {
    ...mapGetters('user', {
      user: 'user',
    }),
  },
  beforeMount() {
    if (!this.user) this.$router.push(this.localePath('/'));
    this.setHeaderLocate([{ name: 'myOrders' }]);
  },
  methods: {
    ...mapMutations({
      setHeaderLocate: 'setHeaderLocate',
    }),
    ...mapActions('user', {
      logout: 'logout',
    }),
    async logoutHandler() {
      // await this.$router.push(this.localePath('/'));
      await this.logout();
    },
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
  max-width: 1194px;
}

a.nuxt-link-exact-active {
  font-weight: bold;
}
</style>
