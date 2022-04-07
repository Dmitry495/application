import React, { useState, useEffect } from "react";
import { postData } from "./posts";
import { CardHeader} from './components/Header';
import { CardFooter } from "./components/footer";
import CssBaseline from '@mui/material/CssBaseline';
import api from './utils/Api';
import { PagePost } from "./pages/ProductPage/ProductPage";
import { PageAllPosts } from "./pages/CatalogPage/CatalogPage";
import { Route, Routes } from "react-router-dom";
import { CurrentUserContext } from "./context/currentUserContext";

import s from './index.css';

export const App = () => { 
  const [posts, setPosts] = useState(postData);
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

  const handlePostDelete = (_id) => {
   if(confirm('Удалить?')) {
    api.deletePost(_id)
    .then((data) => {
      const newPostAfterDelete = posts.filter((post) => post._id !== data._id)
      setPosts(newPostAfterDelete)
    })
   }
  }

  return (
    <>
<CurrentUserContext.Provider value={currentUser}>
<CardHeader 
        opUpdataUser={handleUpdateUser}
        />
        <React.Fragment>
      <CssBaseline />
         {/* <PostsList postsData={posts} onPostLike={handlePostLike} currentUser={currentUser}/>
        <Pagination page={page} onChange={setPage}/> */}
       <Routes>
      
        <Route path="/" element={
          <PageAllPosts 
            currentUser = {currentUser}
            posts = {posts}
            handlePostLike = {handlePostLike}
            handlePostDelete = {handlePostDelete}
            />
        }/>

      <Route path="/post/:postID" element={
         <PagePost 
         currentUser = {currentUser} 
         posts = {posts}
         handlePostLike = {handlePostLike}
         />
       }/>

       <Route path="*" element={
       <h1>Страница не найдена</h1>
       }/>

       </Routes>

    </React.Fragment>

        <CardFooter/>
</CurrentUserContext.Provider>
    </>
  );  
};