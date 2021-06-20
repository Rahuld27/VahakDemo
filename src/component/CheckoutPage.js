import React, { useState } from "react";
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  CircularProgress,
  CheckoutSuccess
} from "@material-ui/core";
import { Formik, Form } from "formik";

import page1 from "./page1";
import page2 from "./page2";
import page3 from "./page3";
import page4 from "./page4";
import page5 from "./page5";

import useStyles from "@material-ui/core/styles";

const steps = [
  page1,
  "Place your bid",
  "Verify Via OTP",
  "Verify OTP",
  "Summary & submit bid"
];

function _renderStepContent(step) {
  switch (step) {
    case 0:
      return <page1 />;
    case 1:
      return <page2 />;
    case 2:
      return <page3 />;
    case 3:
      return <page4 />;
    case 4:
      return <page5 />;
    default:
      return <div>Not Found</div>;
  }
}

export default function CheckoutPage() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const isLastStep = activeStep === steps.length - 1;

  function _sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function _submitForm(values, actions) {
    await _sleep(1000);
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);

    setActiveStep(activeStep + 1);
  }

  function _handleSubmit(values, actions) {
    if (isLastStep) {
      _submitForm(values, actions);
    } else {
      setActiveStep(activeStep + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  }

  function _handleBack() {
    setActiveStep(activeStep - 1);
  }

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Vahak
      </Typography>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <React.Fragment>
        {activeStep === steps.length ? (
          <CheckoutSuccess />
        ) : (
          <Formik onSubmit={_handleSubmit}>
            {({ isSubmitting }) => (
              <Form id={"newformId"}>
                {_renderStepContent(activeStep)}

                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={_handleBack} className={classes.button}>
                      Back
                    </Button>
                  )}
                  <div className={classes.wrapper}>
                    <Button
                      disabled={isSubmitting}
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.button}
                    >
                      {isLastStep ? "Summary & submit bid" : "Next"}
                    </Button>
                    {isSubmitting && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </React.Fragment>
    </React.Fragment>
  );
}