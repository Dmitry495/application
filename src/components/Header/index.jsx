import React from 'react';
import AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import style from './styles.module.css';

export const CardHeader = ({childer, user}) => { 
  

  return (
    <AppBar position="static">
    <Toolbar>
     
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
      <a href="https://react-learning.ru/">Remix</a>
      </Typography>
      <div>
        {user.email && <span>{user.email}</span>}
        <br/>
        {user.name && <span>{user.name} : {user.about}</span>}
      </div>
      <a href="https://react-learning.ru/">Home</a>
      <a href="https://react-learning.ru/">Remix Docs</a>
      <a href="https://github.com/Dmitry495">GitHub</a>
    </Toolbar>
  </AppBar>
  );  
};
