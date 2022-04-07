import React from "react";
import { PostsList } from "../../components/PostsList";
import { Pagination } from "@mui/material";


export const PageAllPosts = ({currentUser, posts, handlePostLike, handlePostDelete}) => { 

  return (
    <>
         <PostsList 
          postsData={posts} 
          onPostLike={handlePostLike} 
          currentUser={currentUser}
          handlePostDelete = {handlePostDelete}
          />
        <Pagination/>
        
    </>
  );  
};