import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import HomePage from "./components/Header";
import HomePage from "./components/HomePage";

import About from "./components/About";
import Resume from "./components/Resume";
import Projects from "./components/Portfolio";
import Contact from "./components/Contact";

// import ResponsiveDrawer from "./ResponsiveDrawer";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme, StylesProvider } from "@material-ui/core/styles";

import { Grid } from "@material-ui/core";

import {
	AssignmentInd,
	Home,
	Apps,
	ContactMail,
	InfoOutlined,
} from "@material-ui/icons";

const drawerWidth = 240;

const menuIcons = [
	{
		listIcon: <Home />,
		listText: "Home",
		listPath: "/",
	},
	{
		listIcon: <InfoOutlined />,
		listText: "About me",
		listPath: "/about",
	},
	{
		listIcon: <AssignmentInd />,
		listText: "Resume",
		listPath: "/resume",
	},
	{
		listIcon: <Apps />,
		listText: "Projects",
		listPath: "/projects",
	},
	{
		listIcon: <ContactMail />,
		listText: "Contact",
		listPath: "/contact",
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	list: {
		width: 280,
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			// width: "100vw",
			flexShrink: 0,
		},
	},
	toolbar: {
		display: "flex",
	},
	appBar: {
		[theme.breakpoints.up("sm")]: {
			width: "100%",
			// marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},

	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},

	content: {
		// paddingTop: theme.mixins.toolbar,
		display: "flex",
		flexGrow: 1,
		// padding: "1rem", //adds padding to main content window view
		width: "100vw",
		// backgroundColor: "aliceblue",
		// height: "100vh",
		// padding: theme.spacing(2),
	},
	toolbar: {
		display: "flex",
	},
}));

function App(props) {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawerL = (
		<div className={classes.toolbar}>
			{/* <div className={classes.toolbar} /> */}
			{/* <Divider /> */}
			<List>
				{menuIcons.map((menuIcon, key) => (
					<Link to={menuIcon.listPath}>
						<ListItem button key={key} onClick={handleDrawerToggle}>
							<ListItemIcon style={{ color: "#234" }}>
								{menuIcon.listIcon}
							</ListItemIcon>
							<ListItemText
								primary={menuIcon.listText}
								style={{
									color: "darkslategrey",
									fontWeight: "bold",
								}}
							/>
						</ListItem>
					</Link>
				))}
			</List>
		</div>
	);

	const drawerT = (
		// <div>
		<div className={classes.toolbar}>
			<List
				style={{
					// backgroundColor: "aliceblue",
					backgroundColor: "white",
					display: "flex",
					width: "100vw",
				}}
			>
				{menuIcons.map((menuIcon, key) => (
					<ListItem
						button
						key={key}
						component={Link}
						to={menuIcon.listPath}
					>
						<ListItemIcon
							style={{
								// color: "#AFEEEE",
								color: "slategrey",
								// boxShadow: "9", //this doesn't work
							}}
						>
							{menuIcon.listIcon}
						</ListItemIcon>
						<ListItemText primary={menuIcon.listText} />
					</ListItem>
				))}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		// <div className="App">
		<StylesProvider injectFirst>
			<BrowserRouter>
				{/* <div className={classes.root}> */}
				<CssBaseline />
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar
						style={{
							backgroundColor: "#fafafa",
							color: "#345",
						}}
					>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="start"
							onClick={handleDrawerToggle}
							className={classes.menuButton}
							style={{
								color: "sandybrown",
							}}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" noWrap>
							Portfolio
						</Typography>
					</Toolbar>
				</AppBar>
				<nav className={classes.drawer} aria-label="mailbox folders">
					{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
					<Hidden smUp implementation="css">
						<Drawer
							container={container}
							variant="temporary"
							anchor={
								theme.direction === "rtl" ? "right" : "left"
							}
							open={mobileOpen}
							onClose={handleDrawerToggle}
							classes={{
								paper: classes.drawerPaper,
							}}
							ModalProps={{
								keepMounted: true, // Better open performance on mobile.
							}}
						>
							{drawerL}
						</Drawer>
					</Hidden>
					<Hidden xsDown implementation="js">
						<Drawer
							// classes={{
							// 	paper: classes.drawerPaper,
							// }}
							className={classes.root}
							variant="permanent"
							anchor="top"
							open
						>
							{drawerT}
						</Drawer>
					</Hidden>
				</nav>
				<main className={classes.content}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="about" element={<About />} />
						<Route path="resume" element={<Resume />} />
						{/* <Route path="/" element={<Projects />} />
					<Route path="/" element={<Contact />} />  */}
					</Routes>
				</main>
				{/* </div> */}
			</BrowserRouter>
		</StylesProvider>
		// {/* </div> */}
	);
}

App.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default App;

// import React from "react";
// import "./App.css";

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import CssBaseline from "@material-ui/core/CssBaseline";

// import Home from "./components/Home";
// import Resume from "./components/Resume";
// import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
// import About from "./components/About";

// import Navbar3 from "./components/Navbar3";

// function App() {
// 	return (
// 		<Router>
// 			<CssBaseline>
// 				<div style={{ display: "flex" }}>
// 					<Navbar3 />
// 					<Switch>
// 						<Route exact path="/" component={Home} />
// 						<Route path="/about" component={About} />
// 						<Route path="/resume" component={Resume} />
// 						<Route path="/portfolio" component={Portfolio} />
// 						<Route path="/contact" component={Contact} />
// 					</Switch>
// 					{/* <div>content here</div> */}
// 				</div>
// 			</CssBaseline>
// 		</Router>
// 	);
// }

// export default App;

// // React router v6
// // function app() {
// // 	return (
// // <div>
// // <BrowserRouter>
// // <Routes>
// // 		<Route path ='/' element={<Home prop />}>
// // </Routes>
// // </BrowserRouter>

// // </div>

// // 	)
// // }
