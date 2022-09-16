/** @format */

export function createkeyValuePair(data) {
  const obj = {};
  data.forEach((d) => {
    obj[d.id] = d.name;
  });
  return obj;
}

export function getValue(markDetail) {
  const obj = [];
  for (let i in markDetail.student_marks) {
    obj[i] = markDetail.student_marks[i];
  }
  return obj;
}

