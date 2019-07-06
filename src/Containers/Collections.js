import React, { Component, Fragment } from "react";

//Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Leftmenu from "../Components/LeftMenu";
import GridContainer from "../Components/GridContainer";
import { FoodieContext } from "../Components/FoodieContext";

//SCSS
import "./Collection.scss";

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
      <FoodieContext.Consumer>
        {context => (
          <Fragment>
            <Header toggleLeftMenu={context.state.toggleLeftMenu} />
            <div className="container">
              <div
                className={context.state.leftMenu ? "show-menu" : "hide-menu"}
              >
                <Leftmenu routeStack={this.props.history} />
              </div>
              <div
                className={context.state.leftMenu ? "small-body" : "large-body"}
              >
                <GridContainer />
              </div>
            </div>
            <Footer />
          </Fragment>
        )}
      </FoodieContext.Consumer>
    );
  }
}
