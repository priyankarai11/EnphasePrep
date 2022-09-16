/** @format */

import React from "react";
import { STUDENT_NAME_LIST } from "./constant";
import { createkeyValuePair } from "./Utils";

export function Tabs({ data, activeId, handleClick }) {
  const tabObj = createkeyValuePair(STUDENT_NAME_LIST);

  return (
    <div>
      {data.map((d) => (
        <span
          key={d.studentId}
          onClick={() => handleClick(d.studentId)}
          className={
            "borderCheck " + (activeId === d.studentId ? "active " : "")
          }
        >
          {tabObj[d.studentId]}
        </span>
      ))}
    </div>
  );
}
