import Axios from "axios";
import React, { useState } from "react";
import "./App.css";
import Error from "./Components/Error";
import RecipeCard from "./Components/RecipeCard";

function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState("");

  const APP_ID = "1a0bfa38";
  const APP_KEY = "6b9ccf1fef37d37a97a5538005d70ee4";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(url);
      if (!result.data.more) {
        return setError("No food found");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setQuery("");
      setError("");
    } else {
      setError("Enter the food name");
    }
  };

  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };
  return (
    <div className="App">
      <h1>Food Search</h1>
      <form onSubmit={onSubmit} className="search_form">
        {error !== "" && <Error error={error} />}
        <input
          type="text"
          name="query"
          onChange={onChange}
          value={query}
          autoComplete="off"
          placeholder="Search Food"
          className="search_input"
        />
        <input type="submit" value="Search" className="search_button" />
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe, id) => <RecipeCard key={id} recipe={recipe} />)}
      </div>
    </div>
  );
}
export default App;
