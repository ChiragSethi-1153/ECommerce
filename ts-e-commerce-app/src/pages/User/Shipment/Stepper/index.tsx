import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Paper } from '@mui/material';

const steps = [
  'At Pickup location',
  'Departed from Pickup location',
  'Arrived Destination',
  "Delivered"
];

export default function DeliveryStepper() {
  return (
    <Paper elevation={1} sx={{ width: '100%', m: '50px 10px', height: '80px', display: 'flex', alignItems: "center" }}>
      <Stepper activeStep={1} sx={{
            width: '100%',
            "& .MuiStepConnector-line": {
              border: "2px #E8E8E8 dashed",
            },
        }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Paper>
  )
};