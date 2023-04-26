<template>
  <div class='rating'>
    <ul class='list'>
      <li
        v-for='star in maxStars'
        :key='star'
        :class="{ 'active': star <= stars, 'pointer': isChangeble }"
        class='star'
        @click='isChangeble ? rate(star) : null'
      >
        <img :src='star <= stars ? icoStar : icoStarOut' />
      </li>
    </ul>
  </div>
</template>

<script>


export default {
  props: {
    grade: {
      type: Number,
      required: true,
    },
    maxStars: {
      type: Number,
      default: 5,
    },
    hasCounter: {
      type: Boolean,
      default: true,
    },
    icoStar: {
      type: String,
      required: true,
    },
    icoStarOut: {
      type: String,
      required: true,
    },
    isChangeble: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  data() {
    return {
      stars: this.grade,
    };
  },
  methods: {
    rate(star) {
      if (
        typeof star === 'number' &&
        star <= this.maxStars &&
        star >= 0
      )
        this.stars = this.stars === star ? star - 1 : star;

      this.$emit('update', this.stars);
    },
  },
};
</script>

<style scoped lang='scss'>

.rating {
  font-size: 22px;
  color: #a7a8a8;
}

.list {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.star {
  display: inline-block;
}

.pointer:hover {
  cursor: pointer;
}

li {
  margin-right: 3px;
}
</style>
