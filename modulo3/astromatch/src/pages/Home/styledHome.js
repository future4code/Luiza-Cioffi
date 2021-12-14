import styled from "styled-components";

export const GoToMatchesButton = styled.button`
    border-radius: 50%;
    cursor: pointer;
`

export const ProfilePic = styled.img`
    max-width: 350px;
    max-height: 500px;
    border: 1px;
    position: center;
`

export const DislikeButton = styled.button`
    border-radius: 10%;
    font-size: xx-large;
    cursor: pointer;
    background-color: #F18F7A;
    &:hover {
		background-color: #F0502D;
	};
`

export const LikeButton = styled.button`
    border-radius: 10%;
    font-size: xx-large;
    cursor: pointer;
    position: center;
    background-color: #94ED77;
    &:hover {
		background-color: #4AE817;
	};
`
