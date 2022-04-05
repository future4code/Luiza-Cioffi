import React from 'react';
import error_image from '../../assets/error_image.png'
import { ErrorPageContainer, ErrorImage} from './styled'

const ErrorPage = () => {
  return (
    <ErrorPageContainer>
      <ErrorImage src={error_image}/>
    </ErrorPageContainer>
  );
}

export default ErrorPage;