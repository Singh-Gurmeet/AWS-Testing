import React from 'react';
import { Container, Box, Typography, AppBar, Toolbar, IconButton, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const BasicWebpage = () => {
  return (
    <Container >
      <AppBar >
        <Toolbar>
          
          
          <Button color="inherit">Home</Button>
          <Button color="inherit">About</Button>
          <Button color="inherit">Contact</Button>
        </Toolbar>
      </AppBar>
      <div>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
            My Simple Webpage
          </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to My Simple Webpage
        </Typography>
        <Typography variant="body1" paragraph>
          This is a basic webpage designed using Material-UI components.
        </Typography>
        </div>
      <Box mt={4} py={2} bgcolor="primary.main" color="white" textAlign="center">
        <Typography variant="body1">© 2024 My Simple Webpage. All rights reserved.</Typography>
      </Box>
    </Container>
  );
};

export default BasicWebpage;
