import React, { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState(" ");
  const [results, setResults] = useState([""]);

  useEffect(() => {
    (async () => {
      if (term) {
        const { data } = await axios.get("http://en.wikipedia.org/w/api.php", {
          params: {
            action: "query",
            list: "search",
            origin: "*",
            format: "json",
            srsearch: term,
          },
        });

        setResults(data.query.search);
      }
    })();
  }, [term]);

  const renderedResults = results.map((result) => {
    return (
      <div className="item">
        <div className="content">
          <div className="header"> {result.title} </div>
          {result.sinppet}
        </div>
      </div>
    );
  });

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter search term</label>
          <input
            onChange={(e) => setTerm(e.target.value)}
            value={term}
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
