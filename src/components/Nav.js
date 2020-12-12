import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const Nav = () => {
	const pathway = useLocation();

	return (
		<NavStyle>
			<h1>FoodieFile</h1>
			<LinkBox>
				<Link to="/">Home {pathway.pathname === '/' ? <Line /> : <Linehidden />}</Link>
				<Link to="/mains">Mains{pathway.pathname === '/mains' ? <Line /> : <Linehidden />}</Link>
				<Link to="desserts">Desserts{pathway.pathname === '/desserts' ? <Line /> : <Linehidden />}</Link>
				<Link to="/upload">
					<FontAwesomeIcon icon={faPlusCircle} color="#fb1970" />
					{pathway.pathname === '/upload' ? <Line /> : <Linehidden />}
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
	z-index: 20;
	@media (max-width: 600px) {
		flex-direction: column;
		text-align: center;
	}

	h1 {
		font-family: 'Pacifico', cursive;
		color: #fb1970;
		padding-left: 10%;
		@media (max-width: 600px) {
			padding: 0;
		}
	}
`;
const LinkBox = styled.div`
	width: 50%;
	padding-right: 5%;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	@media (max-width: 600px) {
		width: 90%;
		margin: auto;
		padding-right: 0;
	}
`;
const Line = styled.div`
	height: 5px;
	background-color: #fb1970;
	width: 50px;
	margin-top: 5px;
`;
const Linehidden = styled.div`
	height: 5px;
	width: 50px;
	opacity: 0;
	margin-top: 5px;
`;
