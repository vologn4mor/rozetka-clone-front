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
      <tr v-for='item in data' :key='item.id' :class='item.isSelected ? "is-selcted" : null'>
        <td v-if='changeable' style='width: 18px; height: 18px;'>
          <input :id='item.id' v-model='item.isSelected' type='checkbox' />
          <label :for='item.id'></label>
        </td>
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
      if (typeof item.isSelected === 'boolean') {
        clearArr.shift();
      }
      return clearArr;
    },
  },
};
</script>

<style scoped lang='scss'>

/* прячем input checkbox */
input[type="checkbox"] {
  display: none;
}

/* стили для метки */
label {
  color: #000;
  cursor: pointer;
  font-weight: normal;
  line-height: 30px;
  margin: 0 auto;
  //padding: 10px 0;
  vertical-align: middle;
}

/* формируем внешний вид чекбокса в псевдоэлементе before */
label:before {
  content: " ";
  color: #000;
  display: inline-block;
  font: 20px/30px Arial;
  position: relative;

  text-align: center;
  text-indent: 0px;
  width: 15px;
  height: 15px;
  border-radius: 3px;
  background: #FFF;
  border: 1px solid #e3e3e3;
  border-image: initial;
  vertical-align: middle;
}

/* вариации внешнего вида в зав-ти от статуса checkbox */
/* checked */
input:checked + label:before {
  content: "";
  background: rgba(6, 102, 90);
  color: rgba(6, 102, 90);
}

/* disabled */
input:disabled + label:before {
  background: #eee;
  color: #aaa;
}

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

.is-selcted {
  background-color: #06665A26;
}
</style>
