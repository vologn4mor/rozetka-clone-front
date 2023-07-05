<template>
  <div>
    <div class='dashboard-container'>
      <AdminDashboardItem
        link='/'
        :icon='sales'
        :number='res.orders_total'
        :percent='res.orders_procent'
        header-label='Всього замовлень'
      />
      <AdminDashboardItem
        link='/'
        :icon='discount'
        :number='res.action_articles'
        :percent='res.actions_procent'
        header-label='Всього акційних товарів'
      />
      <AdminDashboardItem
        link='/'
        :icon='card'
        :number='res.total_sells'
        :percent='res.sells_procent'
        header-label='Всього продажів'
      />
      <AdminDashboardItem
        link='/'
        :icon='buyers'
        :number='res.total_byers'
        :percent='res.byers_procent'
        header-label='Всього покупців'
      />
      <AdminDashboardItem
        link='/'
        :icon='userOnline'
        :number='res.buyers_online'
        :percent='res.online_procent'
        header-label='Покупці онлайн'
      />
      <AdminDashboardItem
        link='/'
        :icon='registration'
        :number='res.new_registrations'
        :percent='res.registrations_procent'
        header-label='Реєстрація покупців'
      />
    </div>
  </div>
</template>

<script>
import AdminDashboardItem from '@/components/panel/AdminDashboardItem.vue';
import buyers from '@/assets/images/icons/AdminLayout/Panel/dashboard/buyers.svg';
import card from '@/assets/images/icons/AdminLayout/Panel/dashboard/card.svg';
import discount from '@/assets/images/icons/AdminLayout/Panel/dashboard/discount.svg';
import registration from '@/assets/images/icons/AdminLayout/Panel/dashboard/registration.svg';
import sales from '@/assets/images/icons/AdminLayout/Panel/dashboard/sales.svg';
import userOnline from '@/assets/images/icons/AdminLayout/Panel/dashboard/user_online.svg';

export default {
  name: 'Dashboard',
  components: { AdminDashboardItem },
  layout: 'adminLayout',
  async asyncData(ctx) {
    const res = await ctx.$axios.$get('/Orders/dashboard');
    return {
      res,
    };
  },
  data() {
    return {
      buyers,
      card,
      discount,
      registration,
      sales,
      userOnline,
    };
  },
};
</script>

<style scoped lang='scss'>
.dashboard-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1073px;
  margin-left: 40px;

  div {
    margin-top: 30px;
  }
}
</style>
