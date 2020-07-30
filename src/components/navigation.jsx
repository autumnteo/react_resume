import React, { Component } from "react";
import { NavLink } from "react-router-dom";

function ListItem(props) {
  return (
    <li className="mx-3 my-1 pt-1 text-lg sm:my-0">
      <NavLink
        activeClassName="navbar__link--active"
        to={props.link}
      >
        {props.destination}
      </NavLink>
    </li>
  );
}

class Navigation extends Component {
  render() {
    return (
      <header>
        <nav className="p-4 pr-1 fixed flex flex-col items-center bg-black z-10 sm:flex-row sm:justify-between sm:w-screen sm:pt-2 sm:h-16">
          <div className="terminal-prompt text-lg pt-2">
            <NavLink to="/">hello world</NavLink>
          </div>

          <ul className="flex flex-col pt-8 sm:flex-row sm:pt-0">
            <ListItem link="/about" destination="About" />
            <ListItem link="/skills" destination="Skills" />
            <ListItem link="/education" destination="Education" />
            <ListItem link="/experience" destination="Experience" />
            <ListItem link="/projects" destination="Projects" />
          </ul>
        </nav>
      </header>
    );
  }
}
//  function ListItem(props){
//    return (
//      <li className="mx-3 my-1 pt-1 border-b border-white hover:text-primary hover:border-primary">
//        <NavLink activeClassName="navbar__link--active" to={props.link}>
//          {props.destination}
//        </NavLink>
//      </li>
//    );
//  }

//  class Navigation extends Component {
//    render() {
//      return (
//          <header className="text-center ">
//            <div className="flex flex-col items-center mx-auto px-6 py-3 sm:flex-row sm:justify-between ">
//              <div className="terminal-prompt">
//                <NavLink to="/">hello world</NavLink>
//              </div>

//              <nav className="text-white nav-bar">
//                <ul className="flex flex-col mx-auto sm:flex-row ">
//                  <ListItem link="/about" destination="About"/>
//                  <ListItem link="/skills" destination="Skills"/>
//                  <ListItem link="/education" destination="Education"/>
//                  <ListItem link="/experience" destination="Experience"/>
//                  <ListItem link="/projects" destination="Projects"/>
//                </ul>
//              </nav>
//            </div>
//          </header>
//      );
//    }
//  }

export default Navigation;
