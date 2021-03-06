import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// SCSS
import "./LeftMenu.scss";

class Leftmenu extends Component {
  constructor(props) {
    super(props);
  }
  menus = [
    {
      label: "Restuarants",
      value: "/collections"
    },
    {
      label: "Get Aways",
      value: "/getaways"
    },
    {
      label: "Breakfast",
      value: "/breakfast"
    },
    {
      label: "Lunch",
      value: "/lunch"
    },
    {
      label: "Dinner",
      value: "/dinner"
    }
  ];

  prepareMenuItem = menu => {
    return (
      <ListItem
        button
        onClick={this.onMenuSelection(menu)}
        key={menu.value}
        className="menu-item"
      >
        <ListItemText primary={menu.label} />
      </ListItem>
    );
  };

  onMenuSelection = menu => () => {
    this.props.routeStack.push(menu.value);
  };

  render() {
    return (
      <div className="menu-container">
        <List
          component="nav"
          aria-label="Main mailbox folders"
          className="pt-4"
        >
          {this.menus.map(menu => {
            return this.prepareMenuItem(menu);
          })}
        </List>
      </div>
    );
  }
}

export default Leftmenu;
