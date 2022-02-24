import React from "react";
import Navbar from "../header";
import Sidebar from "../sidebar";
import "./index.css";

function Dashboard() {
  return (
    <div>
      <Navbar/>
      <div className="main-container">
        <Sidebar/>
     
    <div className="cards-list">
      <div
        className="card 1"
        style={{backgroundImage: "linear-gradient(-41deg,#003347 0,#004a69 50%)"}}
      >
        <div className="card_title title-white">
          <p className="pt-3 card-title">Card Title</p>
        </div>
        <p className="card-discription">1234</p>
      </div>
      <div className="card 1" style={{backgroundColor: "#2c5da9"}}>
        <div className="card_title title-white">
          <p className="pt-3 card-title">Card Title</p>
        </div>
        <p className="card-discription">1234</p>
      </div>

      <div className="card 1" style={{backgroundColor: "#f06897"}}>
        <div className="card_title title-white">
          <p className="pt-3 card-title">Card Title</p>
        </div>
        <p className="card-discription">1234</p>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Dashboard;