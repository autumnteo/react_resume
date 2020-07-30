import React, { Component } from "react";
import Fade from "react-reveal/Fade";

function CardProject(props) {
  return (
    <div>
      <Fade opposite bottom>
        <div className="w-64 rounded-lg overflow-hidden shadow-card proj-card">
          <div className="relative pb-48">
            <img
              className="w-full h-full absolute object-cover bg-white"
              src={props.image}
              alt={props.imgText}
            />
          </div>

          <div className="px-6 py-4 flex flex-col justify-end">
            <div className="h-48">
              <div className="font-bold text-xl mb-2">{props.title}</div>
              <div className="text-white text-base pb-4">
                {props.description}
              </div>
            </div>
            <div>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                <a
                  href={props.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-white"
                >
                  Github
                </a>
              </span>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}

class Project extends Component {
  render() {
    return (
      <div className="w-5/6 mx-auto text-center text-primary pl-32 sm:pt-16 sm:pl-0">
        <Fade>
          <p className="text-4xl pt-4 font-bold sm:pt-0">Projects</p>
        </Fade>
        <div className="proj-grid">
          <CardProject
            title={"React Resume"}
            description={"The backend code for my personal website"}
            link={"https://github.com/autumnteo/react_resume"}
            image={process.env.PUBLIC_URL + "images/website.png"}
            imgText={"screenshot of this website"}
          />
          <CardProject
            title={"Dota2 Win Predictor"}
            description={
              "School Data Mining Project which predicts the win rate of Dota2 matches "
            }
            link={
              "https://github.com/autumnteo/dota_data_mining"
            }
            image={process.env.PUBLIC_URL + "images/dota.png"}
            imgText={"dota2 logo"}
          />

          <CardProject
            title={"To-Do Bot"}
            description={
              "A telegram bot that tracks the list of tasks to do that is hosted on Amazon AWS EC2"
            }
            link={"https://github.com/autumnteo/to_do_telegram_bot"}
            image={process.env.PUBLIC_URL + "images/todo.png"}
            imgText={"to-do clip art"}
          />
          <CardProject
            title={"Rock Paper Scissors Game"}
            description={
              "A simple Rock Paper Scissors Game built using Javascript"
            }
            link={"https://github.com/autumnteo/rock_paper_scissors"}
            image={process.env.PUBLIC_URL + "images/rock.png"}
            imgText={"rock paper scissors image"}
          />
          <CardProject
            title={"Flash Cards"}
            description={
              "A simple Flash Card web application built using React"
            }
            link={"https://github.com/autumnteo/flashcard"}
            image={process.env.PUBLIC_URL + "images/flashcard.jpg"}
            imgText={"flashcard"}
          />
        </div>
      </div>
    );
  }
}

export default Project;
