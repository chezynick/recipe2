import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const DetailBox = ({ recipe, setDetailDisplay }) => {
	const clickHandler = () => {
		setDetailDisplay(false);
	};
	return (
		<DetailStyled>
			<div>
				<img src={recipe.image} alt={recipe.title} />
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
	img {
		width: 90%;
		height: auto;
		border-radius: 0.5rem;
		margin: 2%;
	}
`;
const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	height: 100%;
	a {
		color: #fb1970;
		flex-direction: row;
		margin-left: auto;
		margin-right: auto;
	}
`;
