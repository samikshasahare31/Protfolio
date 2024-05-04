import { FaLinkedinIn,FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import pic from "../assessts/pic.jpg";

const Home = () => {
  return (
    <Row className="HomeContainer" style={{ margin: "4rem" }}>
      <Col>
        <h1 className="mt-5">
          Hello, My name is <span className="tittleName">Samiksha Sahare</span>
        </h1>
        <TypeAnimation
          sequence={[
            "I'm a frontend developer",
            1000,
            "I'm a  React Developer",
            1000,
            "I'm a  Web Developer",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
         <p className="mt-4 pt-4" style={{fontSize:"18px"}}>
           Hi, I'm Samiksha Sahare, a budding web developer passionate about
           crafting immersive digital experiences. With expertise in Java,
           JavaScript, Bootstrap, HTML, CSS, SQL, and ReactJS, gained through
           hands-on projects and an enriching internship at Unified Mentor, I'm
           ready to make my mark in web development. I blend technology with
           user-centric design principles to deliver captivating experiences like
           my recipe app and quiz application. Committed to excellence and
           continuous growth, I thrive in dynamic environments. Let's connect and
           redefine the possibilities of web development together!
         </p>
        <div className="d-flex justify-content-between mt-5">
        <a className="social-media text-dark" href="https://www.linkedin.com/in/SamikshaSahare/">
        <FaLinkedinIn />
      </a>
      <a className="social-media text-dark" href="https://github.com/samikshasahare31">
        <FaGithub />
      </a>
      <a className="social-media text-dark" href="rutujasahare2018@gmail.com">
        <SiGmail />
      </a>
        </div>
      </Col>
      <Col>
        <div class="home-img">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <img className="picImg" src={pic} />
        </div>
      </Col>
    </Row>
  );
};

export default Home;



// import React from "react";
// import { TypeAnimation } from "react-type-animation";

// const Home = () => {
//   return (
//     <div className="HomeContainer">
//       <h1>
//         Hello, My Name is <span className="tittleName">Samiksha Sahare</span>
//       </h1>
//       <TypeAnimation
//         sequence={[
//           // Same substring at the start will only be typed out once, initially
//           "I am frontend developer",
//           1000, // wait 1s before replacing "Mice" with "Hamsters"
//           "I am Web developer",
//           1000,
//           "I am React developer",
//           1000,
//           "I am full stack developer",
//           1000,
//         ]}
//         wrapper="span"
//         speed={50}
//         style={{ fontSize: "2em", display: "inline-block" }}
//         repeat={Infinity}
//       />
//         <p className="mt-4 pt-4" style={{fontSize:"20px"}}>
//           Hi, I'm Samiksha Sahare, a budding web developer passionate about
//           crafting immersive digital experiences. With expertise in Java,
//           JavaScript, Bootstrap, HTML, CSS, SQL, and ReactJS, gained through
//           hands-on projects and an enriching internship at Unified Mentor, I'm
//           ready to make my mark in web development. I blend technology with
//           user-centric design principles to deliver captivating experiences like
//           my recipe app and quiz application. Committed to excellence and
//           continuous growth, I thrive in dynamic environments. Let's connect and
//           redefine the possibilities of web development together!
//         </p>
//     </div>
//   );
// };

// export default Home;
