import React, { useEffect, useState } from "react";

const Search = () => {
  const [term, setTerm] = useState(" ");

  useEffect(() => {
    console.log(term);
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
    </div>
  );
};

export default Search;
