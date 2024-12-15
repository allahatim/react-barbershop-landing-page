import React from "react";
import barberVideo from "../Assets/barbervid.mp4";

const Home = () => {
  return (
    <div className="home-container">
      <video autoPlay loop muted>
        <source src={barberVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay">
        <h1>Welcome to Barbershop</h1>
        <p>Experience the finest grooming services tailored just for you.</p>
      </div>
    </div>
  );
};

export default Home;
