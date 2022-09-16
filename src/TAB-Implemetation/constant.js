/** @format */
import profile1 from "./Images/profile2.png";
import profile2 from "./Images/profile3.png";
import profile3 from "./Images/profile4.png";

export const STUDENT_LIST = [
  {
    studentId: "tab1",
    name: "Priya",
    collegeId: 123,
    age: 23,
    gender: "F",
    address: "mnglr",
    profileId: "img1",
    marksId: "m1",
  },
  {
    studentId: "tab2",
    name: "akhil",
    collegeId: 124,
    age: 24,
    gender: "M",
    address: "bnglr",
    profileId: "img2",
    marksId: "m2",
  },
  {
    studentId: "tab3",
    name: "PriyaRai",
    collegeId: 125,
    age: 25,
    gender: "F",
    address: "puttr",
    profileId: "img3",
    marksId: "m3",
  },
];

export const STUDENT_NAME_LIST = [
  {
    id: "tab1",
    name: "Student1",
  },
  {
    id: "tab2",
    name: "Student2",
  },
  {
    id: "tab3",
    name: "Student3",
  },
];

export const COLLEGE_LIST = [
  {
    collegeId: 123,
    collgeName: "VCET",
  },
  {
    collegeId: 124,
    collgeName: "SAH",
  },
  {
    collegeId: 125,
    collgeName: "SDM",
  },
];


export const PROFILE_LIST = [
  {
    profileId: "img1",
    img1: profile1,
  },
  {
    profileId: "img2",
    img1: profile2,
  },
  {
    profileId: "img3",
    img1: profile3,
  },
];

export const MARKS_LIST = [
  {
    marksId: "m1",
    student_marks: {
      Maths: 90,
      Physics: 80,
    },
  },
  {
    marksId: "m2",
    student_marks: {
      Maths: 96,
      Physics: 81,
    },
  },
  {
    marksId: "m3",
    student_marks: {
      Maths: 94,
      Physics: 88,
    },
  },
];
