import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaUserGraduate } from "react-icons/fa";
import { GiStairsGoal } from "react-icons/gi";
import { SiOnlyoffice } from "react-icons/si";

const About = () => {
  return (
    <div className="AboutDataContainer justify-content-around">
      <h1 className="text-center text-decoration-underline mb-4">About Me</h1>

      <Row className="p-4 mb-4">
        <Col className="p-4">
          <div className="about-container p-4 ">
            <h1>ABOUT </h1>
            <p className="mt-4 pt-4 mb-4" style={{ fontSize: "18px" }}>
            Greetings, I'm Samiksha Sahare, a dedicated web developer driven by
            a passion for creating engaging digital environments. My proficiency
            spans across Java, JavaScript, Bootstrap, HTML, CSS, SQL, and
            ReactJS, honed through practical projects and a rewarding internship
            at Unified Mentor.
            </p>
            <p className=" pt-4 mb-4" style={{ fontSize: "18px" }}>
            I specialize in blending cutting-edge technology
            with user-centric design principles to deliver captivating digital
            experiences. Notable projects include a dynamic recipe app and an
            interactive quiz application, showcasing my ability to seamlessly
            integrate functionality with aesthetics. My commitment to excellence
            and perpetual learning fuels my adaptability in dynamic
            environments. 
            </p>
            <p className="pt-4 mb-4" style={{ fontSize: "18px" }}>
            I am poised to make significant contributions to the
            realm of web development and eager to collaborate in reshaping its
            possibilities. Let's connect and embark on a journey to redefine the
            digital landscape together!
            </p>
          </div>
        </Col>
        <Col className="p-4 m-0">
          <Row className="mb-4 p-4 Data-container ">
            <Col className="text-center">
              <span style={{ fontSize: "7rem" }}>
                <SiOnlyoffice />
              </span>
            </Col>
            <Col className="Data-container">
              <h1>Experience</h1>
              <p>
              As a Web Development Intern at Unified Mentor, I contributed to
                diverse web applications, crafting user-friendly interfaces
                using HTML, CSS, JavaScript, and frameworks. Collaborating
                across teams, I addressed technical issues, optimized based on
                user feedback, and enhanced my skills in web development and
                project management.
              </p>
            </Col>
          </Row>
          <Row className="mb-4 p-4 Data-container">
            {/* <Col><FaUserGraduate /></Col> */}
            <Col className="text-center">
              <span className="" style={{ fontSize: "7rem" }}>
                <FaUserGraduate />
              </span>
            </Col>
            <Col className="Data-container">
              <h1>Education</h1>
              <p>
              Graduated with a B.Sc in Computer Science from S. Amolakchand
                Mahavidyalaya College, Yavatmal, achieving a GPA of 78.86% in
                2023. Prior academic achievements include a HSC from Maharashtra
                State Board with 59.23% in 2020 and SSC with 53.60% in 2018.
              </p>
            </Col>
          </Row>
          <Row className="p-4 Data-container">
            <Col className="text-center">
              <span className="" style={{ fontSize: "7rem" }}>
                <GiStairsGoal />
              </span>
            </Col>
            <Col className="Data-container">
              <h1>Future Goals</h1>
              <p>
              Aspiring frontend developer passionate about crafting intuitive
                user interfaces. Proficient in HTML, CSS, JavaScript, and
                frontend frameworks. Committed to innovation and continuous
                learning for creating seamless web experiences.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default About;
