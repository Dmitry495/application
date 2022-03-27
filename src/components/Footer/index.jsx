import React from 'react';
import AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';




export const CardFooter = () => { 

  return (
    <AppBar position="static">
    <Toolbar 
    sx={{
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
      }}>
        Design ©2022 Created by Dmitrii
    </Toolbar>
  </AppBar>
  );  
};
