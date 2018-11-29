import React, { Component } from "react";
import logo from "./logo.svg";
import "./styles/app.css";

/* class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie
          title="2001: A Space Odyssey"
          imgSrc="https://i.imgur.com/vaZoNCA.jpg"
        />
      </div>
    );
  }
} */

/* // src/App.js
function Img(props) {
  return <img src={props.src} className={props.className} alt={props.alt} />;
}

function Movie(props) {
  return (
    <div className="movie-page">
      <Img className="movie-img" src={props.imgSrc} alt={props.title} />
      <h1 className="movie-title">{props.title}</h1>
    </div>
  );
}

class Dropdown extends Component {
  state = {s
    isOpen: false
  };

  toggleOpen = () => {
    this.setState({ isOpen: true });
  };

  render() {
    return (
      <div>
        <button onClick={this.toggleOpen}>Dates</button>
        {this.state.isOpen && <div>My Content</div>}
      </div>
    );
  }
} */

const moviesDatabase = [
  {
    id: 1,
    title: "Widows",
    posterUrl:
      "https://a.ltrbxd.com/resized/film-poster/3/3/6/0/6/6/336066-widows-0-230-0-345-crop.jpg",
    year: 2018,
    director: "Steve McQueen",
    watched: false
  },
  {
    id: 2,
    title: "A Serious Man",
    posterUrl:
      "https://a.ltrbxd.com/resized/sm/upload/2u/48/o1/04/kCl9WXR7LOqDTEU3XUX8ssUETQR-0-150-0-225-crop.jpg",
    year: 2009,
    director: "Adam Chitwood",
    watched: true
  }
];

class Movie extends Component {
  constructor(props) {
    super(props);

    this.state = { watched: this.props.data.watched };
    this.toggleWatch = this.toggleWatch.bind(this);
  }

  toggleWatch() {
    this.setState({ watched: this.state.watched ? false : true });
    console.log(this.state);
  }

  render() {
    let movie = this.props.data;
    console.log(movie.watched);
    return (
      <div className={!this.state.watched ? "movie" : "movie watched"}>
        <img src={movie.posterUrl} alt={movie.title} />
        <h1>{movie.title}</h1>
        <h3>
          {movie.director}, {movie.year}
        </h3>
        <input
          type="checkbox"
          id={"check" + movie.id}
          onClick={this.toggleWatch}
          defaultChecked={this.state.watched}
        />
        <label htmlFor={"check" + movie.id}>Text</label>
      </div>
    );
  }
}

class Movies extends Component {
  render() {
    return (
      <div className="App">
        {moviesDatabase.map(el => (
          <Movie data={el} key={el.id} />
        ))}
      </div>
    );
  }
}

export default Movies;
