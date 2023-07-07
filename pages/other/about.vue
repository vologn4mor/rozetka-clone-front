<template>
  <div>
    <h1>{{ $t('aboutUs') }}</h1>
    <div class='first-block'>
      <div class='left-block'>
        <h3>
          {{ $t('other').about.firstH3 }}
        </h3>
        <span>
          {{ $t('other').about.firstSpan1 }}
        </span>
        <span>
          {{ $t('other').about.firstSpan2 }}
        </span>
      </div>
      <div class='right-block'>
        <img src='~assets/images/Other/About/photo1.png' alt=''>
      </div>
    </div>
    <div class='second-block'>
      <div class='left-block'>
        <img src='~assets/images/Other/About/photo2.png' alt=''>
      </div>
      <div class='right-block'>
        <h3>
          {{ $t('other').about.secondH3 }}
        </h3>
        <span>
          {{ $t('other').about.secondSpan1 }}
        </span>
        <span>
          {{ $t('other').about.secondSpan2 }}
        </span>
      </div>
    </div>
    <div class='third-block-container' :style='`background:url(${bgGreen}), #078071`'>
      <div class='third-block'>
        <div class='left-block'>
          <h3>
            {{ $t('other').about.thirdH3 }}
          </h3>
          <span>
          {{ $t('other').about.thirdSpan1 }}
        </span>
          <span>
          {{ $t('other').about.thirdSpan2 }}
        </span>
        </div>
        <div class='right-block'>
          <img src='~assets/images/Other/About/photo3.png' alt=''>
        </div>
      </div>
    </div>
    <div class='fourth-block'>
      <div class='left-block'>
        <img src='~assets/images/Other/About/photo4.png' alt=''>
      </div>
      <div class='right-block'>
        <h3>
          {{ $t('other').about.fourthH3 }}
        </h3>
        <span>
          {{ $t('other').about.fourthSpan1 }}
        </span>
        <span>
          {{ $t('other').about.fourthSpan2 }}
        </span>
      </div>
    </div>
    <div class='fifth-block'>
      <h3>{{ $t('other').about.fifthH3 }}</h3>
      <span>{{ $t('other').about.fifthSpan1 }}</span>
      <span>
        {{ $t('other').about.fifthSpan2 }}
      </span>
    </div>

    <style>
      .main-container {
        max-width: none;
      }
    </style>
  </div>


</template>

<script>
import { mapMutations } from 'vuex';
import bgGreen from '@/assets/images/Other/About/bg-green.png';

export default {
  name: 'About',
  data() {
    return {
      bgGreen,
    };
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
h1 {
  font-size: 90px;
  text-align: center;
  font-weight: 900;
  font-family: Mariupol-Bold, serif;
}

h3 {
  font-size: 35px;
  margin-bottom: 10px;
}

span {
  font-size: 18px;
}

.first-block, .second-block, .third-block, .fourth-block, .fifth-block {
  max-width: 1435px;
  margin: 0 auto;
}

.first-block {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-block {
    display: flex;
    flex-direction: column;
    max-width: 634px;
    margin-bottom: 100px;

    span {
      margin: 10px 0;

    }
  }
}

.second-block, .fourth-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 75px;

  .right-block {
    display: flex;
    flex-direction: column;
    max-width: 605px;

    span {
      margin: 10px 0;
      font-size: 18px;
    }
  }
}

.fourth-block {
  .right-block {
    margin-bottom: 140px;
  }
}

.second-block {
  .right-block {
    h3 {
      margin-top: 0;
    }
  }
}

.third-block {
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 296px;
  margin: 150px auto;

  .left-block {
    display: flex;
    flex-direction: column;
    max-width: 650px;

    span {
      margin: 10px 0;
      font-size: 18px;
    }

    h3 {
      margin-top: 0;
    }


  }
}

.fifth-block {
  text-align: center;
  max-width: 605px;
  display: flex;
  flex-direction: column;
  margin-bottom: 135px;

  h3 {
    color: $lh-accent-green
  }

  span {
    margin: 10px 0
  }
}
</style>
