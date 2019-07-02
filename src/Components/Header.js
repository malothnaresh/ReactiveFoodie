import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { withRouter } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";

import { Link } from "react-router-dom";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import Icons from "../assets/SvgIcons";
import { FoodieContext } from "./FoodieContext";

const styles = {
  title: {
    flexGrow: 1
  }
};

class Header extends Component {
  user = JSON.parse(localStorage.getItem("user"));
  menuOptions = [
    {
      label: "Profile",
      value: "profile"
    },
    {
      label: "Log out",
      value: "logout"
    }
  ];
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      selectedIndex: -1
    };
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = index => {
    this.setState({ anchorEl: null, selectedIndex: index });
    if (this.menuOptions[index] && this.menuOptions[index].value === "logout") {
      localStorage.removeItem("user");
      localStorage.removeItem("jwt");
      this.props.history.push("/signin");
    }
  };
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Menu"
            onClick={() => this.props.toggleLeftMenu()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={styles.title}>
            Reactive Foodie
          </Typography>
          {!this.user && (
            <Button type="button" color="inherit" component={Link} to="/signin">
              Login
            </Button>
          )}
          {this.user && (
            <div>
              <FoodieContext.Consumer>
                {context => (
                  <IconButton aria-label="Cart" className="mr-2">
                    <Badge
                      badgeContent={context.state.checkout}
                      color="primary"
                    >
                      <ShoppingCartIcon />
                    </Badge>
                  </IconButton>
                )}
              </FoodieContext.Consumer>
              <IconButton
                aria-label="More"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                <Icons.ProfileIcon />
              </IconButton>

              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
                open={Boolean(this.state.anchorEl)}
                onClose={() => this.handleClose(-1)}
              >
                {this.menuOptions.map((menu, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => this.handleClose(index)}
                    selected={index === this.state.selectedIndex}
                  >
                    {menu.label}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(Header);
