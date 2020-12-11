import React from 'react';
import styled from 'styled-components';
import TileIcon from './TileIcon';

const Desserts = ({ recipes }) => {
	const desserts = recipes.filter((recipe) => recipe.course === 'dessert' || recipe.course === 'desserts');

	return (
		<Dessertstyle>
			{desserts.map((recipe) => (
				<TileIcon recipe={recipe} key={recipe.id} />
			))}
		</Dessertstyle>
	);
};

export default Desserts;

const Dessertstyle = styled.div`
	margin-top: 80px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 50px;
`;
