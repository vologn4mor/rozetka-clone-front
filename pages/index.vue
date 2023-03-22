<template>
  <div>
    <h1 style='text-align: center'>{{ hello }}</h1>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      hello: 'Hello, world!',
    };
  },
};
</script>
