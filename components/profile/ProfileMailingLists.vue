<template>
  <div>
    <h1>{{ $t('mailingLists') }}</h1>
    <hr>

    <div class='container'>
      <div class='select-container'>
        <h4>{{ $t('typesMailing') }}</h4>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input id='1' type='checkbox'>
            <label for='1'></label>
            <span>{{ $t('poll') }}</span>
          </div>
          <div class='select-text'>
            {{ $t('pollText') }}
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input id='2' type='checkbox'>
            <label for='2'></label>
            <span>{{ $t('newsLadnaHata') }}</span>
          </div>
          <div class='select-text'>
            {{ $t('newsLadnaHataText') }}
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input id='3' type='checkbox'>
            <label for='3'></label>
            <span>{{ $t('marketingOffers') }}</span>
          </div>
          <div class='select-text'>
            {{ $t('marketingOffersText') }}
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input id='4' type='checkbox'>
            <label for='4'></label>
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
            <input id='5' type='checkbox'>
            <label for='5'></label>
            <span>{{ $t('emailLists') }}</span>
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input id='6' type='checkbox'>
            <label for='6'></label>
            <span>{{ $t('messageInViber') }}</span>
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input id='7' type='checkbox'>
            <label for='7'></label>
            <span>{{ $t('messageSms') }}</span>
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input id='8' type='checkbox'>
            <label for='8'></label>
            <span>{{ $t('notificationsInMobileApp') }}</span>
          </div>
        </div>
        <div class='select-block'>
          <div class='select-checkbox'>
            <input id='9' type='checkbox'>
            <label for='9'></label>
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

    span {
      margin-left: 5px;
    }
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

input[type="checkbox"] + label {
  display: inline-block;
  width: 14px;
  height: 14px;
  border: 2px solid $lh-accent-green;
  border-radius: 5px;
  cursor: pointer;
}

input[type="checkbox"]:checked + label:after {
  position: relative;
  top: -2px;
  left: 2px;
  content: '\2714';
  color: $lh-accent-orange;
  font-size: 14px;
}

input[type="checkbox"] {
  display: none;
}
</style>
