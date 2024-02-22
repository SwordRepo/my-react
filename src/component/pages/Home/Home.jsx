import React from "react";
import { easyfinancialData } from "../../Data/data";
import Banner from "../../Banner";
import FeaturedCard from "../../FeaturedCard";
import ReviewCards from "../../ReviewCards";

export default function Home() {
  return (
    <div>
      <Banner data={easyfinancialData.banner} />
      <FeaturedCard data={easyfinancialData.featuredCard} />
      <ReviewCards data={easyfinancialData.review} />
    </div>
  );
}
