import React from "react";
import "./searchresults.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResults({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchresults">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchresults_heart" />
      <div className="searchresults_info">
        <div className="searchresults_infotop">
          <p>{location}</p>
          <h3>{title}</h3>
          <p>_____</p>
          <p>{description}</p>
        </div>
        <div className="searchresults_infobottom">
          <div className="searchresults_stars">
            <StarIcon className="searchresults_star" />
            <p>
              <strong>{star}</strong>
            </p>
          </div>
          <div className="searchresults_price">
            <h2>{price}</h2>
            <p>{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
