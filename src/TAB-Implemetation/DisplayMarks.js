import React from 'react';
import { useParams,useNavigate } from "react-router";
import { MARKS_LIST, STUDENT_LIST } from "./constant";
import { getValue } from './Utils';

const DisplayMarks = () => {
  const navigate = useNavigate();
  const { marksId } = useParams();

  const markDetail = MARKS_LIST.find((d) => d.marksId === marksId);
  const studentDetail = STUDENT_LIST.find((d) => d.marksId === marksId);

  const marksObj = getValue(markDetail);

  return (
      
      <div className='wrap'>
        <h1>Marks Display </h1>
        <br/>
        <div>
          <h4>Student Name: {studentDetail.name}</h4>
          <h4>Maths : {marksObj.Maths}</h4>
          <h4>Physics: {marksObj.Physics}</h4>
        </div>
        <br/>
        <button onClick={()=>navigate('/')}>Home Page</button>
      </div>
    );
};

export default DisplayMarks;