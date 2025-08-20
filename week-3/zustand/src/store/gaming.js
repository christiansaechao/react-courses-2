import { create } from "zustand";

export const useStore = create((set) => ({
  games: {
    ownedGames: [],
    wishList: [],
    stolenGames: [],
    recentlyBought: "",
  },
  addToList: (newGame, listType) => {
    if (listType.toLowerCase() === "owned") {
      set((state) => ({ games: state.games.ownedGames.append(newGame) }));
    }

    if (listType.toLowerCase() === "wishing") {
      set((state) => {
        return { games: state.games.wishList.append(newGame) };
      });
    }

    if (listType.toLowerCase() === "stolen") {
      set((state) => {
        ({games: state.stolenGames.append(newGame)})
      });
      set((state) => {
        ({games: state.wishList.filter((item) => item != newGame)})
      });
    }

    set((state) => {
      ({games: state.games.recentlyBought = newGame})
    });
  },
}));
