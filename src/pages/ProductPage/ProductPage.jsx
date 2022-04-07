import React, { useState, useEffect } from "react";
import api from '../../utils/Api';
import { OnePost } from "../../components/OnePost";
import { useParams } from "react-router-dom";

export const PagePost = ({currentUser, handlePostLike, posts}) => { 
  const [post, setPost] = useState([]);
  const { postID } = useParams();


  useEffect(() => {
    api.getPostById(postID)
      .then((postData) => {
        setPost(postData);
      })
  },[posts])

  return (
    <>
        <OnePost {...post} currentUser={currentUser} onPostLike={handlePostLike}/>
    </>
  );  
};