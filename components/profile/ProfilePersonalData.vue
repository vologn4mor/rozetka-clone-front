<template>
  <div>
    <h1>{{ $t('personalData') }}</h1>
    <ProfileDropdown :label='$t("personalData")' :icon='personalData'>
      <div class='personal-data-container'>
        <div>
          <div>
            <span>{{ $t('lastName') }}</span>
            <span v-if='!changePersonalData'>{{ user.last_name }}</span>
            <AppInput
              v-else
              :value='user.last_name'
              @input='val => userNewData.last_name = val'
            />
          </div>
          <div>
            <span>{{ $t('name') }}</span>
            <span v-if='!changePersonalData'>{{ user.first_name }}</span>
            <AppInput
              v-else
              :value='user.first_name'
              @input='val => userNewData.first_name = val'
            />
          </div>
          <div>
            <span>{{ $t('middleName') }}</span>
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
            <span>{{ $t('birthDay') }}</span>
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
            <span>{{ $t('sex') }}</span>
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
            <span>{{ $t('langForSupport') }}</span>
            <span v-if='!changePersonalData'>{{ user.preferred_language_id }}</span>
            <div v-else>
              <select class='input' @input='e => userNewData.preferred_language_id = e.target.value'>
                <option
                  v-for='lang in langsToSelect'
                  :key='lang.id'
                  :value='lang.id'
                  :selected='userNewData.preferred_language_id === lang.id'
                >
                  {{ lang.name }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <div
          v-if='!changePersonalData' class='btn'>
          <ButtonProfile
            :title='$t("edit")'
            style-btn='green'
            @click='changePersonalData = true; userNewData = JSON.parse(JSON.stringify(user))' />
        </div>
        <div v-else style='margin-top: 6px'>
          <ButtonProfile
            :title='$t("save")'
            style-btn='green'
            @click='sendNewPersonalData' />
          <ButtonProfile
            :title='$t("cancel")'
            style-btn='orange'
            @click='changePersonalData = false' />
        </div>
      </div>
    </ProfileDropdown>
    <ProfileDropdown :label='$t("myRecipients")' :icon='myOrderRecipients'>
      <div class='my-recipients-container'>
        <div v-if='!changeMyRecipients' class='main'>
          <img src='~assets/images/icons/profile/recipients-add-icon.svg' alt=''>
          <span>{{ $t('addRecipient') }}</span>
        </div>
        <div v-else>

        </div>
        <div class='btn-container'>
          <div
            v-if='!changeMyRecipients' class='btn'>
            <ButtonProfile
              :title='$t("edit")'
              style-btn='green'
              @click='changeMyRecipients = true; userNewData = JSON.parse(JSON.stringify(user))' />
          </div>
          <div v-else style='margin-top: 6px'>
            <ButtonProfile
              :title='$t("save")'
              style-btn='green'
              @click='sendNewMyRecipients' />
            <ButtonProfile
              :title='$t("cancel")'
              style-btn='orange'
              @click='changeMyRecipients = false' />
          </div>
        </div>
      </div>
    </ProfileDropdown>
    <ProfileDropdown :label='$t("contacts")' :icon='contacts'>
    </ProfileDropdown>
    <ProfileDropdown :label='$t("deliveryAddress")' :icon='deliveryAddress'>
    </ProfileDropdown>
    <ProfileDropdown :label='$t("login")' :icon='login'>
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
      changeMyRecipients: false,
    };
  },
  async fetch() {
    const langs = await this.$axios.$get('/Reference/languages');
    this.langsToSelect = langs;
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
    async sendNewMyRecipients() {

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
      max-width: 303px;

      width: 100%;

      //div {
      //  max-width: 303px;
      //}

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

.my-recipients-container {


  .btn-container {
    div {
      display: flex;
      justify-content: space-between;
    }
  }

  .main {
    display: flex;
    align-items: center;
    margin-bottom: 20px;

    img {
      margin-right: 5px;
    }
  }
}
</style>
