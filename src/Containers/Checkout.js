import React, { Component, Fragment } from "react";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

//Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Leftmenu from "../Components/LeftMenu";
import { FoodieContext } from "../Components/FoodieContext";

// CSS
import "./Checkout.scss";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      steps: ["Shipping address", "Payment details", "Review order"]
    };
  }

  getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return (
          <div className="checkout-shipping-container">
            <form noValidate>
              <div className="row">
                <TextField
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  margin="normal"
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  id="phone"
                  fullWidth
                  label="Phone"
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                />
              </div>
              <div className="row">
                <TextField
                  margin="normal"
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
                <TextField
                  margin="normal"
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="confirmPassword"
                  id="confirmPassword"
                />
              </div>
            </form>
          </div>
        );
      case 1:
        return (
          <div className="checkout-payment-cpntainer">Payment Details</div>
        );
      case 2:
        return <div className="checkout-review-container">Review Order</div>;
    }
  };

  handleNext = () => {
    this.setState({ activeStep: this.state.activeStep + 1 });
  };

  handleBack = () => {
    this.setState({ activeStep: this.state.activeStep - 1 });
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
                <Leftmenu />
              </div>
              <div
                className={context.state.leftMenu ? "small-body" : "large-body"}
              >
                <Card className="checkout-container">
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      Checkout
                    </Typography>
                    <Stepper activeStep={this.state.activeStep}>
                      {this.state.steps.map(label => (
                        <Step key={label}>
                          <StepLabel>{label}</StepLabel>
                        </Step>
                      ))}
                    </Stepper>
                    <div className="checkout-contents-container">
                      {this.getStepContent(this.state.activeStep)}
                    </div>
                    <div className="checkout-actions">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleNext}
                      >
                        {this.state.activeStep === this.state.steps.length - 1
                          ? "Place Order"
                          : "Next"}
                      </Button>
                      <Button
                        disabled={this.state.activeStep === 0}
                        onClick={this.handleBack}
                      >
                        Back
                      </Button>
                    </div>
                  </CardContent>
                  <CardActions className="right-align" />
                </Card>
              </div>
            </div>
            <Footer />
          </Fragment>
        )}
      </FoodieContext.Consumer>
    );
  }
}

export default Checkout;
