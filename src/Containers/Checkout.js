import React, { Component, Fragment } from "react";

import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

//Components
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Leftmenu from "../Components/LeftMenu";
import { FoodieContext } from "../Components/FoodieContext";
import Icons from "./../assets/SvgIcons";

// CSS
import "./Checkout.scss";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      steps: ["Review Order", "Shipping Address", "Payment Details"],
      products: []
    };
  }

  getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return (
          <FoodieContext.Consumer>
            {context => (
              <div className="checkout-review-container">
                <div className="row divider">
                  <span className="col-lg-2 col-md-2 col-sm-5 col-xs-5 review-title">
                    Product
                  </span>
                  <span className="col-lg-3 col-md-8 col-sm-12 col-xs-12 text-center-alig review-title">
                    Quantity
                  </span>
                  <span className="col-lg-2 col-md-2 col-sm-5 col-xs-5 text-right-align review-title">
                    Price
                  </span>
                </div>
                {context.state.products.map(product => (
                  <div className="row review-items" key={product.id}>
                    <span className="col-lg-2 col-md-2 col-sm-5 col-xs-5">
                      {product.title}
                    </span>
                    <span className="col-lg-3 col-md-8 col-sm-12 col-xs-12 text-center-alig">
                      {product.count} * &#8377; {product.price}
                      <Fab
                        variant="extended"
                        size="small"
                        aria-label="Add"
                        className="no-shadow ml-2"
                        disableRipple
                      >
                        {product.count > 0 && (
                          <Icons.MinusIcon
                            color="secondary"
                            className="mr-2"
                            onClick={() =>
                              context.state.decreamentCheckout(product)
                            }
                          />
                        )}
                        {product.count > 0 ? (
                          product.count
                        ) : (
                          <span
                            onClick={() =>
                              context.state.increamentCheckout(product)
                            }
                          >
                            Add
                          </span>
                        )}
                        {product.count > 0 && (
                          <AddIcon
                            className="ml-2"
                            color="primary"
                            onClick={() =>
                              context.state.increamentCheckout(product)
                            }
                          />
                        )}
                      </Fab>
                    </span>
                    <span className="col-lg-2 col-md-2 col-sm-5 col-xs-5 text-right-align">
                      &#8377; {product.count * product.price}
                    </span>
                  </div>
                ))}
                <div className="divider" />
                <div className="row">
                  <span className="col-lg-2 col-md-2 col-sm-5 col-xs-5 review-title">
                    Total
                  </span>
                  <span className="col-lg-3 col-md-8 col-sm-12 col-xs-12 text-center-alig review-title" />
                  <span className="col-lg-2 col-md-2 col-sm-5 col-xs-5 text-right-align review-title">
                    &#8377; {context.state.totalCost}
                  </span>
                </div>
              </div>
            )}
          </FoodieContext.Consumer>
        );
      case 1:
        return (
          <div className="checkout-shipping-container">
            <form noValidate>
              <div className="row">
                <TextField
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  margin="normal"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  name="firstName"
                  autoFocus
                />
                <TextField
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  margin="normal"
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastName"
                />
              </div>
              <div className="row">
                <TextField
                  margin="normal"
                  id="addressLine1"
                  required
                  fullWidth
                  label="Address Line 1"
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                />
              </div>
              <div className="row">
                <TextField
                  margin="normal"
                  id="addressLine2"
                  fullWidth
                  label="Address Line 2"
                  className="col-lg-12 col-md-12 col-sm-12 col-xs-12"
                />
              </div>
              <div className="row">
                <TextField
                  margin="normal"
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  fullWidth
                  required
                  name="city"
                  label="City"
                  id="city"
                />
                <TextField
                  margin="normal"
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  fullWidth
                  name="state"
                  label="State"
                  id="state"
                />
              </div>
              <div className="row">
                <TextField
                  margin="normal"
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  fullWidth
                  required
                  name="zip"
                  label="Zip Code"
                  id="zip"
                />
                <TextField
                  margin="normal"
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  fullWidth
                  required
                  name="country"
                  label="Country"
                  id="country"
                />
              </div>
            </form>
          </div>
        );
      case 2:
        return (
          <div className="checkout-payment-container">
            <form noValidate>
              <div className="row">
                <TextField
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  margin="normal"
                  required
                  fullWidth
                  id="cardholderName"
                  label="Card Holder Name"
                  name="cardholderName"
                />
                <TextField
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  margin="normal"
                  required
                  fullWidth
                  id="cardNumber"
                  label="Card Number"
                  name="cardNumber"
                />
              </div>
              <div className="row">
                <TextField
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  margin="normal"
                  required
                  fullWidth
                  id="expiryDate"
                  label="Expiry Date"
                  name="expiryDate"
                  autoFocus
                />
                <TextField
                  className="col-lg-6 col-md-6 col-sm-12 col-xs-12"
                  margin="normal"
                  required
                  fullWidth
                  id="cvv"
                  label="CVV"
                  name="cvv"
                />
              </div>
            </form>
          </div>
        );
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
                <Leftmenu routeStack={this.props.history} />
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
