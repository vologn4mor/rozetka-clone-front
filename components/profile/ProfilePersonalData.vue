<template>
  <div>
    <h1>{{ $t('personalData') }}</h1>
    <ProfileDropdown label='Особисті дані' :icon='personalData'>
    </ProfileDropdown>
    <ProfileDropdown label='Мої отримувачі замовлень' :icon='myOrderRecipients'>
    </ProfileDropdown>
    <ProfileDropdown label='Контакти' :icon='contacts'>
    </ProfileDropdown>
    <ProfileDropdown label='Адреса доставки' :icon='deliveryAddress'>
    </ProfileDropdown>
    <ProfileDropdown label='Логін' :icon='login'>
    </ProfileDropdown>

  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import ProfileDropdown from '@/components/ui/Profile/ProfileDropdown.vue';
import personalData from '~/assets/images/icons/profile/personalData/personal-data.svg';
import myOrderRecipients from '~/assets/images/icons/profile/personalData/my-order-recipients.svg';
import contacts from '~/assets/images/icons/profile/personalData/contacts.svg';
import deliveryAddress from '~/assets/images/icons/profile/personalData/delivery-address.svg';
import login from '~/assets/images/icons/profile/personalData/login.svg';

export default {
  name: 'ProfilePersonalData',
  components: { ProfileDropdown },
  data() {
    return {
      personalData,
      myOrderRecipients,
      contacts,
      deliveryAddress,
      login,
    };
  },
  beforeMount() {
    this.setHeaderLocate([{ name: 'personalData' }]);
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
  margin: 0 0 10px 0;
}
</style>
