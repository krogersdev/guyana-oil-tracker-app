import React from "react";
import Header from "./Header";
import Card from "../Card";

const Home = () => {
  return (
    <div className="homePage">
      <Header />
      <div className="container">
        <div className="container-left">
          <p>
            Web application for tracking Guyana&apos;s ongoing Oil and natural
            as discoveries
          </p>
        </div>
        <div className="container-right">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
