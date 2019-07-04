// React Context for Foodie App.
// Later point of the course, many data for store will be fetched or manipulated here

import React, { Component } from "react";

export const FoodieContext = React.createContext({});

class FoodieProvider extends Component {
  findIndex = product => {
    const products = this.state.products;
    return products.findIndex(item => product.id === item.id);
  };
  state = {
    checkout: 0,
    products: [],
    leftMenu: window.screen.availWidth > 480,
    increamentCheckout: product => {
      const index = this.findIndex(product);
      const products = this.state.products;
      let checkout = this.state.checkout;
      if (index !== -1) {
        products[index].count++;
      } else {
        product.count = 1;
        products.push(product);
      }
      checkout++;
      this.setState({ products, checkout });
    },
    decreamentCheckout: product => {
      const index = this.findIndex(product);
      const products = this.state.products;
      let checkout = this.state.checkout;
      if (product.count > 1) {
        products[index] = product;
      } else {
        products.splice(index, 1);
      }
      product.count--;
      checkout--;
      this.setState({ products, checkout });
    },
    toggleLeftMenu: () => {
      this.setState({ leftMenu: !this.state.leftMenu });
    }
  };
  render() {
    return (
      <FoodieContext.Provider value={{ state: this.state }}>
        {this.props.children}
      </FoodieContext.Provider>
    );
  }
}

export default FoodieProvider;
