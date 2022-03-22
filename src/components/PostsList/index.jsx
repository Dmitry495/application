import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Grid  } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Post } from "../Post";

export const PostsList = ({postsData}) => {
  return (
    <>  
        <Grid container spacing={2}>
            {postsData.map(post => <Post key={post._id} {...post}/>)}
        </Grid>
    </>
  ); 
};