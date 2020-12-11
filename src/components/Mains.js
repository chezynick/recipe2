import React from 'react';
import styled from 'styled-components';
import TileIcon from './TileIcon';

const Mains = ({ recipes }) => {
	const mains = recipes.filter((recipe) => recipe.course === 'main' || recipe.course === 'mains');

	return (
		<MainStyle>
			{mains.map((recipe) => (
				<TileIcon recipe={recipe} key={recipe.id} />
			))}
		</MainStyle>
	);
};

export default Mains;

const MainStyle = styled.div`
	margin-top: 80px;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 50px;
`;
