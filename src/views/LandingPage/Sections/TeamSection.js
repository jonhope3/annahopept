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
                  {/*Here is where we can decide what Anna would like to say about herself!*/}
                  Hi! I'm Anna, thanks for stopping by! A bit about myself: I went to Iowa State University
                  (go Cyclones!), graduating in 2013, where I earned my B.S. in Kinesiology and Health Sciences. After
                  being excited by the medical field and my enthusiasm to help, I decided to pursue a doctoral degree
                  to practice Medicine full-time.
                  <br/>
                  <br/>
                  I attended Des Moines University from to 2014-2017 where I earned my Doctorate of Physical Therapy. I
                  was able to study in Iowa, Nebraska, and Florida, with a wide variety of specializations and patient groups.
                  It was hard to turn down job offers in Florida, but I knew I needed to return to be closer to friends and
                  family!
                  <br/>
                  <br/>
                  I began in Chicago, at the Illinois Bone and Joint Institute, with a focus on treating orthopedic issues
                  arising from surgery recovery, sports injuries, chronic pain, and more. After treating at IBJI for more than 2 years,
                  I began my work at Core Physical Therapy. After studying women's health for several years, and becoming a Pelvic Health Specialist,
                  Core Physical Therapy has given me a chance to prove my ability and lead the company's Women's Health Program.
                  <br/>
                  <br/>
                  I am still excited to be doing the work that I'm doing and I am excited that you stopped by my website!
                  If there's anything that caught your attention or anything you have questions about, please send me a
                  message in the form below!
                  <br/>
                  <br/>
                  - Anna -
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
