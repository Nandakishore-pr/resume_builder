import React, { useState } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';



const CertificateForm = ({ formData, handleChange }) => (
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
        Certificates
      </Typography>
      <form>
        <Box display="flex" flexDirection="column" gap={2}>
          <TextField
            label="Certificate"
            name="certificate"
            variant="standard"
            placeholder="Enter your certificate name"
            required
            fullWidth
            value={formData.certificate}
            onChange={handleChange}
          />
          <TextField
            label="Certificate Description"
            name="certificateDescription"
            variant="standard"
            placeholder="Enter your certificate description"
            required
            fullWidth
            value={formData.certificateDescription}
            onChange={handleChange}
          />
        </Box>
      </form>
    </Container>
  </Box>
);

export default CertificateForm;
