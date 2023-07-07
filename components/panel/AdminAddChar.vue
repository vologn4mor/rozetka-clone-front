<template>
  <div class='container'>
    <div class='checkbox'>
      <input :id='1' type='checkbox' />
      <label :for='1'></label>
    </div>
    <AdminInput width='484' />
    <AdminInput width='484' />
  </div>
</template>

<script>
import AdminInput from '@/components/panel/AdminInput.vue';

export default {
  name: 'AdminAddChar',
  components: { AdminInput },
};
</script>

<style scoped lang='scss'>
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

.container {
  display: flex;
  align-items: center;
}

.checkbox {
  padding: 0 10px;
}
</style>
