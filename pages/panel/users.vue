<template>
  <div class='container'>
    <div v-if='$fetchState.pending' class='loading-container'>
      <img src='~/assets/images/loader.gif' alt=''>

    </div>
    <p v-else-if='$fetchState.error'>An error occurred :(</p>
    <div v-else>
      <h1>Користувачі</h1>
      <div class='header'>
        <div></div>
        <div>
          <AdminButton type='plus' @click='isAddUser = true' />
          <AdminButton type='refresh' @click='$fetch()' />
          <AdminButton type='delete' />
        </div>
      </div>
      <AdminTable :data='items' :header='header' />
      <AdminModalCard v-if='isAddUser' width='1013px' @close='isAddUser = false'>
        <div class='add-user-modal'>
          <div class='input'>
            <span>ПІБ користувача</span>
            <AdminInput width='990' />
          </div>
          <div class='input'>
            <span>Роль користувача</span>
            <AdminInput width='990' />
          </div>
          <div class='input select'>
            <span>Статус користувача</span>
            <AppSelect
              :options='[
                {id: 1, value:"admin"},
                {id: 2, value:"manager"},
                {id: 3, value:"user"},
              ]' />
          </div>
          <div class='button'>
            <div></div>
            <AdminGreenBtn text='Зберегти' />
          </div>
        </div>
      </AdminModalCard>
    </div>

  </div>
</template>

<script>
import AdminButton from '@/components/panel/AdminButton.vue';
import AdminTable from '@/components/panel/AdminTable.vue';
import AdminModalCard from '@/components/panel/AdminModalCard.vue';
import AdminInput from '@/components/panel/AdminInput.vue';
import AdminGreenBtn from '@/components/panel/AdminGreenBtn.vue';

export default {
  name: 'Users',
  components: { AdminGreenBtn, AdminInput, AdminModalCard, AdminTable, AdminButton },
  layout: 'adminLayout',
  data() {
    return {
      items: null,
      header: [
        'Прізвище, ім’я та по батькові',
        'Група користувачів',
        'Дата додавання',
        'Статус',
      ],
      isAddUser: false,
    };
  },
  async fetch() {
    const res = await this.$axios.$get('/UsersAdmin/get-users');
    this.items = res.map(item => {
      return {
        id: item.id,
        isSelected: false,
        fio: `${item.last_name} ${item.first_name} ${item.middle_name}`,
        group: item.group,
        birth_day: item.birth_date,
        status: 'Активный',
      };
    });
  },
};
</script>

<style scoped lang='scss'>

.container {
  max-width: 1133px;
}

.loading-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  div {
    display: flex;

    div {
      margin-left: 20px;
    }
  }
}

.add-user-modal {

  div {
    margin: 10px 0;
  }

  .input {
    width: 100%;
  }

  .button {
    display: flex;
    justify-content: space-between;
  }
}

</style>
