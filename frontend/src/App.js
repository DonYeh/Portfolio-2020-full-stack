import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import Home from "./components/Home";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import About from "./components/About";

function App() {
	return (
		<Router>
			<CssBaseline>
				<Route exact path="/" component={Home} />
				<Route path="/about" component={About} />
				<Route path="/resume" component={Resume} />
				<Route path="/portfolio" component={Portfolio} />
				<Route path="/contact" component={Contact} />
			</CssBaseline>
		</Router>
	);
}

export default App;
