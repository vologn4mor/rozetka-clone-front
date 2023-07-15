<template>
  <div class='container'>
    <div v-if='$fetchState.pending' class='loading-container'>
      <img src='~/assets/images/loader.gif' alt=''>

    </div>
    <p v-else-if='$fetchState.error'>An error occurred :(</p>
    <div v-else>
      <h1>Ролі користувачів</h1>
      <div class='header'>
        <div></div>
        <div>
          <AdminButton type='plus' @click='isAddUserRole = true' />
          <AdminButton type='refresh' @click='$fetch()' />
          <AdminButton type='delete' />
        </div>
      </div>
      <AdminTable :data='items' :header='header' />
      <AdminModalCard v-if='isAddUserRole' width='1013px' @close='isAddUserRole = false'>
        <div class='add-user-modal'>
          <div class='input'>
            <span>Група користувачів</span>
            <AdminInput width='990' :value='addNewRole.name' @input='val => addNewRole.name = val' />
          </div>
          <div class='permission-list'>
            <span>Оберіть дозволене</span>
            <table>
              <tr>
                <td></td>
                <td><span>Дозволено перегляд</span></td>
                <td><span>Дозволено редагувати</span></td>
              </tr>
              <tr v-for='item in addNewRole.permissions' :key='item.id'>
                <td><span>{{ item.name }}</span></td>
                <td>
                  <AppCheckbox :checked='item.read_allowed' @change='val => item.read_allowed = val' />
                </td>
                <td>
                  <AppCheckbox :checked='item.write_allowed' @change='val => item.write_allowed = val' />
                </td>
              </tr>
            </table>
          </div>
          <div class='permission-select-all'>
            <div>
            </div>
            <div>
              <AppCheckbox label='Виділити все' :checked='isSelectAll' @change='val => changeSelectAll(val)' />
              <AppCheckbox label='Зняти всі виділення' :checked='isClearAll' @change='val => changeClearAll(val)' />
            </div>
          </div>
          <div class='button'>
            <div></div>
            <AdminGreenBtn text='Зберегти' @click='sendNewRole' />
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
import AppCheckbox from '@/components/ui/AppCheckbox.vue';

export default {
  name: 'UsersRoles',
  components: { AppCheckbox, AdminGreenBtn, AdminInput, AdminModalCard, AdminTable, AdminButton },
  layout: 'adminLayout',
  data() {
    return {
      items: null,
      header: [
        'Група користувачів',
        'Дата додавання',
        'Статус',
      ],
      isAddUserRole: false,
      addNewRole: {
        name: '',
        permissions: null,
      },
      isSelectAll: false,
      isClearAll: false,
    };
  },
  async fetch() {
    const res = await this.$axios.$get('/Groups/groups');
    this.items = res.map(item => {
      return {
        id: item.id,
        isSelected: false,
        name: item.name,
        creation_date: item.creation_date,
        state: item.state,
      };
    });
    const permissions = await this.$axios.$get('/Groups/permissions');
    this.addNewRole.permissions = permissions.map(item => {
      return {
        ...item,
        read_allowed: false,
        write_allowed: false,
      };
    });
  },
  fetchOnServer: false,
  methods: {
    changeSelectAll(value) {
      if (!value) return;
      this.addNewRole.permissions = this.addNewRole.permissions.map(item => {
        return {
          ...item,
          read_allowed: true,
          write_allowed: true,
        };
      });
    },
    changeClearAll(value) {
      if (!value) return;
      this.addNewRole.permissions = this.addNewRole.permissions.map(item => {
        return {
          ...item,
          read_allowed: false,
          write_allowed: false,
        };
      });
    },
    sendNewRole() {
      if (!this.addNewRole.name) return this.$toast.error('Введіть назву групи');

      try {
        const res = this.$axios.$post('/Groups/create', this.addNewRole);
        if (res) {
          this.isAddUserRole = false;
          this.$toast.success('Успішно створено');
          this.changeClearAll(true);
          this.addNewRole.name = '';
        }
      } catch (e) {
        this.$toast.error(e.message);
      }
    },
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

  .input {
    display: flex;
    white-space: nowrap;
    align-items: center;

    span {
      margin-right: 20px;
    }
  }

  .permission-select-all {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;


      div:last-child {
        margin-left: 100px;
        margin-right: 50px;
      }
    }
  }

  div {
    margin: 10px 0;
  }

  .input {
    width: 100%;
  }

  .permission-list {
    display: flex;
    justify-content: space-between;

    table {
      max-width: 750px;
      width: 100%;
      border-collapse: collapse;


      * {
        padding: 0;
        margin: 0
      }

      //display: flex;
      //flex-direction: column;

      td {
        border-right: 1px solid black;
        //display: flex;
        //flex-direction: column;
        text-align: center;
        justify-content: center;

        div {
          display: flex;
          justify-content: center;
        }
      }
    }
  }

  .button {
    display: flex;
    justify-content: space-between;
  }
}

</style>
