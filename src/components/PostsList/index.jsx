import React from "react";
import { Grid  } from '@mui/material';
import { Post } from "../Post";

export const PostsList = ({postsData, onPostLike, currentUser}) => {
  
  return (
    <>  
        <Grid container spacing={2} sx={{mb: 5}}>
            {postsData.map(({__v, ...post}) => {

            return <Post 
                      key={post._id} 
                      {...post} 
                      onPostLike={onPostLike}
                      currentUser={currentUser}
                    />

            })}
        </Grid>
    </>
  ); 
};