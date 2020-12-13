import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
//import hidden boxes
import DeleteConfirm from './DeleteConfirm';
import DetailBox from './DetailBox';

const TileIcon = ({ recipe }) => {
	//state for box displays
	const [deleteDisplay, setDeleteDisplay] = useState(false);
	const [detailDisplay, setDetailDisplay] = useState(false);
	//button handlers
	const deleteHandler = () => {
		setDeleteDisplay(true);
	};
	const detailHandler = () => {
		setDetailDisplay(true);
	};

	return (
		<TileStyle key={recipe.id}>
			<img src={recipe.image} alt={recipe.title} onClick={detailHandler} />
			<InfoBox>
				<FontAwesomeIcon color="#fb1970" icon={faInfoCircle} onClick={detailHandler} />
				<h4>{recipe.title}</h4>
				<FontAwesomeIcon color="#fb1970" icon={faTrashAlt} onClick={deleteHandler} />
			</InfoBox>
			{deleteDisplay ? <DeleteConfirm recipe={recipe} setDeleteDisplay={setDeleteDisplay} /> : ''}
			{detailDisplay ? <DetailBox recipe={recipe} setDetailDisplay={setDetailDisplay} /> : ''}
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
	@media (max-width: 600px) {
		width: 100%;
		margin: 5% auto;
	}
	img {
		width: 100%;
		height: 280px;
		overflow: hidden;
		border-top-left-radius: 0.5rem;
		border-top-right-radius: 0.5rem;
		@media (max-width: 450px) {
			height: 330px;
		}
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
