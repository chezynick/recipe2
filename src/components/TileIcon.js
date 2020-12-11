import React from 'react';
import styled from 'styled-components';
import firebase from 'firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const TileIcon = ({ recipe }) => {
	return (
		<TileStyle>
			<img src={recipe.image} alt={recipe.title} />
			<InfoBox>
				<FontAwesomeIcon icon={faInfoCircle} />
				<h4>{recipe.title}</h4>
				<FontAwesomeIcon icon={faTrashAlt} />
			</InfoBox>
		</TileStyle>
	);
};

export default TileIcon;
const TileStyle = styled.div`
	height: auto;
	width: 300px;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin: 3%;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
	border-radius: 0.5rem;
	img {
		width: 100%;
		height: 80%;
		overflow: hidden;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
	}
	h4 {
		padding: 5px;
	}
`;
const InfoBox = styled.div`
	width: 90%;
	margin: 0 5%;
	height: 20%;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
