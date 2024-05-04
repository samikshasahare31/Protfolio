import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import project1 from "../assessts/project1.jpg";
import project2 from "../assessts/project2.jpg";
import project3 from "../assessts/project3.jpg";

// import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ProjectCard } from "./ProjectCard";

export const Project = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: project1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: project2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: project3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      // imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2 className="mb-4">Projects</h2>
                <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}