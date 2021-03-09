import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import AnnaSwing from "assets/img/faces/anna-swing.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Meet Anna!</h2>
      <div>
        <GridContainer justify="center">
          <GridItem>
            <Card plain>
              <GridItem xs={8} sm={8} md={4} className={classes.itemGrid}>
                <img src={AnnaSwing} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Anna Hope
                <br />
                <small className={classes.smallTitle}>Doctor of Physical Therapy</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  Here is where we can decide what Anna would like to say about herself!
                </p>
              </CardBody>
              <CardFooter className={classes.justifyCenter}/>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
