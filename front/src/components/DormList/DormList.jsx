import { MDBInput } from "mdb-react-ui-kit";
import React from "react";
import { useSelector } from "react-redux";
import DormCard from "../DormCard/DormCard";

import "./dormlist.css"
const DormList = () => {
  const dorms = useSelector((state) => state.foyerReducer.foyers);
//select

//select
  return (
    <div>
       <div class="input-group">
  <div class="form-outline">
    <input  type="search" id="form1" class="form-control" />
    <label class="form-label" for="form1">Search</label>
  </div>
  <button type="button" class="btn btn-primary">
    <i class="fas fa-search"></i>
  </button>
</div>

      <div
        style={{
          display: "flex",
          
          margin: 10,
          flexWrap: "wrap",
        }}
      >
        {dorms.map((dorm) => (
          <DormCard dorm={dorm} key={dorm._id} />
        ))}
      </div>
    </div>
  );
};

export default DormList;
