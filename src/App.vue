<template>
  <base-header class="container" />
  <router-view class="container" />
  <base-footer class="container" />
</template>

<script>
import BaseHeader from '@/components/BaseHeader.vue';
import BaseFooter from '@/components/BaseFooter.vue';

export default {
  components: {
    BaseHeader,
    BaseFooter,
  },
};
</script>

<style>
@import url('./assets/fonts/opensans.css');

* {
  font-family: 'Open Sans', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #280034;
}

.container {
  width: 1200px;
  margin: 0 auto;
}

.heading {
  margin-bottom: 17px;
  font-weight: 700;
  font-size: 23px;
  line-height: 29px;
  color: #ffffff;
}
</style>
