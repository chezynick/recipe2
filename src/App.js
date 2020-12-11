import React, { useState, useEffect } from 'react';
import firebase from './firebase';
import GlobalStyles from './components/GlobalStyles';
import { HashRouter, Switch, Route } from 'react-router-dom';

//import components
import Nav from './components/Nav';
import Container from './components/Container';
import Mains from './components/Mains';
import Desserts from './components/Desserts';

function App() {
	//state settings
	const [recipes, setRecipes] = useState();
	//get recipe info from firebase firestore
	const data = firebase.firestore().collection('recipes');
	const getRecipes = () => {
		data.onSnapshot((querySnapshot) => {
			const items = [];
			querySnapshot.forEach((doc) => {
				const actObj = doc.data();
				actObj.id = doc.id;
				items.push(actObj);
			});

			items.sort((a, b) => (a.title > b.title ? 1 : -1));
			setRecipes(items);
		});
	};
	useEffect(() => {
		getRecipes();
	}, []);
	return (
		<HashRouter basename="/">
			<div className="App">
				<Nav />
				<Switch>
					<Route exact path="/" render={() => <Container recipes={recipes} />} />
					<Route path="/mains" render={() => <Mains recipes={recipes} />} />
					<Route path="/desserts" render={() => <Desserts recipes={recipes} />} />
					<Route path="/" render={() => <Container recipes={recipes} />} />
				</Switch>
				<GlobalStyles />
			</div>
		</HashRouter>
	);
}

export default App;
