import React from "react";
import Button from '@material-ui/core/Button';
import useProtectedPage from "../../hooks/useProtectedPage";
import PostCard from "../../components/PostCard/PostCard";
import useRequestData from "../../hooks/useRequestData"
import {BASE_URL} from "../../constants/url"
import { PostListContainer, AddPostButton } from "./Styled"
import { goToPost } from "../../routes/coordinators";
import { useHistory } from "react-router-dom";

const FeedPage = () => {
  useProtectedPage()
  const history = useHistory()

  const posts = useRequestData([], `${BASE_URL}/posts`)
  console.log(posts)

  const onClickCard = (id) => {
    goToPost(history, id)
  }

  const postList = posts.map((post)=>{
    return <PostCard
    key={post.id}
    username={post.username}
    title={post.title}
    body={post.body}
    commentCount={post.commentCount}
    createdAt={post.createdAt}
    onClick={() => onClickCard(post.id)}
  />
  })
  
  return (
    <PostListContainer>
      

      {postList}
      <AddPostButton 
      color="secondary" 
      href="/newpost"
      >
        <h1>+</h1>
      </AddPostButton>


      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>
    </PostListContainer>
  );
}

export default FeedPage;
