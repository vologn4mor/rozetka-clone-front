<template>
  <div class='dashboard-item'>
    <div class='header'>
    <span>
      {{ headerLabel }}
    </span>
      <span>
      {{ percent }} %
    </span>
    </div>
    <div class='main'>
      <img :src='icon' alt=''>
      <span>{{ number }}</span>
    </div>
    <div class='footer'>
      <nuxt-link :to='localePath(link)'>
        Подробніше ...
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboardItem',
  props: {
    headerLabel: {
      type: String,
      required: true,
    },
    percent: {
      type: Number,
      required: true,
    },
    number: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang='scss'>

.dashboard-item {
  width: 347px;
  background-color: $admin-white;

  .header {
    display: flex;
    justify-content: space-between;
    padding: 10px 16px;
    font-size: 20px;
    background-color: $main-gray;
    color: $lh-white;
  }

  .main {
    display: flex;
    justify-content: space-around;
    padding: 30px 0;

    img {
      width: 60px;
      height: 60px;
    }

    span {
      font-size: 64px;
    }
  }

  .footer {
    padding: 10px;
    border: 1px solid $main-gray;

    a {
      color: $main-gray;
    }
  }
}

</style>
