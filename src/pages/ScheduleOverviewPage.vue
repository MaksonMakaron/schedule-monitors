<template>
  <div class="schedule">
    <div class="schedule__header">
      <h1 class="heading">Расписание</h1>
      <div class="schedule__header__btns">
        <base-button text="Назад" type-btn="secondary" icon="arrow-left.svg" position-icon="left" />
        <base-button text="Далее" type-btn="secondary" icon="arrow-right.svg" position-icon="right" />
        <base-button text="Добавить" type-btn="gold" />
      </div>
    </div>
    <schedule-block />
  </div>
</template>

<script>
import ScheduleBlock from '@/components/ScheduleBlock.vue';

export default {
  components: {
    ScheduleBlock,
  },
  computed: {},
};
</script>

<style scoped>
.schedule__header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.schedule__header__btns {
  display: flex;
}
</style>
