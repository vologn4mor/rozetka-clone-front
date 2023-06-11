<template>
  <div class='vac-container'>
    <div class='first-block'>
      <img src='~assets/images/Other/Vacancies/vac-main.png' alt=''>
    </div>
    <div class='second-block'>
      <div class='up-part'>
        <span>Пошук вакансии</span>
        <AppButton :text='`Показати вакансии`' bg-color='#078071' />
      </div>
      <div class='down-part'>
        <AppSelect placeholder='Усі напрямки' :options='[{id: 1, value: "test1"}]' color='green' />
        <AppSelect placeholder='Усі категорії' :options='[{id: 1, value: "test1"}]' color='green' />
        <AppSelect placeholder='Всі типи зайнятості' :options='[{id: 1, value: "test1"}]' color='green' />
        <AppSelect placeholder='Усі міста' :options='[{id: 1, value: "test1"}]' color='green' />
      </div>
    </div>
    <div class='third-block'>
      <hr>
      <h1>Чому варто працювати само в нас</h1>
      <div class='images-block'>
        <img src='~assets/images/Other/Vacancies/photo1.png' alt=''>
        <img src='~assets/images/Other/Vacancies/photo2.png' alt=''>
        <img src='~assets/images/Other/Vacancies/photo3.png' alt=''>
        <img src='~assets/images/Other/Vacancies/photo4.png' alt=''>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import AppButton from '@/components/ui/AppButton.vue';
import AppSelect from '@/components/AppSelect.vue';

export default {
  name: 'Vacancies',
  components: { AppButton, AppSelect },
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
.vac-container {
  .first-block {
    border-radius: 11px;
    margin-top: 35px;
  }

  .second-block {
    margin: 20px 0;

    .up-part {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .down-part {
      display: flex;
      margin-top: 20px;

      div {
        margin-right: 10px;
      }

      div:last-child {
        margin: 0;
      }
    }
  }

  .third-block {
    text-align: center;

    h1 {
      font-size: 35px;
    }

    hr {
      border-top: 1px solid #D2D4E9;
    }

    .images-block {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      margin-bottom: 50px;

      img {
        margin-top: 16px;
      }
    }
  }
}
</style>
