<template>
  <div>
    <h1>{{ $t('mailingLists') }}</h1>
    <hr>

    <div class='container'>
      <div class='select-container'>
        <h4>{{ $t('typesMailing') }}</h4>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>{{ $t('poll') }}</span>
          </div>
          <div class='select-text'>
            {{ $t('pollText') }}
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>{{ $t('newsLadnaHata') }}</span>
          </div>
          <div class='select-text'>
            {{ $t('newsLadnaHataText') }}
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>{{ $t('marketingOffers') }}</span>
          </div>
          <div class='select-text'>
            {{ $t('marketingOffersText') }}
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>{{ $t('RecommendationsCustomersExperience') }}</span>
          </div>
          <div class='select-text'>
            {{ $t('RecommendationsCustomersExperienceText') }}
          </div>
        </div>
      </div>
      <div class='select-container'>
        <h4>{{ $t('communicationChannels') }}</h4>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>{{ $t('emailLists') }}</span>
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>{{ $t('messageInViber') }}</span>
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>{{ $t('messageSms') }}</span>
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>{{ $t('notificationsInMobileApp') }}</span>
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input type='checkbox'>
            <span>{{ $t('notificationsInWebApp') }}</span>
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
