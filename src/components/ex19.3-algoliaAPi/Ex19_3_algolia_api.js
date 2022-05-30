import axios from "axios";
import React, { useState, useEffect } from "react";

const Ex19_3_algolia_api = () => {
  const [result, setResult] = useState([]);
  const [term, setTerm] = useState("hooks");
  const [spinner, setSpinner] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    try {
      const getResult = async () => {
        const { data } = await axios.get(`http://hn.algolia.com/api/v1/search?query=${term}`);
        setResult(data.hits);
        setSpinner(false);
      };
      getResult();
    } catch (err) {
      setErrMessage(err.message);
    }
  }, []);

  const insertResults = () => {
    return result.map((query) => {
      return (
        <React.Fragment key={query.objectID}>
          <a href={query.url}>
            <li>{query.title}</li>
          </a>
        </React.Fragment>
      );
    });
  };
  const handleClick = async () => {
    setErrMessage("");
    setSpinner(true);
    try {
      const { data } = await axios.get(`http://hn.algolia.com/api/v1/search?query=${term}`);
      setResult(data.hits);
      setSpinner(false);
    } catch (err) {
      setErrMessage(err.message);
    }
  };

  return (
    <div>
      <div>
        <h1>Algolia Search</h1>
        <input
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button onClick={handleClick}>Search</button>
      </div>
      {errMessage ? <p style={{ color: "red" }}>{errMessage}</p> : null}
      {spinner ? <h1>Loading...</h1> : null}
      <ul>{insertResults()}</ul>
    </div>
  );
};

export default Ex19_3_algolia_api;
