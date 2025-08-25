import { create } from "zustand";

/**
 * Structure of Anime Submission
 * {
 *   name: "",
 *   favouriteAnime: "",
 *   rating: ""
 * }
 */

export const animeStore = create((set, get) => ({
  name: "anime",
  anime: {
    upcoming: [],
    watched: [],
    watchLater: [],
    favorited: [],
  },
  functions: {
    testFunc: (message) => alert(message),
    addToList: (animeData) =>
      set((state) => ({
        anime: {
          ...state.anime,
          favorited: [...state.anime.favorited, animeData],
        },
      })),
    deleteFromList: (title) => {
      const temp = get().anime.favorited;
      const updatedList = temp.filter(
        (anime) => anime.favouritedAnime != title
      );
      set((state) => ({
        anime: {
          ...state.anime,
          favorited: updatedList,
        },
      }));
    },
  },
}));

/**
 * set((state) => ({
    anime: {
      ...state.anime, // Create a copy of the anime object
      favorited: [...state.anime.favorited, animeData], // Create a new array with the added animeData
    },
 */
