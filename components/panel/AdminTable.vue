<template>
  <div>
    <table>
      <tr>
        <th v-if='changeable'></th>
        <th v-for='item in header' :key='item'>
          {{ item }}
        </th>
        <th v-if='checkboxes'>Дія</th>
      </tr>
      <tr v-for='item in data' :key='item.id'>
        <td v-if='changeable'><input type='checkbox'></td>
        <td v-for='name in clearArray(item)' :key='name'>
          {{ item[name] }}
        </td>
        <td><img src='~/assets/images/icons/AdminLayout/Panel/change-data.svg' alt=''></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'AdminTable',
  props: {
    checkboxes: {
      type: Boolean,
      required: false,
      default: true,
    },
    changeable: {
      type: Boolean,
      required: false,
      default: true,
    },
    header: {
      type: Array,
      required: true,
    },
    data: {
      type: Array,
      required: true,
    },
  },
  computed: {},
  methods: {
    clearArray(item) {
      const clearArr = Object.keys(item);
      clearArr.shift();
      return clearArr;
    },
  },
};
</script>

<style scoped lang='scss'>

table {
  border-collapse: collapse;
  width: 100%;
}

th {
  background-color: $lh-panel-gray;
  font-weight: normal;
}

th, td {
  padding: 15px;
  border: 1px solid $lh-panel-gray;
}

td {
  img:hover {
    cursor: pointer;
  }
}
</style>
