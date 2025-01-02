import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';


const ExperienceForm = ({ formData, handleChange }) => (
    <Box 
      boxShadow={3}
      border={1}
      borderColor="grey.300"
      borderRadius={2}
      paddingBottom={4}
      paddingTop={4}
      width="100%"
    >
      <Container maxWidth="">
        <Typography variant="h4" gutterBottom>
          Experience
        </Typography>
        <form>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Company Name"
              name="companyName"
              variant="standard"
              placeholder="Enter your company name"
              required
              fullWidth
              value={formData.companyName}
              onChange={handleChange}
            />
            <TextField
              label="Year of Experience"
              name="experienceYear"
              variant="standard"
              placeholder="Enter your year of experience"
              required
              fullWidth
              value={formData.experienceYear}
              onChange={handleChange}
            />
          </Box>
        </form>
      </Container>
    </Box>
  );

  
export default ExperienceForm