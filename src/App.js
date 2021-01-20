import React, { useState, useEffect } from "react";
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

  useEffect(()=>{
    fetchJobs();
  },[])

  if (loading) {
    return <div>
      <h1>Loading...</h1>
    </div>
  }

  return <h2>Jobs</h2>;
}

export default App;
