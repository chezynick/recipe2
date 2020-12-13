import React, { useState } from 'react';
import styled from 'styled-components';
import TileIcon from './TileIcon';
const Search = ({ recipes }) => {
	const [search, setSearch] = useState('');
	const [results, setResults] = useState(recipes);

	const searchHandler = (e) => {
		setSearch(e.target.value.toLowerCase());
		const newArr = recipes.filter((recipe) => recipe.title.includes(search));
		setResults(newArr);
		return results;
	};
	const clickHandler = () => {
		setResults(recipes);
		setSearch('');
	};
	return (
		<SearchStyle>
			<textarea placeholder="Search" value={search} cols="30" rows="1" onChange={searchHandler}></textarea>
			<button onClick={clickHandler}>Clear Search</button>
			<Resultstyle>
				{results.map((recipe) => (
					<TileIcon recipe={recipe} key={recipe.id} />
				))}
			</Resultstyle>
		</SearchStyle>
	);
};

export default Search;

const SearchStyle = styled.div`
	width: 100%;
	height: auto;
	margin-top: 10%;
	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	@media (max-width: 1000px) {
		margin-top: 15%;
	}
	@media (max-width: 750px) {
		margin-top: 20%;
	}
	@media (max-width: 500px) {
		margin-top: 25%;
	}
	textarea {
		text-align: center;
		font-size: large;
		padding: 5px;
		width: 50%;
	}
	button {
		background-color: #fb1970;
		color: white;
		width: 150px;
		margin-top: 50px;
	}
`;
const Resultstyle = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 50px;
`;
