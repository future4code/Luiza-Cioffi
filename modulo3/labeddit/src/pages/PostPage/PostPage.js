import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import useRequestPost from '../../hooks/useRequestPost'
import useRequestData from "../../hooks/useRequestData";
import Typography from '@material-ui/core'
import { ScreenContainer, PostContainer } from './Styled'
import { getPost } from "../../services/posts";
import axios from "axios";
import { BASE_URL } from "../../constants/url"

export default function PostPage() {

  useProtectedPage()
  const params = useParams()
  console.log(params)
  
  const posts = useRequestData([], `${BASE_URL}/posts`)
  console.log(posts)

  const comments = useRequestPost({}, `${BASE_URL}/posts/${params.id}/comments`)
  console.log(comments)


  
  // const commentsList = comments.map((comments)=>{
  //   return <PostCard
  //   key={comments.id}
  //   username={comments.username}
  //   body={comments.body}
  //   userVote={comments.userVote}
  //   createdAt={comments.createdAt}
  //   voteSum={comments.voteSum}
    // onClick={() => onClickCard(post.id)}
  // />
//  })

  return (
    <div>
      <p>PostPage</p>
      <ScreenContainer>            
        <PostContainer>
          {/* {commentsList} */}
        </PostContainer>
      </ScreenContainer>
    </div>
  );
}