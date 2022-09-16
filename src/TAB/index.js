/** @format */

import React, { useState } from "react";
import { studentDB, list, CollegeDB, ProfileDB } from "./constant.js";
import "./style.css";

export default function Tab() {
  const [item, setItem] = useState(list);
  const [val, setVal] = useState(list.length > 0 ? list[0].studentId : "");
  const [details, setDetails] = useState({
    name: list[0].name,
    college: CollegeDB[0].collgeName,
    age: list[0].age,
    gender: list[0].gender,
    address: list[0].address,
    profile:ProfileDB[0].img1
    
  });

  const handleClick = (stnt, ele, clgId,profile) => {
    setVal(stnt.id);
    setDetails({
      ...details,
      name: ele.name,
      college: clgId.collgeName,
      age:ele.age,
      gender: ele.gender,
      address: ele.address,
      profile:profile.img1
    });
  };

  return (
    <div className="center">
      {item.map((ele) => {
        return studentDB.map((stnt) => {
          if (stnt.id === ele.studentId) {
            return CollegeDB.map((clgId) => {
              if (clgId.collegeId === ele.collegeId) {
                return ProfileDB.map((profile) => {
                  if (profile.profileId === ele.profileId) {
                    return (
                      <span key={ele.studentId}
                        className={
                          "borderCheck " + (stnt.id === val ? "active " : "")
                        }
                        onClick={() => handleClick(stnt, ele, clgId, profile)}
                      >
                        {stnt.name}
                      </span>
                    );
                  }
                });
              }
            });
          }
        });
      })}
      <div className="wrapper">
        <div className="profileSection">
          <img className="profile" src={details.profile} />
        </div>
        <div>
          <h4>Name: {details.name}</h4>
          <h4>College: {details.college}</h4>
          <h4>Age: {details.age}</h4>
          <h4>Gender: {details.gender}</h4>
          <h4>Address: {details.address}</h4>
        </div>
      </div>
    </div>
  );
}


 
