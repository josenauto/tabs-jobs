import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://josenauto.github.io/api/tabs-jobs-api.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <div>
      <div>
        <h2>Experiencia</h2>
      </div>
      <div>
        {/*btn container*/}
        <div>
          {jobs.map((item, index) => {
            return (
              <button key={item.id} onClick={() => setValue(index)}>
                {/* index = 0: Forcenter, 1: Paradigma, 2:Forsend*/}
                {item.company}
              </button>
            );
          })}
        </div>
        {/*job info*/}
        <div>
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index}>
                <FaAngleDoubleRight></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
