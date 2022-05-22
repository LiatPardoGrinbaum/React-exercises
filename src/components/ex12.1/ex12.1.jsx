import React from "react";
import Axios from "axios";
import "../ex12.1/style.css";

class Ex12_1_API extends React.Component {
  state = { joke: " ", categories: [], categoryJoke: "", term: "", allCatgoryJokes: [] };

  componentDidMount = async () => {
    const response = await Axios.get("https://api.chucknorris.io/jokes/categories");
    this.setState({ categories: response.data });
  };

  getRandomJoke = async () => {
    const response = await Axios.get("https://api.chucknorris.io/jokes/random");
    this.setState({ joke: response.data.value });
  };

  getJokeByCategory = async (event) => {
    const response = await Axios.get(`https://api.chucknorris.io/jokes/random?category=${event.target.name}`);
    // console.log(response.data.value);
    this.setState({ categoryJoke: response.data.value });
  };

  getAllCategoryJokes = async (event) => {
    event.preventDefault();
    const response = await Axios.get(`https://api.chucknorris.io/jokes/search?query=${this.state.term}`);
    console.log(response.data.result);
    this.setState({ allCatgoryJokes: response.data.result });
    //later need to map all over the array and print only the jokes. maybe inside render or as i did before
  };

  render() {
    return (
      <div>
        <h2>Get random joke:</h2>
        <button onClick={this.getRandomJoke}>Get Random Joke</button>
        <p> {this.state.joke}</p>
        <h2>Get jokes by categories:</h2>
        {this.state.categories.map((category, key) => {
          return (
            <React.Fragment>
              <button name={category} onClick={this.getJokeByCategory} id={key} style={{ marginRight: "3px" }}>
                {category}
              </button>
            </React.Fragment>
          );
        })}
        <p>{this.state.categoryJoke}</p>
        <h2>Type a category name and get all its jokes:</h2>
        <form onSubmit={this.getAllCategoryJokes}>
          {/* note to myself: can also do it with onKeyPress (instead of onsubmit+onchange) and add condition when enter key is pressed (see mordi's solution) */}
          <input value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })}></input>
        </form>
        {this.state.allCatgoryJokes.map((joke) => {
          return <p>{joke.value}</p>;
        })}
      </div>
    );
  }
}

export default Ex12_1_API;
