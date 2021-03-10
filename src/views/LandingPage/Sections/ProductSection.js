import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DoneIcon from '@material-ui/icons/Done';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk options</h2>
          <h5 className={classes.description}>
            One of the best things about PT is we have a wide variety of ways we can provide treatment.
            You may have another doctor that has referred you, or you may be seeking therapy privately before or after
            a procedure. We're here to help!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Evaluation"
              description="Evaluations require the following components in selecting the correct evaluation
              level: History, Examination, Clinical Presentation, and Clinical Decision Making.
              Additional guiding factors include coordination, consultation, and collaboration of care consistent with
              the nature of the problem and the needs of the patient."
              icon={Assignment}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Treatment"
              description="Treatment begins after the completion of your evaluation and the development of your plan of care.
              You will be provided with a specialized path to recovery that’s specific to your unique needs,
              not a one-size-fits-all plan. Your healing is important to us. That’s why we promise to give you the most
              compassionate and effective care geared at helping you feel like you."
              icon={SupervisorAccountIcon}
              iconColor="primary"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Graduation"
              description="The best part! After completion of your treatment plan and having reached all goals we set
              for you to achieve, you're done! We do our best to get you in and out at an appropriate pace. We would
              love to see all of you every day, but the goal is get to back to feeling like yourself!"
              icon={DoneIcon}
              iconColor="success"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
