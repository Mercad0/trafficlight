import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHand } from "@fortawesome/free-solid-svg-icons";
import { faPersonArrowUpFromLine } from "@fortawesome/free-solid-svg-icons";
import { faPersonArrowDownToLine } from "@fortawesome/free-solid-svg-icons";
import { faLeftRight } from "@fortawesome/free-solid-svg-icons";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
  const [selectedColor, setSelectedColor] = useState("stopRed");

  return (
    <div className="text-center">
      <div className="pole"></div>
      <div className="trafficLight">
        <div
          onClick={() => setSelectedColor("red")}
          className={"round red " + (selectedColor === "red" ? "stopRed" : "")}
        >
          {" "}
          <FontAwesomeIcon icon={faHand} />
        </div>
        <div
          onClick={() => setSelectedColor("yellow")}
          className={
            "round yellow " + (selectedColor === "yellow" ? "slowYellow" : "")
          }
        >
          {" "}
          <FontAwesomeIcon icon={faPersonArrowDownToLine} />
        </div>
        {/* <<<<<<<<<<<< line from 34 to 43 are for an extra green arrow if wanted, (then go to
        CSS to edit the height of trafficLight to 460px to fit) >>>>>>>>>>>
        {/* <div
          onClick={() => setSelectedColor("green")}
          className={
            "round green " + (selectedColor === "green" ? "goGreen" : "")
          }
        >
          {" "}
          <FontAwesomeIcon icon={faPersonArrowUpFromLine} />{" "}
        </div> */}
        <div
          onClick={() => setSelectedColor("green")}
          className={
            "round green " + (selectedColor === "green" ? "goGreen" : "")
          }
        >
          {" "}
          <FontAwesomeIcon icon={faLeftRight} />{" "}
        </div>
      </div>
    </div>
  );
};

export default Home;
