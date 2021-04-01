import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";
import "./SearchableMovieReviewsContainer";

const NYT_API_KEY = "SoXhE1SQxeGYjTUbVWY9PCH3jqowAxNG";

const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

export default class LastestMovieReviewsContainer extends React.Component {
  state = {
    reviews: [],
  };

  ComponentDidMount() {
    fetch(URL)
      .then((resp) => resp.json())
      .then((data) => this.setState({ reviews: data.results }));
  }
  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews category="All Reviews" reviews={this.state.reviews} />
      </div>
    );
  }
}
