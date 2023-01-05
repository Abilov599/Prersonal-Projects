import React from "react";
import Card from "../../components/card";
import Shortly from "../../components/link-shorter-form";
import "./index.scss";

import brandRecognition from "../../assets/images/card-icons/brand-recognition.png";
import detailedRecords from "../../assets/images/card-icons/detailed-records.png";
import fullyCustomizable from "../../assets/images/card-icons/fully-customizable.png";

const Main = () => {
  return (
    <div id="main">
      <Shortly />
      <div id="features">
        <div id="main-text">
          <h1>Advanced Statistics</h1>
          <p>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div id="cards">
          <Card
            icon={brandRecognition}
            h1Text={"Brand Recognition"}
            pText={
              "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content."
            }
          />
          <Card
            icon={detailedRecords}
            h1Text={"Detailed Records"}
            pText={
              "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            }
            marginTop={"44px"}
          />
          <Card
            icon={fullyCustomizable}
            h1Text={"Fully Customizable"}
            pText={
              "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            }
            marginTop={"88px"}
          />
          <div id="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
