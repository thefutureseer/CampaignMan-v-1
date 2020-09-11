import React, {Component} from "react";

export default class Header extends Component{
  render() {
    return (
        <nav>
          <div className="nav-wrapper">
            <a className="left brand-logo">CampainMana</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a href="#">All Surveys</a></li>
              <li><a>New Survey</a></li>
              <li><a>Login with Google</a></li>
            </ul>
          </div>
        </nav>
    )
  }
}