import React, { Component } from "react";
import { faUniversity, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Fade from "react-reveal/Fade";

function EducationComponent(props) {
  return (
    <div class="terminal-card text-left">
      <Fade>
        <header className="text-xl font-semibold pt-2">
          <FontAwesomeIcon icon={faUniversity} /> {props.title}
        </header>
        <header className="text-s pb-1">{props.year}</header>
          <p className="text-lg pt-2 px-4">
            <FontAwesomeIcon icon={faGraduationCap} /> {props.degree}
          </p>
          <p className="text-white px-4">{props.gpa}</p>
          <p className="text-white px-4">{props.dean}</p>
          <p className="text-white px-4 pb-2">{props.graduation}</p>
      </Fade>
    </div>
  );
}

class Education extends Component {
  render() {
    return (
      <div className="w-5/6 max-w-2xl h-full  mx-auto text-center text-primary pl-32 sm:pt-16 sm:pl-0">
        <Fade>
          <p className="text-4xl mb-4 pt-4 font-bold sm:pt-0">
            Education
          </p>
        </Fade>
        <div class="terminal-timeline">
          <EducationComponent
            title="Singapore Management University"
            year="2018 - current"
            degree="Bachelor of Science (Information System)"
            gpa="> Cumulative cGPA: 4.00/4.00"
            dean="> Dean's List: AY 2018 - 2019"
            graduation="> Expected Graduation: May 2022"
          />

          <EducationComponent
            title="Singapore Polytechnic"
            year="2013 - 2016"
            degree="Diploma in Biomedial Science"
            gpa="> Cumulative cGPA: 3.85/4.00"
            dean="> Completed an Overseas internship in UK"
            graduation=""
          />
        </div>
      </div>
    );
  }
}

export default Education;
