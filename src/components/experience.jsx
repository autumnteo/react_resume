import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faUserCircle, faClock } from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

function WorkExperiences(props) {
  return (
    <div className="form-group p-2">
      <Fade> 
        <div className="label">
          <p className="text-2xl text-primary">
            <FontAwesomeIcon icon={faBriefcase} className='fill-current text-white' /> {props.organisation}
          </p>
          <p className='text-xl'> <FontAwesomeIcon icon={faUserCircle}/>  {props.title}</p>
          <p className="text-secondary pb-2 "> <span className="text-xl"><FontAwesomeIcon icon={faClock}/> </span> {props.duration}</p>
        </div>
        <p className="textarea mb-10"> {props.description}</p>
      </Fade>
    </div>
  );
}

class Experience extends Component {
  render() {
    return (
      <div className="w-5/6 mx-auto mb-6 text-white pl-32 sm:pt-16 sm:pl-0">
        <Fade>
          <p className="text-4xl text-primary text-center font-bold pt-4 sm:pt-0">
            Experience
          </p>
        </Fade>
        <form action="/" className="px-4">
          <fieldset disabled>
            <legend className="text-2xl text-white px-2">
              Work Experiences
            </legend>
            <WorkExperiences
              organisation="Monetary Authority of Singapore"
              title="Data Analytics & Engineering Intern"
              duration="June 2020 - August 2020"
              description="Developed topic modelling feature on news article using spaCy as well as unit tests and documentation. I also assisted with migration of django project from the development to production server."
            />

            <WorkExperiences
              organisation="Singapore Management University"
              title="Research Assistant - Social Analytics"
              duration="Jan 2020 - May 2020"
              description="Developed a web scrapping program to gather League of Legends games data as well as the processing of and storage of data for future social network and sentiment analysis."
            />

            <WorkExperiences
              organisation="Living Analytics Research Centre"
              title="Research Intern"
              duration="April 2019 - July 2019"
              description="Created and designed scripts to retrieve and process data from a MySQL database which were converted to REST-ful APIs."
            />
            <WorkExperiences
              organisation="Singapore Management University"
              title="Teaching Assistant"
              duration="Jan 2020 - Current"
              description="Provided a guidance and consultations for students for various modules such as Computational Thinking & Analytics Foundation"
            />
            <WorkExperiences
              organisation="Singapore Management University Library"
              title="Library Student Helper"
              duration="October 2018 - Current"
              description="Assisted patrons with various enquries and organised a staff bonding session for over 30 students and faculty"
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Experience;
