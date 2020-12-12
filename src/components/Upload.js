import React from 'react';
import styled from 'styled-components';

const Upload = () => {
	return (
		<UploadStyle>
			<h3>Add your latest Recipe here...</h3>
			<FormStyle>
				<h3>Title :</h3>
				<textarea cols="20" rows="1"></textarea>
				<h3>Description :</h3>
				<textarea cols="20" rows="1"></textarea>
				<h3>Link :</h3>
				<textarea cols="20" rows="1"></textarea>
				<h3>Image link :</h3>
				<textarea cols="20" rows="1"></textarea>
			</FormStyle>
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

	margin: 2%;
	padding: 1%;
`;
