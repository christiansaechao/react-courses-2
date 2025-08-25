import { create } from "zustand";

// name: prefixes variables and functions
// - games/addToList function 

export const gamesStore = create((set) => ({
  name: "games",
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
        ({ games: state.stolenGames.append(newGame) });
      });
      
      set((state) => {
        ({ games: state.wishList.filter((item) => item != newGame) });
      });
    }

    set((state) => {
      ({ games: (state.games.recentlyBought = newGame) });
    });
  },
}));
