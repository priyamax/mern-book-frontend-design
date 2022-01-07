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
      'https://wallpaperaccess.com/full/253332.jpg',
  },
  {
    imgPath:
      'https://media.istockphoto.com/vectors/communication-elearning-internet-network-as-knowledge-base-vector-id1059510610?k=20&m=1059510610&s=612x612&w=0&h=E3wbE9HsFSxUh6PcsCobIti-wfFrOD05jYHJl_a3yXQ=',
  },
  {
    imgPath:
      'https://img.freepik.com/free-vector/library-interior-empty-room-reading-with-books-wooden-shelves_33099-1722.jpg?size=626&ext=jpg',
  },
  {
    imgPath:
      'https://i.pinimg.com/736x/c8/b0/7e/c8b07e380215edaaa1903769586a61dc--music-books-book-stuff.jpg',
  },

  {
    imgPath:
      'https://t3.ftcdn.net/jpg/03/43/05/24/360_F_343052485_j694gEh5h4SQpp97ek8DSdEZKnU7AvMk.jpg',
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
                  height: 490,
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
