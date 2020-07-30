import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import ReactTooltip from "react-tooltip";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function SocialIcons(props) {
  return (
    <div className="mb-4 sm:pb-4 inline-block">
      <a
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-6 social-links text-white hover:p-0 hover:bg-black hover:text-primary "
        data-tip
        data-for={props.dataFor}
      >
        <FontAwesomeIcon icon={props.icon} size="4x" />
      </a>
      <ReactTooltip id={props.dataFor} type="light">
        <span>{props.text}</span>
      </ReactTooltip>
    </div>
  );
}

class About extends Component {
  render() {
    return (
      <div className="flex flex-col text-center text-white pl-32 w-5/6 mx-auto h-full pt-2 sm:pt-12 sm:flex-row sm:pl-0">
        <div className="mt-3 mr-2 flex-33 pt-4 sm:pt-0">
          <div>
            <Zoom>
              <img
                className="rounded-full w-32 block mb-2 mx-auto sm:mt-12"
                src={process.env.PUBLIC_URL + "images/about.jpg"}
                alt="Alternate Pic"
              />
              <p className="text-4xl font-bold text-primary">Autumn Teo</p>
              <p> Undergraduate | Tech Enthusiast | Aspirations Scholar </p>
              <div className="mt-4">
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
                  text={"Check out my CV!"}
                />
              </div>
            </Zoom>
          </div>
        </div>
        <div className="text-left py-0 mt-2 my-0 flex-66 sm:pl-10 sm:ml-2">
          <Fade>
            <p className="text-4xl text-primary font-bold sm:pt-2">ABOUT</p>
            <div className="text-base code py-2 px-4">
              <p>
                Hello{" "}
                <span role="img" aria-label="hand wave">
                  👋
                </span>{" "}
                I'm Autumn Teo - An aspiring Data Scientist!
              </p>
              <p>
                I'm currently a third year Information Systems studying in SMU
                with a GPA of 4.00. Throughout my undergraduate studies, i have
                also been involved in research projects as well as been a
                teaching assistant for numerous modules.
              </p>
              <p>
                In my free time, i like to explore and learn different
                technologies. I learnt how to use React on my own and used it to
                built my website and i've also made it mobile-responsive!
              </p>
            </div>

            <p className="text-4xl text-primary font-bold pt-4 mt-4 sm:mt-0">
              BASIC INFORMATION
            </p>
            <div className="grid grid-cols-11 col-gap-8 row-gap-0 align-middle text-base md:text-lg sm:row-gap-2">
              <div className="col-span-9 text-gray-500 text-xl min-w-0 sm:col-span-5 sm:text-gray-100 sm:text-lg">
                Email:
              </div>
              <div className="col-span-9 text-gray-100 mb-3 underline sm:col-span-6 sm:mb-0">
                <a href="mailto:autumnteo96@gmail.com">Autumnteo96@gmail.com</a>
              </div>
              <div className="col-span-9 text-gray-500 text-xl sm:col-span-5 sm:text-gray-100 sm:text-lg">
                Phone:
              </div>
              <div className="col-span-9 text-gray-100 mb-3 underline sm:col-span-6 sm:mb-0">
                <a href="tel:+6582281434">+65 82281434</a>
              </div>
              <div className="col-span-9 text-gray-500 text-xl sm:col-span-5 sm:text-gray-100 sm:text-lg">
                Availability:
              </div>
              <div className="col-span-9 text-gray-100 mb-3 sm:col-span-6 sm:mb-0">
                3<sup>rd</sup> May 2021 - 6<sup>th</sup> August 2021
              </div>
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default About;
