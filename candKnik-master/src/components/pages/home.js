import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [candList, setCandList] = useState([]);
  const getCandidates = async() => {
      const res = await fetch('http://localhost:3010/candidates', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      });

      const data = await res.json();
      if (res.status === 200) {
          setCandList(data);
      }
  };

  useEffect(() => {
      getCandidates();
  }, []);
  return (
    <main className="px-3">
      <h3>Candidates List</h3>
      <hr />
      <div className="container" style={{ marginTop: "50px" }}>
        <div className="list-group">
          <div className="list-group">
            {candList ? 
                candList.map((e, i) => (
                    <Link to={`applications/${e.applicationId}`} key={i} className="list-group-item list-group-item-action" >
                        {e.name}
                    </Link>
                ))
            : <></>}

          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
