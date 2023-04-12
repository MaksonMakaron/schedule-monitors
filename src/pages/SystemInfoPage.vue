<template>
  <div>
    <h1 class="heading">Информация о системе</h1>
    <block-content>
      <table-system-info :system-info="$store.state.systemInfo" class="system-info__table" />
      <h2 class="system-info__heading">Последние журналы просмотра</h2>
      <hr class="system-info__line" />
      <p class="system-info__null">Отсутствуют</p>
    </block-content>
  </div>
</template>

<script>
import BlockContent from '@/components/BlockContent.vue';
import TableSystemInfo from '@/components/TableSystemInfo.vue';

export default {
  components: {
    BlockContent,
    TableSystemInfo,
  },
};
</script>

<style scoped>
.system-info__table {
  margin-bottom: 40px;
}
.system-info__heading {
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #212529;
}

.system-info__line {
  border: none;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.system-info__null {
  padding: 20px 11px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #212529;
}
</style>
