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
            <span v-if='!changePersonalData'>{{ user.birth_day.split('T')[0] }}</span>
            <div v-else>
              <input
                id='start'
                class='input'
                type='date'
                name='trip-start'
                min='1970-01-01'
                :max='new Date().toISOString().split("T")[0]'
                :value='user.birth_day.split("T")[0]'
                @change='e => userNewData.birth_day = e.target.value + "T00:00:00"'
              >
            </div>
          </div>
          <div>
            <span>Пол</span>
            <span v-if='!changePersonalData'>{{ genderToString(user.gender) }}</span>
            <div v-else>
              <select class='input' @input='e => userNewData.gender = Number(e.target.value)'>
                <option
                  v-for='gender in gendersToSelect'
                  :key='gender.id'
                  :value='gender.id'
                  :selected='userNewData.gender === gender.id'
                >
                  {{ gender.value }}
                </option>
              </select>
            </div>
          </div>
          <div>
            <span>Язык общения с Ладной Хатой</span>
            <span v-if='!changePersonalData'>{{ user.preferred_language_id }}</span>
            <div v-else>
              <select class='input' @input='e => userNewData.preferred_language_id = "EN"'>
                <option
                  v-for='lang in langsToSelect'
                  :key='lang.id'
                  :value='lang.id'
                >
                  {{ lang.value }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div
          v-if='!changePersonalData' class='btn'>
          <ButtonProfile
            title='Редактировать'
            style-btn='green'
            @click='changePersonalData = true; userNewData = JSON.parse(JSON.stringify(user))' />
        </div>
        <div v-else>
          <ButtonProfile
            title='Сохранить'
            style-btn='green'
            @click='sendNewPersonalData' />
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
      gendersToSelect: [
        {
          id: 0,
          value: 'Не указано',
        },
        {
          id: 1,
          value: 'Муж',
        },
        {
          id: 2,
          value: 'Жен',
        },
      ],
      langsToSelect: [
        {
          id: 0,
          value: 'Украинский',
        },
        {
          id: 1,
          value: 'Русский',
        },
      ],
      changePersonalData: false,
      userNewData: null,
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
    this.userNewData = JSON.parse(JSON.stringify(this.user));
  },
  methods: {
    ...mapMutations({
      setHeaderLocate: 'setHeaderLocate',
    }),
    ...mapMutations('user', {
      setUser: 'setUser',
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
    async sendNewPersonalData() {
      if (JSON.stringify(this.user) === JSON.stringify(this.userNewData)) return;
      const userNewData = {
        ...this.user,
        ...this.userNewData,
      };
      const res = await this.$axios.$put('/UsersCabinet/update', userNewData);
      if (res.status === 'Success') {
        this.setUser(userNewData);
        this.changePersonalData = false;
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

.input {
  border: 2px solid $main-light-gray;
  border-radius: 7px;
  margin: 10px 0;
  padding: 10px 33px;
  resize: none;
}

.personal-data-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div {
    display: flex;
    justify-content: space-between;

    span {
      margin-bottom: 20px;
    }

    div {
      display: flex;
      flex-direction: column;

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
