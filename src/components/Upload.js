import React from 'react';
import styled from 'styled-components';
import firebase from '../firebase';
import { useHistory } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
// import * as Yup from 'yup'

const Upload = () => {
	//submit handler
	const History = useHistory();

	const submitHandler = (values) => {
		firebase.firestore().collection('recipes').add({
			title: values.title.toLowerCase(),
			description: values.description,
			link: values.linkAddress,
			image: values.imageAddress,
			course: values.course,
		});
		let path = `/`;
		History.push(path);
	};
	
// const validationSchema = Yup.object().shape({
// 	title: Yup.string().max(50).min(5).required('Please give your recipe a title')
// });

	return (
		<UploadStyle>
			 <Formik
       initialValues={{ title:'' , description: '', linkAddress: '', imageAddress: ''}}
       onSubmit={submitHandler}>
       {/* validationSchema={validationSchema} */}
			{({ values, resetForm })  => (
			<Form>
				<h3>Add your latest Recipe here...</h3>
				<FormRow>
				<h3>Title :</h3>
				<Field  name='title' id='title'/>
				</FormRow>
				<FormRow>
				<h3>Description :</h3>
				<Field  name='description' id='description'/>
				</FormRow>
				<FormRow>
				<h3>Link :</h3>
				<Field  name='linkAddress' id='linkAddress'/>
				</FormRow>
				<FormRow>
				<h3>Image link :</h3>
				<Field  name='imageAddress' id='imageAddress'/> 
				</FormRow>
				<FormRow>
				<ButtonGroup style={{ fontSize:'20px'}} role="group" aria-labelledby="my-radio-group">
            <label>
              <Field type="radio" name="course" value="mains" />
             {'  '} Mains
            </label>
            <label>
              <Field type="radio" name="course" value="dessert" />
             {'  '} Dessert
            </label>
			</ButtonGroup>
			</FormRow>
            
          
			<ButtonGroup>
			<ButtonTrue type='submit'>Add Recipe</ButtonTrue>
			<ButtonFalse onClick={()=>resetForm()}>Clear Form</ButtonFalse>
			</ButtonGroup>
			</Form>)}
			
			</Formik>
		</UploadStyle>
	);
};

export default Upload;
const FormRow = styled.div `   
margin:2% 25%;
width:50%;
height:30px;
padding:0 5%;
display:flex;
flex-direction: row;
justify-content:space-between;

`
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
// const FormStyle = styled.Form`
// 	display: grid;
// 	grid-template-columns: 1fr 1fr;
// 	grid-row-gap: 20px;
// 	grid-template-columns: repeat(auto, 1fr);
// 	width: 100%;
// 	height: 100%;
// 	text-align: center;
// 	margin: 2%;
// 	padding: 1%;
// 	textarea {
// 		margin: auto;
// 		text-align: center;
// 		font-size: larger;
// 	}
// 	p {
// 		margin: 0;
// 		padding: 0;
// 		opacity: 0.5;
// 	}
// 	@media (max-width: 750px) {
// 		grid-template-columns: 1fr;
// 		margin: 10% 0%;
// 	}
// `;
const ButtonGroup = styled.div `  
width:80%;
display: flex;
justify-content:space-evenly;
margin-left:10%;
`
const ButtonTrue = styled.button`
	width: 30%;
	background-color: #fb1970;
	color: white;
	margin: auto;
	font-size: larger;
`;
const ButtonFalse = styled.button`
	width: 30%;
	background-color: lightgray;
	color: #555555;
	opacity: 0.5;
	font-size: larger;
	margin: auto;
`;
