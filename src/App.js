import React from "react";
import "./App.css";
// import Home from "./Home";

const data = {
  discoveries: [
    {
      id: 1,
      wellName: "Liza-1 well",
      date: "May 20, 2015",
      reservoirs: 90,
      location: "Stabroek",
      link: "https://exxonmobil.co/2IjwFPG",
      investor: [
        { ExxonMobil: 45 },
        { Hess: 30 },
        { "CNOOC Nexen Petroleum": 25 },
      ],
    },
    {
      id: 2,
      wellName: "Payara- 1",
      date: "Jan 12, 2017",
      reservoirs: 95,
      location: "Stabroek",
      link: "https://exxonmobil.co/2J3h5Y8",
      investor: [
        { ExxonMobil: 45 },
        { Hess: 30 },
        { "CNOOC Nexen Petroleum": 25 },
      ],
    },
  ],
};

const Home = () => {
  return (
    <>
      <div>
        <h1>Guyana Oil & Gas Discovery Tracker</h1>
        <hr />
        <p>
          Web application for tracking Guyana&apos;s ongoing Oil and natural as
          discoveries
        </p>
      </div>
    </>
  );
};

const Timeline = () => {
  return <div>Timeline</div>;
};

const About = () => {
  return <h1>This is my About component!</h1>;
};

const App = () => {
  return (
    <div>
      <div className="App">
        <Home />
        <About />
        <Timeline />
      </div>
    </div>
  );
};

export default App;
