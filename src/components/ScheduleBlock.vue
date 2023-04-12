<template>
  <div>
    <h2 class="schedule__name">{{ $store.state.settings.playerName }}</h2>
    <block-content class="schedule__video__block">
      <h3 class="schedule__heading__active">Активные</h3>
      <table-schedule :move-enabled="true" :formated-date="$store.state.settings.dateFormat" :use-twenty-four-time-format="$store.state.settings.useTwentyFourFormat" :videos="$store.getters.getActiveVideos" type-table="dark" />
    </block-content>
    <block-content>
      <h3 class="schedule__heading__disabled">Не активные</h3>
      <table-schedule :formated-date="$store.state.settings.dateFormat" :use-twenty-four-time-format="$store.state.settings.useTwentyFourFormat" :videos="$store.getters.getDisabledVideos" type-table="light" />
    </block-content>
  </div>
</template>

<script>
import BlockContent from '@/components/BlockContent.vue';
import TableSchedule from '@/components/TableSchedule.vue';

export default {
  components: {
    TableSchedule,
    BlockContent,
  },
};
</script>

<style scoped>
.schedule__name {
  margin-bottom: 23px;
  font-weight: 400;
  font-size: 23px;
  line-height: 29px;
  color: #ffffff;
}

.schedule__video__block {
  background: #492955;
}

.schedule__heading__active {
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}

.schedule__heading__disabled {
  margin-bottom: 15px;
  font-weight: 700;
  font-size: 19px;
  line-height: 24px;
  color: #212529;
}
</style>
