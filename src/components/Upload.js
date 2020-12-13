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
		descriptionError: '',
		linkError: '',
		imageError: '',
	});
	//event handlers
	const clickHandler = () => {
		setNewCourse(!newCourse);
	};
	const titleHandler = (e) => {
		setNewTitle(e.target.value);
		if (e.target.value.length < 5 || e.target.value.length > 50) {
			setErrors({ titleError: 'Must be between 5 and 20 characters' });
		} else {
			setErrors({});
		}
	};
	const descriptionHandler = (e) => {
		setNewDescription(e.target.value);
		if (e.target.value.length < 5 || e.target.value.length > 100) {
			setErrors({ descriptionError: 'Must be between 5 and 100 characters' });
		} else {
			setErrors({});
		}
	};
	const linkHandler = (e) => {
		setNewLink(e.target.value);
		if (e.target.value.length < 20) {
			setErrors({ linkError: 'Must be a valid url' });
		} else {
			setErrors({});
		}
	};
	const imageHandler = (e) => {
		setNewImage(e.target.value);
		if (e.target.value.length < 20) {
			setErrors({ imageError: 'Must be a valid image link' });
		} else {
			setErrors({});
		}
	};
	//submit handler
	const History = useHistory();

	const submitHandler = () => {
		firebase.firestore().collection('recipes').add({
			title: newTitle.toLowerCase(),
			description: newDescription,
			link: newLink,
			image: newImage,
			course: newCourse,
		});
		let path = `/`;
		History.push(path);
	};

	return (
		<UploadStyle>
			<h3>Add your latest Recipe here...</h3>
			<FormStyle>
				<h3>Title :</h3>
				<textarea cols="20" rows="1" value={newTitle} onChange={titleHandler}></textarea>
				<p></p>
				<p>{errors.titleError}</p>
				<h3>Description :</h3>
				<textarea cols="20" rows="1" value={newDescription} onChange={descriptionHandler}></textarea>
				<p></p>
				<p>{errors.descriptionError}</p>
				<h3>Link :</h3>
				<textarea cols="20" rows="1" value={newLink} onChange={linkHandler}></textarea>
				<p></p>
				<p>{errors.linkError}</p>
				<h3>Image link :</h3>
				<textarea cols="20" rows="1" value={newImage} onChange={imageHandler}></textarea>
				<p></p>
				<p>{errors.imageError}</p>
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
	@media (max-width: 800px) {
		margin-top: 15%;
	}
	@media (max-width: 600px) {
		margin-top: 20%;
	}
`;
const FormStyle = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-row-gap: 20px;
	grid-template-columns: repeat(auto, 1fr);
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
	p {
		margin: 0;
		padding: 0;
		opacity: 0.5;
	}
	@media (max-width: 750px) {
		grid-template-columns: 1fr;
		margin: 10% 0%;
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
