import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';


const SkillsForm = ({ formData, handleChange }) => (
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
          Skills
        </Typography>
        <form>
          <Box display="flex" flexDirection="column" gap={2}>
            {[...Array(5)].map((_, index) => (
              <TextField
                key={index}
                label={`Skill ${index + 1}`}
                name={`skill${index + 1}`}
                variant="standard"
                placeholder={`Enter skill ${index + 1}`}
                fullWidth
                value={formData[`skill${index + 1}`]}
                onChange={handleChange}
              />
            ))}
          </Box>
        </form>
      </Container>
    </Box>
  );


export default SkillsForm