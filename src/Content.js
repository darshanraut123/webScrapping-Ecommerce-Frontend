import React, { useState } from "react";
import Banner from "./Banner";

function Content({ title, amazon, flipkart, vijaysales }) {
  let [banners, setBanners] = useState([amazon, flipkart, vijaysales]);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8 card">
          <h2 className="title">{title}</h2>
          <section className="price-comparison">
            {banners.map((banner) => (
              <Banner key={banner.site} banner={banner} />
            ))}
          </section>
          <div className="col-2"></div>
        </div>
      </div>
    </div>
  );
}

export default Content;
