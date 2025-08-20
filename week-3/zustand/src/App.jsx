
import "./App.css";
import { useStore } from "./store/gaming";
/**
 * Display our lists
 * function handle form submission
 * useState for form data
 */
function App() {
  const { ownedGames, wishList, stolenGames, recentlyBought } = useStore(
    (state) => state.games
  );

  const addToList = useStore((state) => state.addToList);
  
  return (
    <>
      <form action="">
        <label htmlFor="game-title">Game Title:</label>
        <input name="game-title" type="text" />
        <select name="list-type" id="list">
          <option value="owned">Owned</option>
          <option value="wishing">Wishlist</option>
          <option value="stolen">Stolen</option>
          <option value="recent">Recent</option>
        </select>
        <button type="submit" onClick={() => addToList()}>
          Submit
        </button>
      </form>
    </>
  );
}

export default App;
