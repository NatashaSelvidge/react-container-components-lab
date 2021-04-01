import { render } from "enzyme";
import React, { Component } from "react";

const Review = ({ headline, byline, link, summary_short }) => {
  return (
    <div className="review">
      <header>
        <a className="review-link" href={link.url}>
          {headline}
        </a>
        <br />
        <span className="author">by {byline}</span>
      </header>
      <blockquote>{`"${summary_short}"`}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">{reviews.map(Review)}</div>;
};

export default MovieReviews;
