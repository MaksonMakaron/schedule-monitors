export const settings = {
  state: () => ({
    playerName: 'KassaIra',
    duration: 10,
    streaming: 300,
    start: '00:00',
    end: '23:59',
    audio: 'hdmi',
    audioOptions: [
      { value: 'hdmi', name: 'HDMI' },
      { value: 'optical', name: 'Оптический кабель' },
    ],
    dateFormat: 'd/m/y',
    dateFormatOptions: [
      { value: 'd/m/y', name: 'день/месяц/год' },
      { value: 'm/d/y', name: 'месяц/день/год' },
      { value: 'y/m/d', name: 'год/месяц/день' },
    ],
    auth: 'off',
    authOptions: [
      { value: 'on', name: 'Включена' },
      { value: 'off', name: 'Отключена' },
    ],
    showSplach: true,
    defaultAssets: false,
    shufflePlaylist: true,
    useTwentyFourFormat: true,
    debug: false,
  }),
  getters: {},
  mutations: {
    setPlayerName(state, playerName) {
      state.playerName = playerName;
    },
    setDuration(state, duration) {
      state.duration = duration;
    },
    setStreaming(state, streaming) {
      state.streaming = streaming;
    },
    setStart(state, start) {
      state.start = start;
    },
    setEnd(state, end) {
      state.end = end;
    },
    setAudio(state, audio) {
      state.audio = audio;
    },
    setDateFormat(state, dateFormat) {
      state.dateFormat = dateFormat;
    },
    setAuth(state, auth) {
      state.auth = auth;
    },
    setEnd(state, end) {
      state.end = end;
    },
    setShowSplach(state, showSplach) {
      state.showSplach = showSplach;
    },
    setDefaultAssets(state, defaultAssets) {
      state.defaultAssets = defaultAssets;
    },
    setShufflePlaylist(state, shufflePlaylist) {
      state.shufflePlaylist = shufflePlaylist;
    },
    setUseTwentyFourFormat(state, useTwentyFourFormat) {
      state.useTwentyFourFormat = useTwentyFourFormat;
    },
    setDebug(state, debug) {
      state.debug = debug;
    },
  },
  actions: {},
};
