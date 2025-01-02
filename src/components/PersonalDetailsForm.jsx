import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const PersonalDetailsForm = ({ formData, handleChange }) => (
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
        Personal Details
      </Typography>
      <form>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="First Name"
            name="firstName"
            variant="standard"
            placeholder="Enter your first name"
            required
            fullWidth
            value={formData.firstName}
            onChange={handleChange}
          />
          <TextField
            label="Last Name"
            name="lastName"
            variant="standard"
            placeholder="Enter your last name"
            required
            fullWidth
            value={formData.lastName}
            onChange={handleChange}
          />
          <TextField
            label="Job Title"
            name="jobTitle"
            variant="standard"
            placeholder="Enter your title"
            required
            fullWidth
            value={formData.jobTitle}
            onChange={handleChange}
          />
          <TextField
            label="Phone Number"
            name="phone"
            variant="standard"
            placeholder="Enter your phone number"
            type="tel"
            required
            fullWidth
            value={formData.phone}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            name="email"
            variant="standard"
            placeholder="Enter your email"
            type="email"
            required
            fullWidth
            value={formData.email}
            onChange={handleChange}
          />

        <TextField
            label="Discription"
            name="discription"
            variant="standard"
            placeholder="Enter your discription"
            type="text"
            required
            fullWidth
            value={formData.discription}
            onChange={handleChange}
          />
        </Box>
      </form>
    </Container>
  </Box>
);


export default PersonalDetailsForm

