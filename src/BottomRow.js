import React, {useState} from "react";
import "./App.css";






const BottomRow = () => {
  const[currentQuatre, setQuatre]= useState(0);
  const[currentDown, setDown] = useState(0);
  const[currentTogo, setTogo] = useState(0);
  const[currentBallon, setBallon] = useState(0);


  const quarter = () => {
    setQuatre(currentQuatre + 1);
  }
  const down = () => {
    setDown(currentDown + 1)
  }

  const togo = () => {
    setTogo (currentTogo + 10)
  }
  
  const ballOn = () => {
    setBallon (currentBallon + 10)
  }

  
  

  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <button className="homeButtons__quatre"onClick = {down}>Down</button>
        <div className="down__value">{currentDown}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <button className="homeButtons__quatre"onClick = {togo}>To go</button>
        <div className="toGo__value">{currentTogo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <button className="homeButtons__quatre"onClick = {ballOn}>Ball on</button>
        <div className="ballOn__value">{currentBallon}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <button className="homeButtons__quatre"onClick = {quarter}>Quarter</button>
        <div className="quarter__value">{currentQuatre}</div>
      </div>
    </div>
  );
};

export default BottomRow;
