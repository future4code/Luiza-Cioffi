import styled from 'styled-components'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { color4 } from '../../constants/colors'

export const PostCardContainer = styled(Card)`
  width: 250px;
  margin: 10%
`

export const PostCardContent = styled(CardContent)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  background-color: "color4";
  width: align;
`