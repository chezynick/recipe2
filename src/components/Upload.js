import React, { useState } from 'react';
import styled from 'styled-components';
import firebase from '../firebase';
import { useHistory } from 'react-router-dom';

const Upload = () => {
	const [newCourse, setNewCourse] = useState(false);
	const [newTitle, setNewTitle] = useState('');
	const [newLink, setNewLink] = useState('');
	const [newDescription, setNewDescription] = useState('');
	const [newImage, setNewImage] = useState('');

	const [errors, setErrors] = useState({
		titleError: '',
		timeError: '',
		elevationError: '',
		distanceError: '',
		imageError: '',
	});
	//event handlers
	const clickHandler = () => {
		setNewCourse(!newCourse);
	};
	const titleHandler = (e) => {
		setNewTitle(e.target.value);
	};
	const descriptionHandler = (e) => {
		setNewDescription(e.target.value);
	};
	const linkHandler = (e) => {
		setNewLink(e.target.value);
	};
	const imageHandler = (e) => {
		setNewImage(e.target.value);
	};
	//submit handler
	const History = useHistory();
	const submitHandler = () => {
		if (newTitle === '' || newLink === '' || newImage === '') {
			console.log('not correct');
			let path = `/`;
			History.push(path);
		} else {
			firebase.firestore().collection('recipes').add({
				title: newTitle.toLowerCase(),
				description: newDescription,
				link: newLink,
				image: newImage,
				course: newCourse,
			});

			let path = `/`;
			History.push(path);
		}
	};

	return (
		<UploadStyle>
			<h3>Add your latest Recipe here...</h3>
			<FormStyle>
				<h3>Title :</h3>
				<textarea cols="20" rows="1" value={newTitle} onChange={titleHandler}></textarea>
				<h3>Description :</h3>
				<textarea cols="20" rows="1" value={newDescription} onChange={descriptionHandler}></textarea>
				<h3>Link :</h3>
				<textarea cols="20" rows="1" value={newLink} onChange={linkHandler}></textarea>
				<h3>Image link :</h3>
				<textarea cols="20" rows="1" value={newImage} onChange={imageHandler}></textarea>
				{newCourse ? <ButtonTrue>Mains</ButtonTrue> : <ButtonFalse onClick={clickHandler}>Mains</ButtonFalse>}
				{newCourse ? (
					<ButtonFalse onClick={clickHandler}>Dessert</ButtonFalse>
				) : (
					<ButtonTrue>Dessert</ButtonTrue>
				)}
			</FormStyle>
			<ButtonTrue onClick={submitHandler}>Add Recipe</ButtonTrue>
		</UploadStyle>
	);
};

export default Upload;

const UploadStyle = styled.div`
	margin: 10% auto;
	padding: 3%;
	width: 80%;
	height: auto;
	box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);
	border-radius: 0.5rem;
	text-align: center;
	color: #fb1970;
`;
const FormStyle = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-row-gap: 20px;
	width: 100%;
	height: 100%;
	text-align: center;
	margin: 2%;
	padding: 1%;
	textarea {
		margin: auto;
		text-align: center;
		font-size: larger;
	}
`;
const ButtonTrue = styled.button`
	width: 50%;
	background-color: #fb1970;
	color: white;
	margin: auto;
	font-size: larger;
`;
const ButtonFalse = styled.button`
	width: 50%;
	background-color: lightgray;
	color: #555555;
	opacity: 0.5;
	font-size: larger;
	margin: auto;
`;
