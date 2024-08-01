import { Add } from '@mui/icons-material';
import { Grid } from '@mui/material';
import React from 'react';
import CreateEventButtonOverlay from './CreateEventButtonOverlay';

const Navbar: React.FC = () => {
  return (
    <Grid item container className="navbar">
      <CreateEventButtonOverlay />
    </Grid>
  );
};

export default Navbar;
