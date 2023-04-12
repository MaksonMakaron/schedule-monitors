<template>
  <div>
    <dialog-done :show="showDialogDone" />
    <h1 class="heading">Настройки</h1>
    <block-content>
      <form @submit.prevent>
        <div class="settings__container">
          <div class="settings__block">
            <div class="settings__item">
              <p class="settings__text">Имя</p>
              <base-input maxlength="30" :text="playerName" @changeInput="(value) => (playerName = value)" />
            </div>
            <div class="settings__item__block">
              <div class="settings__item">
                <p class="settings__text">Длительность по умолчанию</p>
                <base-input :text="duration" @changeInput="(value) => (duration = value)" max="999" min="1" type-input="number" />
              </div>
              <div class="settings__item">
                <p class="settings__text">Длительность потоковой передачи</p>
                <base-input :text="streaming" @changeInput="(value) => (streaming = value)" max="999" min="10" type-input="number" />
              </div>
            </div>
            <div class="settings__item__block">
              <div class="settings__item">
                <p class="settings__text">Время начала</p>
                <base-input :text="start" @changeInput="(value) => (start = value)" type-input="time" />
              </div>
              <div class="settings__item">
                <p class="settings__text">Время окончания</p>
                <base-input :text="end" @changeInput="(value) => (end = value)" type-input="time" />
              </div>
            </div>
            <div class="settings__item">
              <p class="settings__text">Аудио-вывод</p>
              <base-select :selected-option="selecetedAudio" :options="this.$store.state.settings.audioOptions" @changeSelected="(value) => (selecetedAudio = value)" />
            </div>
            <div class="settings__item">
              <p class="settings__text">Формат даты</p>
              <base-select :selected-option="selecetedDateFormat" :options="this.$store.state.settings.dateFormatOptions" @changeSelected="(value) => (selecetedDateFormat = value)" />
            </div>
            <div class="settings__item">
              <p class="settings__text">Аутентификация</p>
              <base-select :selected-option="selecetedAuth" :options="this.$store.state.settings.authOptions" @changeSelected="(value) => (selecetedAuth = value)" />
            </div>
          </div>
          <div class="settings__block">
            <div class="settings__toggle">
              <p class="settings__toggle-text">Показ заставки</p>
              <base-toggle @changeToggle="(value) => (showSplach = value)" :toggle-value="showSplach" toggleId="splash-screen"></base-toggle>
            </div>
            <div class="settings__toggle">
              <p class="settings__toggle-text">Расписание по умолчанию</p>
              <base-toggle @changeToggle="(value) => (defaultAssets = value)" :toggleValue="defaultAssets" toggleId="default"></base-toggle>
            </div>
            <div class="settings__toggle">
              <p class="settings__toggle-text">Перемешать список воспроизведения</p>
              <base-toggle @changeToggle="(value) => (shufflePlaylist = value)" :toggleValue="shufflePlaylist" toggleId="shuffle"></base-toggle>
            </div>
            <div class="settings__toggle">
              <p class="settings__toggle-text">Использовать 24-часовой формат</p>
              <base-toggle @changeToggle="(value) => (useTwentyFourFormat = value)" :toggleValue="useTwentyFourFormat" toggleId="clock"></base-toggle>
            </div>
            <div class="settings__toggle">
              <p class="settings__toggle-text">Журнал отладки</p>
              <base-toggle @changeToggle="(value) => (debug = value)" :toggleValue="debug" toggleId="debug"></base-toggle>
            </div>
          </div>
        </div>
      </form>
      <span class="settings__errors">{{ errors }}</span>

      <div class="settings__btns">
        <base-button @click="revokeChanges" text="Отмена" type-btn="secondary" />
        <base-button @click="saveChanges" :disabled="disabledSave" text="Сохранить" type-btn="primary" />
      </div>
    </block-content>
    <h2 class="settings__heading">Резервная копия</h2>
    <block-content>
      <div class="settings__btns">
        <base-button text="Скачать" type-btn="secondary" />
        <base-button text="Загрузить" type-btn="primary" />
      </div>
    </block-content>
    <h2 class="settings__heading">Системные настройки</h2>
    <block-content>
      <div class="settings__btns">
        <base-button text="Перезагрузить" type-btn="danger" />
        <base-button text="Выключить" type-btn="danger" />
      </div>
    </block-content>
  </div>
</template>

<script>
import BlockContent from '@/components/BlockContent.vue';
import DialogDone from '@/components/DialogDone.vue';

export default {
  data() {
    return {
      errors: '',
      showDialogDone: false,
      showDialogErrors: false,
      disabledSave: false,
      playerName: this.$store.state.settings.playerName,
      duration: this.$store.state.settings.duration,
      streaming: this.$store.state.settings.streaming,
      start: this.$store.state.settings.start,
      end: this.$store.state.settings.end,
      selecetedAudio: this.$store.state.settings.audio,
      selecetedDateFormat: this.$store.state.settings.dateFormat,
      selecetedAuth: this.$store.state.settings.auth,
      showSplach: this.$store.state.settings.showSplach,
      defaultAssets: this.$store.state.settings.defaultAssets,
      shufflePlaylist: this.$store.state.settings.shufflePlaylist,
      useTwentyFourFormat: this.$store.state.settings.useTwentyFourFormat,
      debug: this.$store.state.settings.debug,
    };
  },
  components: {
    BlockContent,
    DialogDone,
  },
  methods: {
    validate() {
      this.errors = '';
      if (!this.playerName) {
        this.errors = 'Заполните имя плеера';
      }
      if (this.duration <= 0 || this.duration >= 999) {
        this.errors += '\r\nДлительность по умолчанию должна быть от 1 до 999';
      }
      if (this.streaming <= 0 || this.streaming >= 999) {
        this.errors += '\r\nДлительность потоковой передачи должна быть от 1 до 999';
      }
      if (!this.start || !this.end) {
        this.errors += '\r\nЗаполните время';
      }
      if (this.start > this.end || this.start === this.end) {
        this.errors += '\r\nВремя начала должна быть больше окончания';
      }
      console.log(this.errors);

      if (this.errors) {
        return false;
      }
      return true;
    },
    saveChanges() {
      if (!this.validate()) {
        this.showDialogErrors = true;
        setTimeout(() => {
          this.showDialogErrors = false;
        }, 3000);
        return;
      }
      this.$store.commit('setPlayerName', this.playerName);
      this.$store.commit('setDuration', this.duration);
      this.$store.commit('setStreaming', this.streaming);
      this.$store.commit('setStart', this.start);
      this.$store.commit('setEnd', this.end);
      this.$store.commit('setAudio', this.selecetedAudio);
      this.$store.commit('setDateFormat', this.selecetedDateFormat);
      this.$store.commit('setAuth', this.selecetedAuth);
      this.$store.commit('setShowSplach', this.showSplach);
      this.$store.commit('setDefaultAssets', this.defaultAssets);
      this.$store.commit('setShufflePlaylist', this.shufflePlaylist);
      this.$store.commit('setUseTwentyFourFormat', this.useTwentyFourFormat);
      this.$store.commit('setDebug', this.debug);
      this.showDialogDone = true;
      this.disabledSave = true;
      setTimeout(() => {
        this.showDialogDone = false;
        this.disabledSave = false;
      }, 3000);
    },
    revokeChanges() {
      this.playerName = this.$store.state.settings.playerName;
      this.duration = this.$store.state.settings.duration;
      this.streaming = this.$store.state.settings.streaming;
      this.start = this.$store.state.settings.start;
      this.end = this.$store.state.settings.end;
      this.selecetedAudio = this.$store.state.settings.audio;
      this.selecetedDateFormat = this.$store.state.settings.dateFormat;
      this.selecetedAuth = this.$store.state.settings.auth;
      this.showSplach = this.$store.state.settings.showSplach;
      this.defaultAssets = this.$store.state.settings.defaultAssets;
      this.shufflePlaylist = this.$store.state.settings.shufflePlaylist;
      this.useTwentyFourFormat = this.$store.state.settings.useTwentyFourFormat;
      this.debug = this.$store.state.settings.debug;
    },
  },
};
</script>

<style scoped>
.settings__heading {
  margin-bottom: 17px;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #ffffff;
}

.settings__container {
  display: flex;
}

.settings__block {
  flex-basis: 49%;
}
.settings__block:not(:last-child) {
  margin-right: 30px;
}

.settings__item {
  width: 100%;
  margin-bottom: 20px;
}

.settings__toggle {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.settings__item__block .settings__item:not(:last-child) {
  margin-right: 30px;
}

.settings__item__block {
  display: flex;
}

.settings__text {
  margin-bottom: 8px;
  font-weight: 400;
  font-size: 12px;
  line-height: 19px;
  color: #6c757d;
}

.settings__errors {
  color: #c40101;
  white-space: pre-line;
}

.settings__toggle {
  display: flex;
  align-items: center;
}

.settings__toggle-text {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #212529;
}

.settings__btns {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>
