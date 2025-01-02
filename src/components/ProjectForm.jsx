import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';


const ProjectForm = ({ formData, handleChange }) => (
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
          Project
        </Typography>
        <form>
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              label="Project"
              name="project"
              variant="standard"
              placeholder="Enter your project name"
              required
              fullWidth
              value={formData.project}
              onChange={handleChange}
            />
            <TextField
              label="Project discripttion"
              name="projectDiscription"
              variant="standard"
              placeholder="Enter your project discription"
              required
              fullWidth
              value={formData.projectDiscription}
              onChange={handleChange}
            />
          </Box>
        </form>
      </Container>
    </Box>
  );

export default ProjectForm