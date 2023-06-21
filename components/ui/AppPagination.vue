<template>
  <div>
    <div class='buttons-container' :style='`justify-content: ${arrowsSpaceBetween ? "space-between" : "center"}`'>
      <button @click='switchPage(false)'>&lt;</button>
      <div v-if='totalPages > 8'>
        <div v-if='page < 5'>
          <button v-for='item in 5' :key='item' :class='page === item ? "active-btn" : null' @click='page = item'>
            {{ item }}
          </button>
          <button>
            ...
          </button>
          <button
            :class='page === totalPages ? "active-btn" : null'
            @click='page = totalPages'>
            {{ totalPages }}
          </button>
        </div>
        <div v-if='totalPages - page < 5'>
          <button
            :class='page === 1 ? "active-btn" : null'
            @click='page = 1'>
            {{ 1 }}
          </button>
          <button>
            ...
          </button>
          <button
            v-for='item in [totalPages - 5, totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages]'
            :key='item' :class='page === item ? "active-btn" : null' @click='page = item'>
            {{ item }}
          </button>


        </div>
        <div v-else-if='page >= 5'>
          <button
            :class='page === totalPages ? "active-btn" : null'
            @click='page = 1'>
            {{ 1 }}
          </button>
          <button>
            ...
          </button>
          <button
            v-for='item in [page - 2, page - 1, page, page + 1, page + 2]'
            :key='item'
            :class='page === item ? "active-btn" : null'
            @click='page = item'>
            {{ item }}
          </button>
          <button>
            ...
          </button>
          <button
            :class='page === totalPages ? "active-btn" : null'
            @click='page = totalPages'>
            {{ totalPages }}
          </button>
        </div>
      </div>
      <div v-else>
        <button
          v-for='item in totalPages'
          :key='item' :class='page === item ? "active-btn" : null'
          @click='page = item'>
          {{ item }}
        </button>
      </div>

      <button @click='switchPage(true)'>&gt;</button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AppPagination',
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: false,
      default: 1,
    },
    arrowsSpaceBetween: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      page: this.currentPage ? this.currentPage : 1,
    };
  },
  watch: {
    page: function(num) {
      this.$emit('update', num);
    },
  },
  methods: {
    switchPage(step) {
      if (step) {
        if (this.page === this.totalPages) return;
        this.page += 1;
      } else {
        if (this.page === 1) return;
        this.page -= 1;
      }
    },
  },
};
</script>

<style scoped lang='scss'>
.buttons-container {
  display: flex;
  align-items: center;
  //justify-content: space-between;
  margin-top: 20px;

  button {
    width: 40px;
    height: 40px;
    margin: 0 10px;
    border-radius: 11px;
    border: 2px solid $main-light-gray
  }

  button:hover {
    cursor: pointer;
  }

  .active-btn {
    background-color: $main-gray;
    color: $main-light-gray;
    border: 2px solid $main-gray
  }
}

</style>
