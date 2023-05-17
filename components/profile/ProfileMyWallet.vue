<template>
  <div>
    <h1>{{ $t('myWallet') }}</h1>
    <div class='card first-block'>
      <span>{{ $t('verifyYourPhoneNumber') }}</span>
      <ButtonProfile :title='$t("confirmPhoneNumber")' style-btn='gray' />
    </div>
    <div class='cards-block'>
      <div class='card add-card'>
        <ButtonProfile :title='$t("addCard")' style-btn='gray' />
      </div>
      <div class='cards-container'>
        <div class='card-info-block'>
          <div class='card-header'>
            <div class='menu'>
              <span>⋮</span>
            </div>
            <div class='name-and-number'>
              <span>Ім’я Прізвище</span>
              <span>1234 1234 1234 1234</span>
            </div>
          </div>
          <div class='card-footer'>
            <div>
              <span>ММ/ГГ</span>
              <span>00/00</span>
            </div>
            <div>
              <span>CVV</span>
              <span>000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ButtonProfile from '@/components/ui/Profile/ButtonProfile.vue';

export default {
  name: 'ProfileMyWallet',
  components: { ButtonProfile },
  beforeMount() {
    this.setHeaderLocate([{ name: 'myWallet' }]);
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
  margin: 0 0 20px 0;
}

.card {
  border-radius: 11px;
  background-color: $main-light-gray;
}

.first-block {
  padding: 28.5px 34.5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cards-block {
  margin-top: 20px;
  display: flex;

  .add-card {
    max-width: 311px;
    min-height: 200px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.cards-container {
  margin-left: 20px;
  max-width: 311px;
  height: 200px;
  width: 100%;

  .card-info-block {

    .card-header {
      background-color: $main-light-gray;
      padding: 14px 19px;
      border-radius: 11px 11px 0 0;

      .menu {
        display: flex;
        justify-content: end;

        span {
          font-size: 20px;
          font-weight: bold;
        }
      }

      .name-and-number {
        display: flex;
        flex-direction: column;

        span:first-child {
          color: $main-gray;
        }

        span:last-child {
          color: $main-dark-gray;
          font-weight: bold;
          font-size: 19px;
          margin: 20px 0;
        }
      }
    }

    .card-footer {
      display: flex;
      justify-content: space-between;
      background-color: $main-dark-gray;
      padding: 14px 19px;
      border-radius: 0 0 11px 11px;


      div {
        display: flex;
        flex-direction: column;

        span:first-child {
          color: $main-light-gray;
          margin-bottom: 5px;
        }

        span:last-child {
          color: #fff
        }
      }
    }
  }
}
</style>
