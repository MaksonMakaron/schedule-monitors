<template>
  <block-content class="dialog" v-if="show">
    <img src="../assets/img/done.gif" />
    <p class="dialog__text">Настройки сохранены</p>
  </block-content>
</template>

<script>
import BlockContent from './BlockContent.vue';

export default {
  components: {
    BlockContent,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.dialog {
  display: flex;
  top: 10px;
  right: 10px;
  width: 300px;
  height: 100px;
  background-color: rgba(255, 255, 255, 1);
  position: fixed;
  animation: fideIn 3s ease-in forwards;
  z-index: 12;
}

.dialog__text {
  align-self: center;
}

@keyframes fideIn {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
