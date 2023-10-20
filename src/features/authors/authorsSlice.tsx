import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    attributes: {
      name: "John Smith",
      email: "js@js.test",
      createdAt: "2023-09-18T12:13:10.947Z",
      updatedAt: "2023-09-18T12:13:11.934Z",
      publishedAt: "2023-09-18T12:13:11.932Z",
      avatar: {
        data: {
          id: 1,
          attributes: {
            name: "png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png",
            alternativeText: null,
            caption: null,
            width: 519,
            height: 516,
            formats: {
              thumbnail: {
                name: "thumbnail_png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png",
                hash: "thumbnail_png_clipart_computer_icons_avatar_icon_design_avatar_heroes_computer_wallpaper_1c62b188d1",
                ext: ".png",
                mime: "image/png",
                path: null,
                width: 157,
                height: 156,
                size: 17.18,
                url: "/uploads/thumbnail_png_clipart_computer_icons_avatar_icon_design_avatar_heroes_computer_wallpaper_1c62b188d1.png",
              },
              small: {
                name: "small_png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png",
                hash: "small_png_clipart_computer_icons_avatar_icon_design_avatar_heroes_computer_wallpaper_1c62b188d1",
                ext: ".png",
                mime: "image/png",
                path: null,
                width: 500,
                height: 497,
                size: 64.25,
                url: "/uploads/small_png_clipart_computer_icons_avatar_icon_design_avatar_heroes_computer_wallpaper_1c62b188d1.png",
              },
            },
            hash: "png_clipart_computer_icons_avatar_icon_design_avatar_heroes_computer_wallpaper_1c62b188d1",
            ext: ".png",
            mime: "image/png",
            size: 7.31,
            url: "/uploads/png_clipart_computer_icons_avatar_icon_design_avatar_heroes_computer_wallpaper_1c62b188d1.png",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-09-18T12:13:05.472Z",
            updatedAt: "2023-09-22T12:00:50.187Z",
          },
        },
      },
    },
  },
  {
    id: 2,
    attributes: {
      name: "Mary Jane",
      email: "js22@jswqeqw.tst",
      createdAt: "2023-09-25T12:22:43.761Z",
      updatedAt: "2023-09-25T12:22:45.651Z",
      publishedAt: "2023-09-25T12:22:45.648Z",
      avatar: {
        data: {
          id: 2,
          attributes: {
            name: "kisspng-female-youtube-in-my-frame-of-mind-female-avatar-5b0cd573872302.5131979915275677315535.jpg",
            alternativeText: null,
            caption: null,
            width: 260,
            height: 300,
            formats: {
              thumbnail: {
                name: "thumbnail_kisspng-female-youtube-in-my-frame-of-mind-female-avatar-5b0cd573872302.5131979915275677315535.jpg",
                hash: "thumbnail_kisspng_female_youtube_in_my_frame_of_mind_female_avatar_5b0cd573872302_5131979915275677315535_ccc75e3c4e",
                ext: ".jpg",
                mime: "image/jpeg",
                path: null,
                width: 135,
                height: 156,
                size: 4.59,
                url: "/uploads/thumbnail_kisspng_female_youtube_in_my_frame_of_mind_female_avatar_5b0cd573872302_5131979915275677315535_ccc75e3c4e.jpg",
              },
            },
            hash: "kisspng_female_youtube_in_my_frame_of_mind_female_avatar_5b0cd573872302_5131979915275677315535_ccc75e3c4e",
            ext: ".jpg",
            mime: "image/jpeg",
            size: 8.41,
            url: "/uploads/kisspng_female_youtube_in_my_frame_of_mind_female_avatar_5b0cd573872302_5131979915275677315535_ccc75e3c4e.jpg",
            previewUrl: null,
            provider: "local",
            provider_metadata: null,
            createdAt: "2023-09-25T12:22:21.886Z",
            updatedAt: "2023-09-25T12:22:21.886Z",
          },
        },
      },
    },
  },
];

export const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  //initialState: {
  //value: 0,
  //},
  //reducers: {
  /*increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },*/
  //},
});

//export const { increment, decrement, incrementByAmount } = usersSlice.actions;

export default authorsSlice.reducer;
