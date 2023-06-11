<template>
  <div>
    <h1>{{ rules.title }}</h1>
    <span>{{ rules.underTitle }}</span>
    <div v-for='rule in rules.mainRules' :key='rule.title'>
      <h3>{{ rule.title }}</h3>
      <span v-if='typeof rule.text === "string"'>{{ rule.text }}</span>
      <ul v-else>
        <li v-for='item in rule.text' :key='item'>{{ item }}</li>
      </ul>
    </div>

    <h2>{{ rules.publicOffer }}</h2>
    <h3>{{ rules.rulesBonusProgram }}</h3>
    <span>{{ rules.content }}</span>
    <ol>
      <li v-for='content in rules.contentData' :key='content'>{{ content }}</li>
    </ol>

    <div
      v-for='(rule, key) in rules.publicOfferData'
      :key='rule.title'
      class='public-offer-data'
    >
      <h3>{{ key + 1 }}. {{ rule.title }}</h3>
      <div v-for='item in rule.text' :key='item'>
        <span v-if='typeof item === "string"'>{{ item }}</span>
        <ul v-else>
          <li v-for='liItem in item' :key='liItem'>
            {{ liItem }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import usageRules from '@/locales/usage-rules.json';

export default {
  name: 'UsageRules',
  data() {
    return {
      usageRules,
    };
  },
  computed: {
    rules() {
      return usageRules[this.$i18n.locale];
    },
  },
  beforeMount() {
    this.setHeaderLocate(null);
  },
  methods: {
    ...mapMutations({
      setHeaderLocate: 'setHeaderLocate',
    }),
  },
};
</script>

<style scoped lang='scss'>
.public-offer-data {
  div {
    margin: 20px 0 0 30px;
  }

  li {
    margin-top: 10px;
  }
}
</style>
