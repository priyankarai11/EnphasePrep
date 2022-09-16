/** @format */

import React from "react";
import { useNavigate } from "react-router";
import { COLLEGE_LIST, PROFILE_LIST} from "./constant";

export function StudentCard({ data }) {
  const navigate = useNavigate();
  
  const clgDetail = COLLEGE_LIST.find((d) => d.collegeId === data.collegeId);
  const profileDisplay = PROFILE_LIST.find((d) => d.profileId === data.profileId);

  
  return (
    <div className="wrapper">
      <div className="profileSection">
        <img className="profile" src={profileDisplay.img1} />
      </div>
      <div>
        <h4>Name: {data.name}</h4>
        <h4>College: {clgDetail.collgeName}</h4>
        <h4>Age: {data.age}</h4>
        <h4>Gender: {data.gender}</h4>
        <h4>Address: {data.address}</h4>
        <button onClick={() => navigate(`/marksPage/${data.marksId}`)}>
            Marks
        </button> 
      </div>
    </div>
  );
}

//  <a href={`/marksPage/${data.marksId}`} target="_blank">
//    <button>Marks</button>
//  </a>;




