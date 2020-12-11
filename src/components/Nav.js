import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
	return (
		<NavStyle>
			<h1>FoodieFile</h1>
			<LinkBox>
				<Link to="/">Home</Link>
				<Link to="/mains">Mains</Link>
				<Link to="desserts">Desserts</Link>
				<Link to="/upload">
					<FontAwesomeIcon icon={faPlusCircle} background="#fb1970" />
				</Link>
			</LinkBox>
		</NavStyle>
	);
};

export default Nav;

const NavStyle = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px #555555 solid;
	position: fixed;
	background-color: white;
	top: 0;
	left: 0;

	h1 {
		font-family: 'Pacifico', cursive;
		color: #fb1970;
		padding-left: 5%;
	}
`;
const LinkBox = styled.div`
	width: 50%;
	padding-right: 5%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;
