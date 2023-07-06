<template>
  <div class='root'>
    <div class='admin-container'>
      <div class='header-container'>
        <div class='header'>
          <div class='header-left'>
            <nuxt-link :to='localePath("/panel/dashboard")'>
              <img src='~/assets/images/icons/AdminLayout/logo.svg' alt=''>
            </nuxt-link>
          </div>
          <div class='header-right'>
            <nuxt-link :to='localePath("/profile")'>
              <img src='~/assets/images/icons/AdminLayout/user.svg' alt=''>
            </nuxt-link>
            <nuxt-link :to='localePath("/")'>
              <img src='~/assets/images/icons/AdminLayout/home.svg' alt=''>
            </nuxt-link>
            <div @click='logout'>
              <span>Вихід</span>
              <img src='~/assets/images/icons/AdminLayout/logout.svg' alt=''>
            </div>
          </div>
        </div>
      </div>
      <div class='main'>
        <div class='main-left'>
          <hr>
          <div class='user-info'>
            <div class='image'>

            </div>
            <div class='name-and-role'>
              <span class='name'>ПІБ Користувача</span>
              <span class='role'>Адміністратор</span>
            </div>
          </div>
          <hr>
          <div class='user-routes'>
            <MenuDropdown
              v-for='item in menu'
              :key='item.name'
              :routes='item.routes'
              :icon='item.icon'
              :name='item.name' />
          </div>
        </div>
        <div class='main-right'>
          <Nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import MenuDropdown from '@/components/panel/MenuDropdown.vue';
import catalogIcon from '@/assets/images/icons/AdminLayout/Panel/catalog.svg';
import dashboardIcon from '@/assets/images/icons/AdminLayout/Panel/dashboard.svg';

export default {
  name: 'AdminLayout',
  components: { MenuDropdown },
  data() {
    return {
      menu: [
        {
          icon: dashboardIcon,
          name: 'Панель стану',
          routes: '/dashboard',
        },
        {
          icon: catalogIcon,
          name: 'Каталог',
          routes: [
            {
              route: '/categories',
              name: 'Категории',
            },
            {
              route: '/articles',
              name: 'Товари',
            },
            {
              route: '/orders',
              name: 'Замовлення',
            },
            {
              route: '/filters',
              name: 'Фільтри',
            },
            {
              route: '/reviews-articles',
              name: 'Відгуки про товари',
            },
            {
              route: '/manufacturers',
              name: 'Виробники',
            },
          ],
        },
      ],
    };
  },
  methods: {
    ...mapActions('user', {
      logout: 'logout',
    }),
  },
};
</script>

<style scoped lang='scss'>
a, span {
  color: white;
}

.admin-container {

}

.header-container {
  background-color: $lh-dark;

}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1416px;
  margin: 0 auto;

  .header-right {
    display: flex;
    align-items: center;

    a:nth-child(2) {
      margin: 0 20px;
    }

    div {
      display: flex;
      align-items: center;

      span {
        margin-right: 5px;
      }
    }

    div:hover {
      cursor: pointer;
    }
  }
}

.main {
  display: flex;
  //margin: 0 auto;
  //max-width: 1416px;
  padding-left: 228px;
  //padding-left: 10%;
  background-color: $lh-dark;

  .main-left {
    max-width: 268px;
    width: 100%;
    min-height: 1000px;

    hr {
      margin: 0;
    }


    .user-info {
      display: flex;
      align-items: center;
      margin: 30px 0;

      .image {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: white;
      }

      .name-and-role {
        margin-left: 20px;
        max-width: 150px;
      }

      .name {
        color: $lh-white;
      }

      .role {
        color: gray;
      }
    }
  }

  .main-right {
    background-color: white;
    width: 100%;
    padding-left: 20px;
  }
}
</style>
