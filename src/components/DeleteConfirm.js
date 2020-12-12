import React from 'react';
import styled from 'styled-components';
import firebase from '../firebase';

const DeleteConfirm = ({ recipe, setDeleteDisplay }) => {
	const cancelHandler = () => {
		setDeleteDisplay(false);
	};
	const confirmHandler = () => {
		firebase
			.firestore()
			.collection('recipes')
			.doc(recipe.id)
			.delete()
			.catch(function (error) {
				console.error('Error writing document: ', error);
			});
		setDeleteDisplay(false);
	};

	return (
		<DeleteStyle>
			<h3>Are you sure you want to delete this recipe?</h3>
			<button onClick={confirmHandler}>Delete?</button>
			<button onClick={cancelHandler}>Cancel?</button>
		</DeleteStyle>
	);
};

export default DeleteConfirm;
const DeleteStyle = styled.div`
	position: absolute;

	z-index: 10;
	width: 100%;
	top: 30%;
	height: 100px;
	background-color: #fb1970;
	color: white;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	align-items: center;
	h3 {
		padding: 1% 5%;
	}
`;
