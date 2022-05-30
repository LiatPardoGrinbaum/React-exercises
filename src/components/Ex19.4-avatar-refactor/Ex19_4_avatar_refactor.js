//refactor for ex13.2
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";

const Ex19_4_avatar_refactor = () => {
  const [result, setResult] = useState([]);
  const [term, setTerm] = useState("");
  const [spinner, setSpinner] = useState(true);
  // const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("https://randomuser.me/api/?results=10");
      setResult(data.results);
    };
    getData();
  }, []);
  const insertCards = () => {
    const filtered = result.filter((avatar) => {
      let fullName = (avatar.name.first + " " + avatar.name.last).toLowerCase();
      if (fullName.includes(term)) {
        return avatar;
      }
    });
    return filtered.map((avatar, index) => {
      return (
        <React.Fragment key={index}>
          <div className="card-container">
            <h2>{avatar.name.first + " " + avatar.name.last}</h2>
            <img src={avatar.picture.large} alt="" />
          </div>
        </React.Fragment>
      );
    });
  };

  return (
    <div className="elements-container">
      <div>
        <input type="text" value={term} onChange={({ target: { value } }) => setTerm(value)} />
      </div>
      <div className="cards">{insertCards()}</div>
    </div>
  );
};

export default Ex19_4_avatar_refactor;
