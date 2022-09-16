/** @format */

import React, { useEffect, useState } from "react";
import { STUDENT_LIST } from "./constant";
import { StudentCard } from "./StudentCard";
import { Tabs } from "./Tabs";
import "./style.css";

export default function TabFunc() {
  const [activeId, setActiveId] = useState(
   STUDENT_LIST.length > 0 ? STUDENT_LIST[0].studentId : ""
  );

  const activeStudent = STUDENT_LIST.find((d) => STUDENT_LIST[0].studentId === d.studentId);

  const getActiveId = (studentId) => {
     setActiveId(studentId);
  };
  
  // useEffect(() => {
  //   setActiveId(localStorage.getItem("activeId"));
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(
  //     "activeId",
  //     activeId || STUDENT_LIST[0].studentId
  //   );
  // }, [activeId]);

     
  return (
    <div className="center">
      <Tabs data={STUDENT_LIST} activeId={activeId} handleClick={getActiveId} />
      <StudentCard data={activeStudent } />
    </div>
  );
}
