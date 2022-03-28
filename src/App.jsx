import React, { useState, useEffect } from "react";
import { postData } from "./posts";
import { PostsList } from "./components/PostsList";
import { CardHeader} from './components/Header';
import { CardFooter } from "./components/footer";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Button, Pagination } from "@mui/material";
import api from './utils/Api';


export const App = () => { 
  const [posts, setPosts] = useState(postData);
  const [page, setPage] = useState(1);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    Promise.all([api.getPostsList(), api.getUserInfo()])
      .then(([postData, userData]) => {
        setPosts(postData);
        setCurrentUser(userData);
      })
  },[])

  const handleUpdateUser = (userUpdate) => {
    api.setUserInfo(userUpdate)
      .then((newUserData) => {setCurrentUser(newUserData)})
  }

  const handlePostLike = ({_id, likes}) => {
    const isLiked = likes.some((id) => id === currentUser._id)
    api.changeLikeStatus(_id, isLiked)
      .then((newPost) => {
        const newPostsState = posts.map((p) => {
          console.log('Карточка с сервера: ', newPost);
          console.log('Карточка из стейта в переборе: ', p);

          return p._id === newPost._id ? newPost : p
        })
        setPosts(newPostsState)
      })
  }

  return (
    <>
        <CardHeader user={currentUser} opUpdataUser={handleUpdateUser}/>
        <React.Fragment>
      <CssBaseline />
         <Button>Create post</Button>
         <PostsList postsData={posts} onPostLike={handlePostLike} currentUser={currentUser}/>
        <Pagination page={page} onChange={setPage}/>
    </React.Fragment>

        <CardFooter/>
    </>
  );  
};