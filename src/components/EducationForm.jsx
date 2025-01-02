import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';


const EducationForm = ({ formData, handleChange }) => (
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
          Education
        </Typography>
        <form>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="College Name"
              name="collegeName"
              variant="standard"
              placeholder="Enter your college name"
              required
              fullWidth
              value={formData.collegeName}
              onChange={handleChange}
            />
            <TextField
              label="Year of Graduation"
              name="graduationYear"
              variant="standard"
              placeholder="Enter your year of graduation"
              required
              fullWidth
              value={formData.graduationYear}
              onChange={handleChange}
            />
          </Box>
        </form>
      </Container>
    </Box>
  );

  
export default EducationForm