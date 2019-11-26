import React from "react";
import { Menu } from "../components/Menu";
import "./TravelList.css";

const TravelList = () => {
  return (
    <React.Fragment>
      <div className="container-fluid p-0">
        <Menu />
        <div className="row">
          <div className="col-xs-12 col-md-3 filters">
            <h3>Lugares</h3>
          </div>
          <div className="col-xs-12 col-md-9 content"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TravelList;
