import React from 'react';
import AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { CurrentUserContext } from '../../context/currentUserContext';

import style from './styles.module.css';
import { useContext } from 'react';

export const CardHeader = () => { 
  const currentUser = useContext(CurrentUserContext);
  

  return (
    <AppBar position="static">
    <Toolbar>
     
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <a href="https://react-learning.ru/">Remix</a>
      </Typography>
      <div>
        {currentUser.email && <span>{currentUser.email}</span>}
        <br/>
        {currentUser.name && <span>{currentUser.name} : {currentUser.about}</span>}
      </div>
      <a href="https://react-learning.ru/">Home</a>
      <a href="https://react-learning.ru/">Remix Docs</a>
      <a href="https://github.com/Dmitry495">GitHub</a>
    </Toolbar>
  </AppBar>
  );  
};
