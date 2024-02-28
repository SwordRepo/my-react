import React from "react";
import { easyfinancialData } from "../../Data/data";
import Banner from "../../Banner";
import FeaturedCard from "../../FeaturedCard";
import ReviewCards from "../../ReviewCards";
import Cards from "../../TestCard/Cards";

export default function Home() {
  return (
    <div>
      <Banner data={easyfinancialData.banner} />
      <FeaturedCard data={easyfinancialData.featuredCard} />
      <ReviewCards data={easyfinancialData.review} />
      <Cards data={easyfinancialData.featuredCard} />
    </div>
  );
}
