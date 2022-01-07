import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    imgPath:
      'https://media.istockphoto.com/photos/video-archives-concept-picture-id1032516536?k=20&m=1032516536&s=612x612&w=0&h=1v1vz3AYBwmgyWvbpP8SzA7uv_CujrukUUgzYFps5wE=',
  },
  {
    imgPath:
      'https://i.pinimg.com/736x/c8/b0/7e/c8b07e380215edaaa1903769586a61dc--music-books-book-stuff.jpg',
  },
  {
    imgPath:
      'https://www.milton-keynes.gov.uk/_images/pagecentre/68663/DigitalBooks%20Banner-IAA.jpg',
  },
  {
    imgPath:
      'https://img.freepik.com/free-photo/female-hands-hold-card-paper-with-text-never-stop-learning-yellow-background-education-study-concept_324489-4428.jpg?size=626&ext=jpg',
  },
  {
    imgPath:
      'https://wallup.net/wp-content/uploads/2017/11/17/357632-library-books-laptop-table-748x468.jpg',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 1515, flexGrow: 1 }}>
      
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: 495,
                  width:1343,
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
