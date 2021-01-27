import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
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
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Loading...</h1>
          </Col>
        </Row>
      </Container>
    );
  }

  const { company, dates, duties, title } = jobs[value];

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">Experiencia</h1>
        </Col>
      </Row>
      <Row>
        {/*Botone de empresas*/}
        <Col className="text-center">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`${index === value && "active-btn"}`}
              >
                {/* index = 0: Forcenter, 1: Paradigma, 2:Forsend*/}
                {item.company}
              </button>
            );
          })}
        </Col>
      </Row>
      {/*Información del trabajo*/}
      <Row>
        <Col sm="12" md="12" lg="12">
          <h4>{title}</h4>
        </Col>
        <Col sm="12" md="12" lg="12">
          <h5>{company}</h5>
        </Col>
        <Col sm="12" md="12" lg="12">
          <p>{dates}</p>
        </Col>
        {duties.map((duty, index) => {
          return (
            <Col sm="12" md="12" lg="12" key={index}>
              <FaAngleDoubleRight></FaAngleDoubleRight>
              <p className="p-duty">{duty}</p>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default App;
