import React from "react";
/* imported bootstrap css before App.css to avoid bootstrap css from 
overwriting code in App.css */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/UI Components/Home";
import Game from "./Components/Game Components/Game";
import Help from "./Components/UI Components/Help";
import Header from "./Components/UI Components/Header";

// displaying the header component on all pages
// displaying all the components inside their matching route path
const App = () => {
	return (
		<div className="app">
			<Router>
				<Header />
				<Switch>
					<Route path="/" exact>
						<Home />
					</Route>

					<Route path="/Game" exact>
						<Game />
					</Route>

					<Route path="/Help" exact>
						<Help />
					</Route>
				</Switch>
			</Router>
		</div>
	);
};

export default App;

// References:

// https://stackoverflow.com/questions/44877821/how-to-navigate-on-path-by-button-click-in-react-router-v4

// https://www.kindacode.com/article/programmatically-navigate-using-react-router/
