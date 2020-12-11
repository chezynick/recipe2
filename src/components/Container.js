import React from 'react';
import styled from 'styled-components';
import TileIcon from './TileIcon';
const Container = ({ recipes }) => {
	return (
		<ContainerStyle>
			{recipes ? recipes.map((recipe) => <TileIcon recipe={recipe} key={recipe.id} />) : ''}
		</ContainerStyle>
	);
};

export default Container;

const ContainerStyle = styled.div`
	margin-top: 80px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 50px;
`;
