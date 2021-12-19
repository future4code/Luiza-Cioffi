import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
//import useRequestPost from '../../hooks/useRequestPost'
import Typography from '@material-ui/core'
import { ScreenContainer, PostContainer } from './Styled'
import { getPost } from "../../services/posts";

import axios from "axios";
import { BASE_URL } from "../../constants/url"

export default function PostPage() {

  useProtectedPage()
  const params = useParams()
  // const post = useRequestPost([], `/posts/${params.id}/comments`)
  // console.log(post)
  
  const post = getPost(params)
  console.log(post)

  return (
    <div>
      <p>PostPage</p>
      <ScreenContainer>            
        <PostContainer>
          <h1>{post.title}</h1>
          <h3>{post.body}</h3>
        </PostContainer>
      </ScreenContainer>
    </div>
  );
}