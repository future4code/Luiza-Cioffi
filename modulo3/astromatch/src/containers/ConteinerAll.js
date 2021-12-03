import styled from 'styled-components'
import React from 'react'

const Container = styled.div`
	border: 1px solid black;
    
    position: fixed;
	bottom: 5px;
	right: 5px;
`

function ContainerAll() {
     
    return (
      <div>
        <Container></Container>
      </div>
    );
}
  
export default ContainerAll