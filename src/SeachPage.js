import { Button } from "@material-ui/core";
import React from "react";
import "./searchpage.css";
import SearchResults from "./SearchResults";

function SeachPage() {
  return (
    <div className="searchpage">
      <div className="searchpage_info">
        <p>62 stays • 26 august to 30 august • 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancelation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResults
        img="https://www.greatwesternstudios.com/wp-content/uploads/image_of_haine_and_co_002-1.jpg"
        location="Private room in center of Bordeaux"
        title="Stay at this spacious Edwardian House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bthrooms • wifi • Kitchen • Free parking • washing machine"
        star={4.73}
        price="€39 / night"
        total="€177 total"
      />
      <SearchResults
        img="https://cf.bstatic.com/images/hotel/max1024x768/236/236639618.jpg"
        location="Private room in center of Berut"
        title="Stay at this spacious Edwardian House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bthrooms • wifi • Kitchen • Free parking • washing machine"
        star={4.73}
        price="€109 / night"
        total="€457 total"
      />
      <SearchResults
        img="https://www.dreamhotels.com/d/meatpackingdistrict/media/__thumbs_980_654_crop/NewYorkHotel_DreamDowntown_DreamHotels_BQ.jpg"
        location="Private room in Canary Island"
        title="Stay at this spacious Edwardian House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bthrooms • wifi • Kitchen • Free parking • washing machine"
        star={4.73}
        price="€79 / night"
        total="€207 total"
      />
      <SearchResults
        img="https://petervonstamm-travelblog.com/wp-content/uploads/2017/11/Mood-Rooms-NH-Collection-Eurobuilding-Madrid-TITEL.jpg"
        location="Private room in Las Vegas"
        title="Stay at this spacious Edwardian House"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bthrooms • wifi • Kitchen • Free parking • washing machine"
        star={4.73}
        price="€349 / night"
        total="€1077 total"
      />
      <SearchResults
        img="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sitting-rooms-hilliard-locust-18-11-20-1578948041.jpg"
        location="Private room in center of Porto"
        title="Stay at this spacious Room"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bthrooms • wifi • Kitchen • Free parking • washing machine"
        star={4.73}
        price="€59 / night"
        total="€197 total"
      />
      <SearchResults
        img="https://q-xx.bstatic.com/xdata/images/hotel/840x460/205684046.jpg?k=edd4b442376ac9cf1784cb06c8de0dc8a6037a871e50f060ba8bbcdc297cb74a&o="
        location="Private room in center of Amsterdam"
        title="Stay at this spacious Modern Hotel"
        description="1 guest • 1 bedroom • 1 bed • 1.5 shared bthrooms • wifi • Kitchen • Free parking • washing machine"
        star={4.73}
        price="€739 / night"
        total="€5177 total"
      />
    </div>
  );
}

export default SeachPage;
