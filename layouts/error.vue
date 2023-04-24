<template>
  <div class='container'>
    <h1 v-if='error.statusCode === 404'>
      {{ error.message ? error.message : 'Page not found' }}
    </h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to='/'>Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
};
</script>

<style scoped lang='scss'>
.container {
  min-height: 600px;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
