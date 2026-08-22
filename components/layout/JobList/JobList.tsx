"use client";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import { experience } from "../../../data/site";
import "./JobList.css";

export default function JobList() {
  return (
    <Tab.Container id="joblist-tabs" defaultActiveKey={experience[0].company}>
      <Row>
        <Col sm={4} md={3}>
          <Nav variant="pills" className="flex-column joblist-tabs">
            {experience.map((item) => (
              <Nav.Item key={item.company}>
                <Nav.Link as="button" type="button" eventKey={item.company}>
                  {item.company}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={8} md={9}>
          <Tab.Content>
            {experience.map((item) => (
              <Tab.Pane eventKey={item.company} key={item.company}>
                <div className="joblist-panel">
                  <h3 className="joblist-role">
                    {item.role}{" "}
                    <span className="joblist-company">@ {item.company}</span>
                  </h3>
                  <p className="joblist-meta">
                    {item.duration}
                    {item.location ? ` · ${item.location}` : ""}
                  </p>
                  <ul className="joblist-highlights">
                    {item.highlights.map((point) => (
                      <li key={point} className="joblist-highlight">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
