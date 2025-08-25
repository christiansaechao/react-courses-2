import React, { useState } from "react";
import { animeStore } from "../../store/anime";

const Anime = () => {
  const [formData, setFormData] = useState({
    name: "",
    favouritedAnime: "",
    rating: 0,
  });

  const { testFunc, addToList, FromList, deleteFromList } = animeStore(
    (state) => state.functions
  );

  const { favorited } = animeStore(state => state.anime)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked")
    addToList(formData);
  } 

  return (
    <div>
      <form
        onSubmit={(e) => handleSubmit(e)}
        onChange={(e) => handleInputChange(e)}
      >
        {/* Name */}
        <label htmlFor="name"></label>
        <input id="name" name="name" type="text" placeholder="Name..." />

        {/* Favourite */}
        <label htmlFor="favouritedAnime">Favourite Anime</label>
        <input
          id="favourite-anime"
          name="favouritedAnime"
          type="text"
          placeholder="Favourite anime..."
        />

        {/* Rating */}
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          name="rating"
          type="number"
          min={0}
          max={10}
          placeholder="Rating..."
        />
        <div>
          {favorited.map((anime, index) => {
            return (
              <div key={index}>
                <p>{anime.favouritedAnime}</p>
                <p>{anime.rating}</p>
                <p>Posted by {anime.name}</p>
                <button onClick={() => deleteFromList(anime.favouritedAnime)}>Remove</button>
              </div>
            )
          })}
        </div>
        <button type="submit">Add Anime</button>
      </form>
      <button onClick={() => testFunc("message")}>Message Button</button>
    </div>
  );
};

export default Anime;
