<template>
  <div>
    <div class='container'>
      <div
        class='name-and-icon'
        @click='typeof routes === "object" ? isOpened = !isOpened : $router.push(`/panel${routes}`)'
      >
        <div>
          <img :src='icon' alt=''>
          <span>{{ name }}</span>
        </div>
        <div>
          <img
            v-if='typeof routes === "object"'
            src='~/assets/images/icons/AdminLayout/Panel/arrow.svg' alt=''
            :class='isOpened ? "arrow-up" : null'>
        </div>
      </div>
      <div v-if='isOpened && typeof routes === "object"' class='routes'>
        <div v-for='item in routes' :key='item.route'>
          <nuxt-link :to='"/panel" + item.route'>
            <span>{{ item.name }}</span>
          </nuxt-link>
        </div>
      </div>
      <div v-else>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuDropdown',
  props: {
    name: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    routes: {
      type: [Array, String],
      required: true,
    },
  },
  data() {
    return {
      isOpened: true,
    };
  },
};
</script>

<style scoped lang='scss'>

a {
  color: white;
}

.container {
  padding: 14px 10px;
}

.name-and-icon {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  div {
    span {
      color: white;
    }
  }

  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 5px;
    }
  }
}

.name-and-icon:hover {
  cursor: pointer;
}

.arrow-up {
  transform: rotate(180deg);
}

.routes {
  div {
    margin-bottom: 10px;
  }
}

//
//a.nuxt-link-active {
//
//  color: $lh-accent-orange;
//}

/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  font-weight: bold;
  color: $lh-accent-orange !important;
}
</style>
