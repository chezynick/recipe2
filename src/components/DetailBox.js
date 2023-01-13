import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import TomatoesImage from '../defaultImage/tomatoes.png';

const DetailBox = ({ recipe, setDetailDisplay }) => {
	const clickHandler = () => {
		setDetailDisplay(false);
	};
	const imageOnLoadHandler = (event) => {		
    if (event.currentTarget.className !== "error") {
      event.currentTarget.className = "success";
    }
}
	const imageOnErrorHandler = (event) => {
    event.currentTarget.src = TomatoesImage;
    event.currentTarget.className = "error";
};
	return (
		<DetailStyled>
			<div>
				<img style={{ objectFit: 'cover' }} onLoad={imageOnLoadHandler}
   onError={imageOnErrorHandler} src={recipe.image} onClick={clickHandler} alt={TomatoesImage} />
			</div>
			<InfoBox>
				<h1>{recipe.title}</h1>
				<h3>{recipe.description}</h3>
				<a href={recipe.link}>
					<FontAwesomeIcon icon={faExternalLinkAlt} /> <h3>Link to Recipe</h3>
				</a>
				<h3 onClick={clickHandler}>Click here to close Info box..</h3>
			</InfoBox>
		</DetailStyled>
	);
};

export default DetailBox;

const DetailStyled = styled.div`
	position: fixed;
	width: 84%;
	left: 8%;
	top: 20%;
	height: auto;
	background-color: white;
	color: #fb1970;
	z-index: 10;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: auto;
	overflow: hidden;
	border-radius: 0.5rem;
	@media (max-width: 750px) {
		grid-template-columns: 1fr;
		h1 {
			margin-bottom: 20px;
		}
		h3 {
			margin-bottom: 20px;
		}
	}
	img {
		width: 90%;
		height: 280px;
		border-radius: 0.5rem;
		margin: 2%;
		@media (max-width: 450px) {
			margin: 0%;
		}
	}
	@media (max-width: 450px) {
		overflow: scroll;
		top: 0%;
		width: 100%;
		padding: 10% 0%;
		margin: 0;
		left: 0;
		z-index: 30;
	}
`;
const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 100%;
	align-items: center;
	h3 {
		margin: 2%;
	}
	@media (max-width: 750px) {
		padding: 10%;
	}
	a {
		color: #fb1970;
		flex-direction: row;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 20px;
		h3 {
			margin: 0;
		}
	}
`;
