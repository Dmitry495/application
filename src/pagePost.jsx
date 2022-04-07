// import React, { useState, useEffect } from "react";;
// import { CardHeader, CardFooter} from './components/Header';
// import { Button } from "@mui/material";
// import api from './utils/Api';
// import { DataPost } from "./components/OnePost";


// const ID_POST = "622bd9e806c7d323b8ae4615";

// export const PagePost = () => { 
//   const [post, setPost] = useState([]);

//   const [currentUser, setCurrentUser] = useState({});

//   useEffect(() => {
//     Promise.all([api.getPostById(ID_POST), api.getUserInfo()])
//       .then(([postData, userData]) => {
//         setPost(postData);
//         setCurrentUser(userData);
//       })
//   },[])

//   const handleUpdateUser = (userUpdate) => {
//     api.setUserInfo(userUpdate)
//       .then((newUserData) => {setCurrentUser(newUserData)})
//   }

//   const handlePostLike = ({_id, likes}) => {
//     const isLiked = likes.some((id) => id === currentUser._id)
//     api.changeLikeStatus(_id, isLiked)
//       .then((newPost) => {
//         const newPostsState = posts.map((p) => {
//           console.log('Карточка с сервера: ', newPost);
//           console.log('Карточка из стейта в переборе: ', p);

//           return p._id === newPost._id ? newPost : p
//         })
//         setPosts(newPostsState)
//       })
//   }

//   return (
//     <>
//         <CardHeader user={currentUser} opUpdataUser={handleUpdateUser}/>
//         {/* <React.Fragment> */}
//       {/* <CssBaseline /> */}
//          <Button>Create post</Button>
//          {/* <PostsList postsData={posts} onPostLike={handlePostLike} currentUser={currentUser}/> */}
//         {/* <Pagination page={page} onChange={setPage}/> */}
//     {/* </React.Fragment> */}
//         <DataPost {...post} currentUser={currentUser} onPostLike={handlePostLike}/>

//         <CardFooter/>
//     </>
//   );  
// };