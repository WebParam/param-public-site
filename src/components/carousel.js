import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  carouselDiv: {
    width: "100%"
  },
  navButtonWrapper: {
    display: "flex",
    alignItems: "center"
  },
  navButton: {
    backgroundColor: "transparent",
    color: "black"
  }
}));

const CarouselComp = ({ children }) => {
  const classes = useStyles();

  console.log("children: ", children);
  return (
    <div className={classes.carouselDiv}>
      <Carousel
        autoPlay={false}
        navButtonsAlwaysVisible={true}
        animation="slide"
        indicators={false}
        cycleNavigation={false}
        NextIcon={<ChevronRightIcon />}
        fullHeightHover={false}
        navButtonsWrapperProps={{
          className: classes.navButtonWrapper
        }}
        NavButton={({ onClick, className, style, next, prev }) => {
          return (
            <Button
           
            >
              {next && <ChevronRightIcon />}
              {prev && <ChevronLeftIcon />}
            </Button>
          );
        }}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default CarouselComp;
