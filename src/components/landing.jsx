import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import ReactTooltip from "react-tooltip";
import Typical from "react-typical";
import Fade from "react-reveal/Fade";

function SocialIcons(props){
  return (
    <span>
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-6 social-links text-white hover:p-0 hover:bg-black hover:text-primary "
        data-tip
        data-for={props.dataFor}
      >
        <FontAwesomeIcon icon={props.icon} size="5x" />
      </a>
      <ReactTooltip id={props.dataFor} type="light">
        <span>{props.text}</span>
      </ReactTooltip>
    </span>
  );
}


library.add(fab);
class Landing extends Component {
  render() {
    return (
      <div className="w-3/4 mx-auto pl-32 pt-2 sm:pt-12 sm:pl-0">
        <Fade>
          <div className="text-center pt-4 sm:pt-0">
            <div>
              <img
                className="rounded-full w-32 block mt-2 mb-2 text-white mx-auto sm:mt-8"
                src={process.env.PUBLIC_URL + "images/landing.jpg"}
                alt="Profile"
              />
              <p className="text-primary text-5xl font-bold mb-0 ">
                Hello, I'm Autumn!
              </p>
              {/* <p className="text-primary text-3xl ">I'm Autumn!</p>
              <p className="text-primary text-3xl landing-text">
                And welcome to my website!
              </p> */}
              <div className="text-white text-3xl">
                I'm a
                <Typical
                  steps={[
                    "SMU Information Systems Undegrad 🎓",
                    1000,
                    "SMU Aspirations Scholar 📚",
                    1000,
                    "Tech Enthusiast 💻",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </div>
            </div>
          </div>
          <div className="text-center my-8">
            <SocialIcons
              link={"https://github.com/autumnteo"}
              dataFor={"github"}
              icon={["fab", "github"]}
              text={"Check out my Github!"}
            />
            <SocialIcons
              link={"https://www.linkedin.com/in/autumn-teo-5b0165173/"}
              dataFor={"linkedin"}
              icon={["fab", "linkedin"]}
              text={"View my Linkedin!"}
            />
            <SocialIcons
              link={process.env.PUBLIC_URL + "resume/Autumn_Resume.pdf"}
              dataFor={"cv"}
              icon={faFileAlt}
              // icon={["fas", "fileAlt"]}
              text={"Check out my CV!"}
            />

            {/* <a
              href="/"
              download={process.env.PUBLIC_URL + "resume/Autumn_Resume.pdf"}
            >
              Download my painting
            </a> */}
          </div>
        </Fade>
      </div>
    );
  }
}

export default Landing;
