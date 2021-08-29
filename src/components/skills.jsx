import React, { Component } from "react";
import Fade from "react-reveal/Fade";




function Progressbar(props){
  const [value, setValue] = React.useState(0);
    React.useEffect(() => {
      setValue(props.percentage);
    }, [props.percentage]);
  return (
    <div className="mb-8">
      <div className="text-left">{props.name}</div>
      <div className="progress-bar progress-bar-show-percent">
        <div
          className="progress-bar-filled"
          style={{ width: value }}
          data-filled={value}
        ></div>
      </div>
    </div>
  );
}

class Skills extends Component {
  render() {
    return (
      <div className="h-full pl-32 sm:pt-12 sm:pl-0">
        <Fade>
          <div className="text-center text-primary text-4xl font-bold pb-6 pt-4 sm:pt-6">
            Skills
          </div>
        </Fade>
        <div className="w5/6 text-white mx-6 flex flex-col sm:flex-row ">
          <Fade>
            <div className="flex-1 px-4">
              <Progressbar name="Python" percentage="90%" />
              <Progressbar name="Javascript" percentage="80%" />
              <Progressbar name="Java" percentage="65%" />
              <Progressbar name="R" percentage="75%" />
              <Progressbar name="PHP" percentage="75%" />
              <Progressbar name="SQL" percentage="80%" />
              {/* <Progressbar name="Cloud (AWS/ )" percentage="65%" /> */}
            </div>
            <div className="flex-1 px-4">
              <Progressbar name="AWS" percentage="75%" />
              <Progressbar name="React/ Vue" percentage="80%" />
              <Progressbar name="Docker" percentage="75%" />
              <Progressbar name="Jenkins" percentage="70%" />
              <Progressbar name="Kubernetes" percentage="60%" />
              <Progressbar name="Apache Spark" percentage="55%" />
            </div>
          </Fade>
        </div>
      </div>
    );
  }
}

export default Skills;
