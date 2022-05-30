import axios from "axios";
import React, { useState, useEffect } from "react";

const Ex19_1_fetch = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    const getResult = async () => {
      const { data } = await axios.get("https://swapi.dev/api/films/1");
      setResult(data);
    };
    getResult();
  }, []);

  return (
    <div>
      <div>Name of Star Wars movie 1: {result.title}</div>
      <div>Director of Star Wars movie 1: {result.director}</div>
    </div>
  );
};

export default Ex19_1_fetch;

// const Ex19_1_fetch = () => {
//   const [result, setResult] = useState("");
//   const [term, setTerm] = useState(1);
//   useEffect(() => {
//     const getResult = async () => {
//       const data = await axios.get(`https://swapi.dev/api/films/${term}`);
//       return data;
//     };
//     setResult(getResult());
//   });
//   return (
//     <div>
//       <div>
//         <input
//           type="text"
//           value={term}
//           onChange={(e) => {
//             setTerm(e.target.value);
//           }}
//         />
//       </div>
//     </div>
//   );
// };
