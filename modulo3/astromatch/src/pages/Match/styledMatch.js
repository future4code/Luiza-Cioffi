import styled from "styled-components";

export const BackButton = styled.button`
	background-color: #FCE0CB;
	border-radius: 10%;
	:hover {
		cursor: pointer;
		background-color: #FACDAC;
	};
`

export const List = styled.li`
  border: 1px solid black;
  :hover {
    background: #F3F3F3;
	cursor: pointer;
  };
  position: relative;
  width: 90%;
  height: 50px;
  padding: 10px;
  display: flex;
  list-style: url("../../img/FireGif.gif");
`

export const ProfileName = styled.h2`
  user-select: none;
  font-weight: bold;
`

export const ProfilePhoto = styled.img`
  max-width: 40px;
  margin-right: 10px;
  border-radius: 40%;
`

export const CleanButton = styled.button`
	background-color: #FCE0CB;
	border-radius: 10%;
	:hover {
		cursor: pointer;
		background-color: #FACDAC;
	};
`