import React from 'react';
import './Details.css'
// import Template1 from '../components/Template1';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import Container from '@mui/material/Container';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';
import CertificateForm from '../components/CertificateForm'
import EducationForm from '../components/EducationForm'
import SkillsForm from '../components/SkillsForm'
import ProjectForm from '../components/ProjectForm'
import ExperienceForm from '../components/ExperienceForm'
import PersonalDetailsForm from '../components/PersonalDetailsForm'

const Details = () => {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      jobTitle: '',
      phone: '',
      email: '',
      description: '',
      collegeName: '',
      graduationYear: '',
      skill1: '',
      skill2: '',
      skill3: '',
      skill4: '',
      skill5: '',
      companyName: '',
      experienceYear: '',
      project:'',
      projectDiscription:'',
      certificate:'',
      ceritificateDiscription:''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };
  
    const handleSubmit = () => {
      const requiredFields = [
        'firstName',
        'lastName',
        'jobTitle',
        'email',
        'collegeName',
        'graduationYear',
        'skill1',
      ];
      const missingFields = requiredFields.filter(field => formData[field].trim() === '');
  
      if (missingFields.length === 0) {
        setError(''); // Clear the error message if all fields are filled
        navigate('/resume', { state: { formData } }); // Pass formData to ResumePage
      } else {
        setError(`Please fill in all required fields`); // Set error message if not
        setOpenSnackbar(true); // Open the Snackbar
      }
    };
  
    const handleCloseSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
    };
  
    return (
      <Box
        display="flex"
        backgroundColor = "white"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
        boxShadow={3}
        border={1}
        borderColor="grey.300"
        borderRadius={2}
        marginTop={8}
        marginLeft={45}
        marginRight={45}
        marginBottom={8}
        paddingTop={4}
        paddingLeft={6}
        paddingRight={10}
        paddingBottom={6}
        minHeight="100vh"
      >
        <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={handleCloseSnackbar}>
          <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
            {error}
          </Alert>
        </Snackbar>
  
        <Grid container spacing={8} justifyContent="flex-start">
          <Grid item xs={12} sm={6} md={6}>
            <PersonalDetailsForm formData={formData} handleChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <SkillsForm formData={formData} handleChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <EducationForm formData={formData} handleChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ExperienceForm formData={formData} handleChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ProjectForm formData={formData} handleChange={handleChange} />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <CertificateForm formData={formData} handleChange={handleChange} />
          </Grid>
        </Grid>
  
        <Box mt={4}>
          <Button
            style={{ padding: '10px 20px', fontSize: '16px' }} 
            variant="contained" 
            onClick={handleSubmit}
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Box>
      </Box>
    );
};

export default Details;
