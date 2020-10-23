import React from "react";
import Banner from "./Banner";
import Card from "./Card";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://d1fmx1rbmqrxrr.cloudfront.net/cnet/optim/i/edit/2019/11/airbnb-securite-big__w770.jpg"
          title="House On The Hill"
          description="This perfect room was worked for comfort and fulfillment to every one of your needs, which is exactly what you are searching for."
        />
        <Card
          src="https://www.sortiraparis.com/images/1003/62403/569419-paris-airbnb-fera-lobjet-dun-referendum-dici-lautomne.jpg"
          title="Angehlo's Room"
          description="Nice room to rest in the heart of Hollywood California. This room is perfectly located to visit the Hollywood walk of fame."
        />
        <Card
          src="https://www.romaingiacalone.com/wp-content/uploads/2019/04/deco-chambre-airbnb-1024x683.jpg"
          title="House in Venive Beach"
          description="Shared room in a 5 bedrooms 3 full bathrooms house, Kitchen, Stove, microwave, refrigerator, laundry room (coin operated), Free Wi-Fi, working table & TV"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://community.withairbnb.com/t5/image/serverpage/image-id/32281i2166449CAAE42575/image-size/large?v=1.0&px=999"
          title="Room for Two Birds"
          description="Great for couples and business travelers, our remodeled studio is just a few minutes’ drive from downtown."
          price="€35/nuit"
        />
        <Card
          src="https://cdn.generationvoyage.fr/2018/12/rentabilite-conciergerie-airbnb.jpg"
          title="House in Bordeaux"
          description="There are plenty of great attractions near our private studio and we look forward to hosting you!"
          price="€65/nuit"
        />
        <Card
          src="https://i2.wp.com/www.lechotouristique.com/wp-content/uploads/2019/01/airbnb.jpg?fit=750%2C430&ssl=1"
          title="Modern Studio"
          description="We are only a few blocks from the ocean and the family frequently take walks along the San Pedro Cliff."
          price="€350/nuit"
        />
      </div>
    </div>
  );
}

export default Home;
