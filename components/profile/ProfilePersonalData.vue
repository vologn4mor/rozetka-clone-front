<template>
  <div>
    <h1>{{ $t('personalData') }}</h1>
    <ProfileDropdown :label='$t("personalData")' :icon='personalData'>
      <div class='personal-data-container'>
        <div>
          <div>
            <span>Фамилия</span>
            <span v-if='!changePersonalData'>{{ user.last_name }}</span>
            <AppInput
              v-else
              :value='user.last_name'
              @input='val => userNewData.last_name = val'
            />
          </div>
          <div>
            <span>Имя</span>
            <span v-if='!changePersonalData'>{{ user.first_name }}</span>
            <AppInput
              v-else
              :value='user.first_name'
              @input='val => userNewData.first_name = val'
            />
          </div>
          <div>
            <span>Отчество</span>
            <span v-if='!changePersonalData'>{{ user.middle_name }}</span>
            <AppInput
              v-else
              :value='user.middle_name'
              @input='val => userNewData.middle_name = val'
            />
          </div>
        </div>
        <div>
          <div>
            <span>Дата рождения</span>
            <span v-if='!changePersonalData'>{{ user.birth_day }}</span>
            <AppInput
              v-else
              :value='user.birth_day'
              @input='val => userNewData.birth_day = val'
            />
          </div>
          <div>
            <span>Пол</span>
            <span v-if='!changePersonalData'>{{ genderToString(user.gender) }}</span>
          </div>
          <div>
            <span>Язык общения с Ладной Хатой</span>
            <span v-if='!changePersonalData'>{{ user.preferred_language_id }}</span>
          </div>
        </div>
        <div
          v-if='!changePersonalData' class='btn'>
          <ButtonProfile
            title='Редактировать'
            style-btn='green'
            @click='changePersonalData = true; userNewData = user' />
        </div>
        <div v-else>
          <ButtonProfile
            title='Сохранить'
            style-btn='green'
            @click='changePersonalData = false' />
          <ButtonProfile
            title='Отменить'
            style-btn='orange'
            @click='changePersonalData = false' />
        </div>
      </div>
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
import { mapGetters, mapMutations } from 'vuex';
import ProfileDropdown from '@/components/ui/Profile/ProfileDropdown.vue';
import personalData from '~/assets/images/icons/profile/personalData/personal-data.svg';
import myOrderRecipients from '~/assets/images/icons/profile/personalData/my-order-recipients.svg';
import contacts from '~/assets/images/icons/profile/personalData/contacts.svg';
import deliveryAddress from '~/assets/images/icons/profile/personalData/delivery-address.svg';
import login from '~/assets/images/icons/profile/personalData/login.svg';
import ButtonProfile from '@/components/ui/Profile/ButtonProfile.vue';
import AppInput from '@/components/ui/AppInput.vue';

export default {
  name: 'ProfilePersonalData',
  components: { AppInput, ButtonProfile, ProfileDropdown },
  data() {
    return {
      personalData,
      myOrderRecipients,
      contacts,
      deliveryAddress,
      login,
      changePersonalData: false,
      userNewData: {
        first_name: null,
        last_name: null,
        middle_name: null,
        birth_day: null,
        gender: null,
        preferred_language_id: null,
      },
    };
  },
  computed: {
    ...mapGetters('user', {
      user: 'user',
    }),
  },
  beforeMount() {
    this.setHeaderLocate([{ name: 'personalData' }]);
  },
  mounted() {
    this.userNewData = { ...this.user };
  },
  methods: {
    ...mapMutations({
      setHeaderLocate: 'setHeaderLocate',
    }),
    genderToString(val) {
      switch (val) {
        case 0: {
          return 'Не указано';
        }
        case 1: {
          return 'Муж';
        }
        case 2: {
          return 'Жен';
        }
        default: {
          return 'Не указано';
        }
      }
    },
  },

};
</script>

<style scoped lang='scss'>
h1 {
  font-size: 31px;
  margin: 0 0 10px 0;
}

.personal-data-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      width: 100%;

      div {
        max-width: 250px;
      }

      span:first-child {
        color: $lh-accent-green;
        margin-bottom: 10px;
      }
    }
  }
}

.btn {
  max-width: 138px;
}
</style>
