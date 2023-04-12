<template>
  <table class="table">
    <tr>
      <th :class="getClassHeadingCell" class="cell-heading">Наименование</th>
      <th :class="getClassHeadingCell" class="cell-heading">Начало</th>
      <th :class="getClassHeadingCell" class="cell-heading">Окончание</th>
      <th :class="getClassHeadingCell" class="cell-heading">Длительность</th>
      <th :class="getClassHeadingCell" class="cell-heading">Статус</th>
      <th :class="getClassHeadingCell" class="cell-heading"></th>
    </tr>
    <h3 class="not-data" v-if="videos.length === 0">Отсутсвуют видеофайлы</h3>
    <draggable v-else v-model="media" :disabled="!moveEnabled" :tag="'tbody'" item-key="id">
      <template #item="{ element: video }">
        <tr>
          <td :class="getClassCell" class="cell cell-name">
            <img v-if="typeTable === 'dark'" class="cell-img" src="../assets/img/grid.svg" alt="" />
            <img class="cell-img" :src="require(`../assets/img/${getIconVideo}`)" alt="" />
            {{ trimText(video.videoName) }}
          </td>
          <td :class="getClassCell" class="cell">{{ formatingDateTime(video.start) }}</td>
          <td :class="getClassCell" class="cell">{{ formatingDateTime(video.end) }}</td>
          <td :class="getClassCell" class="cell">{{ getDuratuion(video.duration) }}</td>
          <td :class="getClassCell" class="cell">
            <base-toggle @changeToggle="(value) => $store.commit('setStatusVideo', video.id)" :toggleValue="video.status" :toggleId="`${video.videoName}__${video.id}`"></base-toggle>
          </td>
          <td :class="getClassCell" class="cell">
            <div class="control-btns">
              <base-button :type-btn="getTypeBtn" positionIcon="left" :icon="getIconDownload"></base-button>
              <base-button :type-btn="getTypeBtn" positionIcon="left" :icon="getIconEdit"></base-button>
              <base-button :type-btn="getTypeBtn" positionIcon="left" :icon="getIconDelete"></base-button>
            </div>
          </td>
        </tr>
      </template>
    </draggable>
  </table>
</template>

<script>
import { formatingTime24Clock, formatingDate } from '@/helpers/formatingDateTime';
import draggable from 'vuedraggable';

export default {
  components: {
    draggable,
  },
  data() {
    return {
      formatDate: this.formatedDate,
      formatTime: this.useTwentyFourTimeFormat,
    };
  },
  props: {
    videos: {
      type: Object,
      default: {},
    },
    typeTable: {
      type: String,
      default: 'light',
    },
    useTwentyFourTimeFormat: {
      type: Boolean,
      required: true,
    },
    formatedDate: {
      type: String,
      required: true,
    },
    moveEnabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    media: {
      get() {
        return this.videos;
      },
      set(value) {
        this.$store.commit('mixVideos', value);
      },
    },
    getClassHeadingCell() {
      return this.typeTable === 'light' ? 'cell-heading__light' : 'cell-heading__dark';
    },
    getClassCell() {
      return this.typeTable === 'light' ? 'cell__light' : 'cell__dark';
    },
    getIconVideo() {
      return this.typeTable === 'light' ? 'camera-black.svg' : 'camera-gray.svg';
    },
    getTypeBtn() {
      return this.typeTable === 'light' ? 'only-icon-purple' : 'only-icon-white';
    },
    getIconDownload() {
      return this.typeTable === 'light' ? 'download-purple.svg' : 'download-white.svg';
    },
    getIconEdit() {
      return this.typeTable === 'light' ? 'edit-purple.svg' : 'edit-white.svg';
    },
    getIconDelete() {
      return this.typeTable === 'light' ? 'delete-purple.svg' : 'delete-white.svg';
    },
  },
  methods: {
    getDuratuion(duration) {
      return duration > 60 ? `${Math.floor(duration / 60)} мин. ${duration % 60} с.` : `${duration} с.`;
    },
    trimText(text) {
      return text.length > 21 ? `${text.slice(0, 22)}...` : text;
    },
    formatingDateTime(string) {
      return `${formatingDate(string, this.formatDate)} ${formatingTime24Clock(string, this.formatTime)}`;
    },
  },
};
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.not-data {
  margin: 10px;
  margin-top: 20px;
  color: #6c757d;
}

.cell-heading {
  padding: 11px;
  text-align: left;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
}

.cell-heading__light {
  color: #6c757d;
  border-bottom: 3px solid #dee2e6;
}

.cell-heading__dark {
  color: #ffffff;
  border-bottom: 3px solid #dee2e6;
}

.cell {
  padding: 11px;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
}

.cell-name {
  display: flex;
  align-items: center;
  padding: 18px;
}

.cell-img {
  margin-right: 13px;
  opacity: 0.8;
  width: 20px;
  height: 20px;
}

.cell__light {
  color: #212529;
  border-bottom: 1px solid #dee2e6;
}

.cell__dark {
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.8);
}

.control-btns {
  display: flex;
  align-items: center;
}

tr:last-child td {
  border-bottom: none;
}
</style>
