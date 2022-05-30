import axios from "axios";
import React, { useState, useEffect } from "react";

const Ex19_2_countries = () => {
  const [result, setResult] = useState([]);
  const [resultFiltered, setresultFiltered] = useState("");
  const [term, setTerm] = useState("");

  useEffect(() => {
    const getResult = async () => {
      const { data } = await axios.get("https://restcountries.com/v3.1/all");
      setResult(data);
      setresultFiltered(data);
    };

    getResult();
  }, []);

  const insertCountries = () => {
    const filtered = result.filter((country) => country.name.common.toLowerCase().includes(term.toLowerCase()));

    return filtered.map((country) => {
      return (
        <React.Fragment key={country.name.common}>
          <li>{country.name.common}</li>
        </React.Fragment>
      );
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
      </div>
      <ul>{insertCountries()}</ul>
    </div>
  );
};

export default Ex19_2_countries;
