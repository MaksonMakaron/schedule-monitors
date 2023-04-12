export const schedule = {
  state: () => ({
    videos: [
      {
        id: 1,
        videoName: 'VID_20230322_141732_88371.mp4',
        start: '2014-03-12T13:37:27+00:00',
        end: '2014-03-12T13:37:27+00:00',
        duration: 20,
        status: true,
      },
      {
        id: 2,
        videoName: 'VID_20230323_141732_88371.mp4',
        start: '2014-03-12T13:37:27+00:00',
        end: '2014-03-12T13:37:27+00:00',
        duration: 60,
        status: true,
      },
      {
        id: 3,
        videoName: 'VID_20230324_141732_88371.mp4',
        start: '2014-03-12T13:37:27+00:00',
        end: '2014-03-12T13:37:27+00:00',
        duration: 61,
        status: false,
      },
      {
        id: 4,
        videoName: 'VID_20230325_141732_88371.mp4',
        start: '2014-03-12T13:37:27+00:00',
        end: '2014-03-12T13:37:27+00:00',
        duration: 120,
        status: false,
      },
      {
        id: 5,
        videoName: 'VID_20230326_141732_88371.mp4',
        start: '2014-03-12T13:37:27+00:00',
        end: '2014-03-12T13:37:27+00:00',
        duration: 450,
        status: false,
      },
      {
        id: 6,
        videoName: 'VID_20230327_141732_88371.mp4',
        start: '2014-03-12T13:37:27+00:00',
        end: '2014-03-12T13:37:27+00:00',
        duration: 324,
        status: false,
      },
      {
        id: 7,
        videoName: 'VID_20230328_141732_88371.mp4',
        start: '2014-03-12T13:37:27+00:00',
        end: '2014-03-12T13:37:27+00:00',
        duration: 324,
        status: false,
      },
    ],
  }),
  getters: {
    getActiveVideos(state) {
      return state.videos.filter((video) => video.status);
    },
    getDisabledVideos(state) {
      return state.videos.filter((video) => !video.status);
    },
  },
  mutations: {
    mixVideos(state, videos) {
      videos.forEach((element) => {
        for (let i = 0; i < state.videos.length; i++) {
          const videoStore = state.videos[i];
          if (element.id === videoStore.id) {
            state.videos.splice(i, 1);
          }
        }
      });
      state.videos = state.videos.concat(videos);
      console.log(state.videos);
    },
    setVideos(state, videos) {
      state.videos = videos;
    },
    setStatusVideo(state, id) {
      let video = state.videos.find((video) => video.id === id);
      video.status = !video.status;
    },
  },
  actions: {},
};
