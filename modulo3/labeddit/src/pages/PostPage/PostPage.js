import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";

const PostPage = () => {

  useProtectedPage()

  return (
    <div>
      <p>PostPage</p>
    </div>
  );
}

export default PostPage;