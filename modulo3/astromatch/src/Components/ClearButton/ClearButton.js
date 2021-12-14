import React from 'react'
import {connect} from 'react-redux'
import {clearSwipes} from '../../actions/profiles'
import styled from 'styled-components'

const ClearButton = styled.button`
	position: fixed;
	bottom: 5px;
	right: 5px;
`

function Clear() {
    const clearSwipes = () => {
        axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/darvas/clear')
    }
        
    return (
      <div>
        <ClearButton >Limpar Matches</ClearButton>
      </div>
    );
}
  
export default Clear