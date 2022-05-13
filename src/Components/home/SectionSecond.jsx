import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
      
      imgPath:
        "https://images.pexels.com/photos/890580/pexels-photo-890580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
     
      imgPath:
        "https://images.pexels.com/photos/6574740/pexels-photo-6574740.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      
      imgPath:
        "https://images.pexels.com/photos/47013/pexels-photo-47013.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      imgPath:
        "https://images.pexels.com/photos/271458/pexels-photo-271458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      imgPath: "https://images.pexels.com/photos/1893566/pexels-photo-1893566.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      imgPath:
        "https://images.pexels.com/photos/9642173/pexels-photo-9642173.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940 ",
    },
    {
      imgPath:
        "https://images.pexels.com/photos/4051731/pexels-photo-4051731.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className="carusel_container">
        <Box className="carusel_container" sx={{ maxWidth: 1000, flexGrow: 1, mx: "auto" }}>
          <Paper
          className="carusel_container"
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 30,
              pl: 2,
            }}
          >
            <Typography>{images[activeStep].label}</Typography>
          </Paper>
          <AutoPlaySwipeableViews
          className="carusel_container"
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
          >
            {images.map((step, index) => (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                  className="carusel_container"
                    component="img"
                    sx={{
                      height: 550,
                      display: "block",
                      maxWidth: 1000,
                      overflow: "hidden",
                      width: "100%",
                    }}
                    src={step.imgPath}
                    alt={step.label}
                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>
          <MobileStepper
          className="carusel_container"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            nextButton={
                <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === "rtl" ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button
                size="small"
                onClick={handleBack}
                disabled={activeStep === 0}
              >
                {theme.direction === "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Back
              </Button>
            }
          />
        </Box>
      </div>
    </>
  );
}

export default SwipeableTextMobileStepper;

