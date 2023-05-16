<template>
  <div>
    <h1>Рассылки</h1>
    <hr>

    <div class='container'>
      <div class='select-container'>
        <h4>Види розсилок</h4>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>Опитуванния</span>
          </div>
          <div class='select-text'>Отримуйте запрошення для участі в опитуваннях, консультаціях і тестуванні
            інструментів.
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>Новини Ладна Хата</span>
          </div>
          <div class='select-text'>
            Новини компанії та пропозиції співпраці.
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>Маркетингові пропозиції</span>
          </div>
          <div class='select-text'>
            Періодично ми проводимо маркетингові активності та акції зі знижками, розіграшами,
            промокодами та іншими інструментами, що можуть допомогти вам заощадити на покупці, підібрати подарунок собі
            чи рідним.
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>Рекомендації засновані на клієнтському досвіді</span>
          </div>
          <div class='select-text'>
            Наші алгоритми вивчають поведінку клієнтів. Ґрунтуючись на цій інформації, ми формуємо персональні,
            своєчасні та вигідні пропозиції для підписника.
          </div>
        </div>
      </div>
      <div class='select-container'>
        <h4>Канали зв’язку</h4>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>Email-листи</span>
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>Повідомлення у Viber</span>
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>SMS-повідомлення</span>
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>Сповіщення у мобільному додатку</span>
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>Сповіщення у веб-браузері</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'ProfileMailingLists',
  beforeMount() {
    this.setHeaderLocate([{ name: 'mailingLists' }]);
  },
  methods: {
    ...mapMutations({
      setHeaderLocate: 'setHeaderLocate',
    }),
  },
};
</script>

<style scoped lang='scss'>

h1 {
  font-size: 31px;
  margin: 0;
}

h4 {
  color: $main-gray;
  margin: 0;
  font-size: 20px;
}

.container {
  display: flex;
}

.select-container {
  display: flex;
  flex-direction: column;
  margin-right: 130px;

  .select-block {
    max-width: 484px;
    margin-top: 24px;
  }

  .select-checkbox {
    display: flex;
    align-items: center;

    input {
      margin-right: 5px;
    }
  }

  .select-text {
    margin-top: 7px;
    color: $main-gray;
  }
}
</style>
