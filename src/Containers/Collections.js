import React, { Component, Fragment } from "react";

//Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Leftmenu from "../Components/LeftMenu";

//SCSS
import "./Collection.scss";
import GridContainer from "../Components/GridContainer";

export default class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leftMenu: true
    };
  }
  toggleLeftMenu = () => {
    const { leftMenu } = this.state;
    this.setState({
      leftMenu: !leftMenu
    });
  };
  render() {
    return (
      <Fragment>
        <Header toggleLeftMenu={this.toggleLeftMenu} />
        <div className="container">
          <div className={this.state.leftMenu ? "show-menu" : "hide-menu"}>
            <Leftmenu />
          </div>
          <div className={this.state.leftMenu ? "small-body" : "large-body"}>
            <GridContainer />
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}
