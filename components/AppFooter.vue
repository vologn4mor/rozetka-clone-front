<template>
  <div class='footer'>
    <div class='footer-container'>
      <div class='footer-container-left'>
        <img src='~/assets/images/logo-footer.svg' alt=''>
        <img src='~/assets/images/HomePage/qr_code.png' alt='qrCode'>
      </div>
      <div class='footer-container-main'>
        <div class='footer-container-main-up'>
          <div>
            <span>{{ $t('aboutOurCompany') }}</span>
            <span><nuxt-link :to='localePath("/other/about")'>{{ $t('aboutUs') }}</nuxt-link></span>
            <span><nuxt-link :to='localePath("/other/usage-rules")'>{{ $t('termsOfUseTheSite') }}</nuxt-link></span>
            <span><nuxt-link :to='localePath("/other/vacancies")'>{{ $t('vacancies') }}</nuxt-link></span>
            <span>{{ $t('contacts') }}</span>
          </div>
          <div>
            <span>{{ $t('services') }}</span>
            <span><nuxt-link :to='localePath("/other/bonus-acc")'>{{ $t('bonusAccount') }}</nuxt-link></span>
            <span><nuxt-link :to='localePath("/other/premium")'>{{ $t('logoPremium') }}</nuxt-link></span>
            <span><nuxt-link :to='localePath("/other/gift-certificates")'>{{ $t('giftCertificates') }}</nuxt-link></span>
            <span>{{ $t('logoExchange') }}</span>
          </div>
          <div>
            <span>{{ $t('help') }}</span>
            <span>{{ $t('deliveryAndPayment') }}</span>
            <span>{{ $t('credit') }}</span>
            <span>{{ $t('guarantee') }}</span>
            <span>{{ $t('productReturn') }}</span>
            <span>{{ $t('serviceCenters') }}</span>
          </div>
          <div>
            <span>{{ $t('toPartners') }}</span>
            <span>{{ $t('sellOnLogo') }}</span>
            <span><nuxt-link :to='localePath("/other/cooperate")'>{{ $t('cooperationWithUs') }}</nuxt-link></span>
            <span>{{ $t('rentOfPremises') }}</span>
            <span><nuxt-link :to='localePath("/other/franchise")'>{{ $t('franchising') }}</nuxt-link></span>
          </div>
        </div>
        <div class='footer-container-main-down'>
          <span>{{ $t('tmUsage') }}</span>
          <span>{{ $t('copyright') }}</span>
        </div>
      </div>
      <div class='footer-container-right'>
        <AppCard>
          <span>{{ $t('weAreInSocialNetworks') }}</span>
          <div>
            <img src='~assets/images/icons/footer/facebook.svg' alt='telegram'>
            <img src='~assets/images/icons/footer/twitter.svg' alt='twitter'>
            <img src='~assets/images/icons/footer/youtube.svg' alt='youtube'>
            <img src='~assets/images/icons/footer/instagram.svg' alt='instagram'>
            <img src='~assets/images/icons/footer/telegram.svg' alt='telegram'>
          </div>
        </AppCard>
        <AppCard>
          <span>{{ $t('ourApplications') }}</span>
          <div>
            <img src='~assets/images/icons/footer/google-play.svg' alt='google'>
            <img src='~assets/images/icons/footer/appstore.svg' alt='appstore'>
          </div>
        </AppCard>
        <AppCard>
          <div>
            <img src='~assets/images/icons/footer/mastercard-logo.png' alt='google'>
            <img src='~assets/images/icons/footer/visa-logo.png' alt='appstore'>
          </div>
        </AppCard>
      </div>
    </div>
  </div>
</template>

<script>
import AppCard from '@/components/ui/AppCard.vue';

export default {
  name: 'AppFooter',
  components: { AppCard },
};
</script>

<style scoped lang='scss'>
.footer {
  background-color: $lh-dark;
  width: 100%;
  color: $main-light-gray;
  padding: 38px 0;
}

.footer-container {
  max-width: 1435px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  .footer-container-left {
    display: flex;
    flex-direction: column;

    span {
      font-family: KyivTypeSans;
      font-weight: 700;
      font-size: 32px;
      margin: 14px 0 28px 0;
    }

    img:first-child {
      margin-bottom: 20px;
    }

    img {
      border-radius: 12px;
    }
  }

  .footer-container-main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 900px;
    width: 100%;

    .footer-container-main-up {
      display: flex;
      justify-content: space-between;

      div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span:first-child {
          color: $lh-accent-green;
        }

        span, a {
          margin-bottom: 10px;
          color: $lh-white;
        }
      }
    }

    .footer-container-main-down {
      font-size: 12px;
      display: flex;
      width: 100%;
      justify-content: space-between;
      color: $lh-white;
    }
  }

  .footer-container-right {
    color: $main-dark-gray;

    div {
      margin-bottom: 10px;

      div {


        div {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
        }
      }
    }


  }
}
</style>
