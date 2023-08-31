import React from 'react';

function Javascript() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const arr2 = arr.map((elem) => elem * 2);
  const arr3 = arr.filter((elem) => elem > 2);
  const arr2 = arr.map((elem) => elem > 2);

  console.log(arr2);
  return <div></div>;
}

export default Javascript;
