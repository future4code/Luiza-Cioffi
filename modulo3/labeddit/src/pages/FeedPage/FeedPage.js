import React from "react";
import Button from '@material-ui/core/Button';
import useProtectedPage from "../../hooks/useProtectedPage";

const FeedPage = () => {
  useProtectedPage()
  return (
    <div>

      <p>FeedPage</p>
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
    </div>
  );
}

export default FeedPage;
