import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align: center;
  position: space-between;
  margin: 30px;
`

export const AddPostButton = styled(Fab)`
  position: fixed !important;
  right: 20px;
  bottom: 20px;
  z-index: 3;
`