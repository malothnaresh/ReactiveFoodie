import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import tileData from "../assets/static-data/TileData";
import { FoodieContext } from "./FoodieContext";

import Icons from "./../assets/SvgIcons";

// SCSS
import "./GridContainer.scss";

class GridContainer extends Component {
  decrease = () => {
    console.log("yes");
  };

  increase = () => {
    console.log("no");
  };

  render() {
    return (
      <FoodieContext.Consumer>
        {context => (
          <div className="grid-container">
            {tileData.map(tile => (
              <Card key={tile.img} className="widget-card">
                <CardActionArea>
                  <CardMedia
                    className="card-media"
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={tile.img}
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {tile.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="right-align">
                  <Fab
                    variant="extended"
                    size="small"
                    aria-label="Add"
                    className="no-shadow"
                    disableRipple
                  >
                    {tile.count > 0 && (
                      <Icons.MinusIcon
                        color="secondary"
                        className="mr-2"
                        onClick={() => context.state.decreamentCheckout(tile)}
                      />
                    )}
                    {tile.count > 0 ? (
                      tile.count
                    ) : (
                      <span
                        onClick={() => context.state.increamentCheckout(tile)}
                      >
                        Add
                      </span>
                    )}
                    {tile.count > 0 && (
                      <AddIcon
                        className="ml-2"
                        color="primary"
                        onClick={() => context.state.increamentCheckout(tile)}
                      />
                    )}
                  </Fab>
                </CardActions>
              </Card>
            ))}
          </div>
        )}
      </FoodieContext.Consumer>
    );
  }
}

export default GridContainer;
