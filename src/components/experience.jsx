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
        {props.description1 ? 
        <p className="textarea mb-10"> {props.description} <br/> {props.description1} <br/> {props.description2} </p> : 
        <p className="textarea mb-10"> {props.description} </p>  } 
        
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
            <legend className="text-3xl text-white px-2">
              Work Experiences
            </legend>
            <WorkExperiences
              organisation="Singtel"
              title="Data Engineering (SHINE) Intern"
              duration="May 2021 - Aug 2021"
              description="•	Coordinated and led my team to 2nd Runners up in Singtel’s Lit Challenge"
              description1="•	Increased workflow efficiency by 20% by automating data migration from HDFS to Ceph"
              description2="•	Enriched user experience by automating the removal of all terminated pods within the Kubernetes cluster"
            />
            <WorkExperiences
              organisation="Sentient.io"
              title="Science Intern"
              duration="Feb 2021 - Apr 2021"
              description="•	Streamlined workflow by 30% by developing a Jenkins pipeline on Google Cloud"
              description1="•	Enhanced efficiency by deploying a Google Sheets script to automatically trigger downstream Jenkins jobs"
            />

            <WorkExperiences
              organisation="Monetary Authority of Singapore"
              title="Data Analytics & Engineering Intern"
              duration="Jun 2020 - Jan 2021"
              description="•	Improved workflow efficiency by 70% by developing Natural Language Processing scripts to automatically perform automatic semantic role labelling"
              description1="•	Ensured smooth and efficient knowledge transfer by writing documentation"
              description2="•	Contributed to the Django Project by developing Topic Modelling features and unit tests"
            />

            <WorkExperiences
              organisation="Singapore Management University"
              title="Research Assistant - Social Analytics Research Project"
              duration="Jan 2020 - May 2020"
              description="•	Accelerated data collection by 100% by developing web scraping scripts using Selenium"
              description1="•	Performed data processing and warehousing on MongoDB for future network and sentiment analysis"
            />

            <WorkExperiences
              organisation="Living Analytics Research Centre"
              title="Research Intern"
              duration="Apr 2019 - Jul 2019"
              description="•	Refined Data retrieval by developing API endpoints to retrieve and process data from MySQL database"
            //   description1=""
            />
            <WorkExperiences
              organisation="Singapore Management University"
              title="Teaching Assistant"
              duration="Jan 2020 - Current"
              description="•	Coached and provided consultation sessions for more than 160 students on coursework in Computational Thinking and Analytics Foundation concepts"
            />
            <WorkExperiences
              organisation="Singapore Management University Library"
              title="Library Student Helper"
              duration="October 2018 - Current"
              description="•	Successfully organised and emceed a bonding session between the library staff and the student library assistants"
              description1="•	Served over 80 patrons over a daily basis and fulfilled their enquires with 100% accuracy"
            />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Experience;
