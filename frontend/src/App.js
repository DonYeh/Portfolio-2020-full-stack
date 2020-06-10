import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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

import {
	createMuiTheme,
	ThemeProvider,
	responsiveFontSizes,
} from "@material-ui/core/styles";

import { Paper, Grid } from "@material-ui/core";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

// import {
// 	AssignmentInd,
// 	Home,
// 	Apps,
// 	ContactMail,
// 	InfoOutlined,
// } from "@material-ui/icons";

// import Home from "@material-ui/icons/HomeTwoTone";
// import Apps from "@material-ui/icons/AppsTwoTone";
// import AssignmentInd from "@material-ui/icons/AssignmentIndTwoTone";
// import ContactMail from "@material-ui/icons/ContactMailTwoTone";
// import InfoOutlined from "@material-ui/icons/InfoOutlinedTwoTone";
// import HomeWorkSharp from "@material-ui/icons/HomeWorkSharp";

import HomeTwoToneIcon from "@material-ui/icons/HomeTwoTone";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import AssignmentIndTwoToneIcon from "@material-ui/icons/AssignmentIndTwoTone";
import AppsTwoToneIcon from "@material-ui/icons/AppsTwoTone";
import ContactMailTwoToneIcon from "@material-ui/icons/ContactMailTwoTone";

const drawerWidth = 210;

const menuIcons = [
	{
		listIcon: <HomeTwoToneIcon />,
		listText: "Home",
		listPath: "/",
	},
	{
		listIcon: <InfoTwoToneIcon />,
		listText: "About me",
		listPath: "/about",
	},
	{
		listIcon: <AssignmentIndTwoToneIcon />,
		listText: "Resume",
		listPath: "/resume",
	},
	{
		listIcon: <AppsTwoToneIcon />,
		listText: "Projects",
		listPath: "/projects",
	},
	{
		listIcon: <ContactMailTwoToneIcon />,
		listText: "Contact",
		listPath: "/contact",
	},
];

const useStyles = makeStyles((theme) => ({
	root: {
		// display: "flex",
		// backdropFilter: "blur(3px)",
	},
	list: {
		width: 240,
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			// width: "100vw",
			flexShrink: 0,
		},
	},
	// toolbar: {
	// 	display: "flex",
	// },
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
		// backgroundColor: "rgba(0,0,0,.5 )",
		// backgroundColor: "rgba(f,f,f,.5 )",
		// backgroundColor: "rgba(#424242db)",
		backgroundColor: "rgba(66,66,66,.88)",
		backdropFilter: "blur(5px)",
	},

	content: {
		// paddingTop: theme.mixins.toolbar,
		flexGrow: 1,
		// height: "100%",

		backdropFilter: "blur(5px)",
	},
	// toolbar: {
	// 	display: "flex",
	displayFlex: {
		display: "flex",
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerHeader: {
		display: "flex",
		alignItems: "center",
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		// ...theme.mixins.toolbar,
		justifyContent: "flex-start",
		backgroundColor: "rgba(124,124,124, .2)",
		// minHeight: "54px",
	},
	topListText: {
		color: "purple",
	},
	mainAppPaper: {
		// backgroundColor: "rgba(0,0,0,.4)",
		// backdropFilter: "blur(5px)",

		// padding: "1rem",
		margin: "1.2rem",
		[theme.breakpoints.up("sm")]: {
			margin: "5rem",
		},
		[theme.breakpoints.up("md")]: {
			margin: "6rem 10rem",
		},
	},
}));

const darkTheme = createMuiTheme({
	palette: {
		type: "dark",
	},
});

let theme = createMuiTheme();
// theme = responsiveFontSizes(darkTheme);
theme = responsiveFontSizes(theme);

function App(props) {
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawerL = (
		<div className={classes.drawer}>
			{/* <div className={classes.toolbar} /> */}
			<Divider />
			<div className={classes.drawerHeader}>
				<IconButton onClick={handleDrawerToggle}>
					{theme.direction === "ltr" ? (
						<ChevronLeftIcon
							style={{
								// color: "sandybrown",
								color: "#e49059ed",
								width: "1em",
								height: "1.2em",
							}}
						/>
					) : (
						<ChevronRightIcon />
					)}
				</IconButton>
			</div>
			<Divider />
			<List>
				{menuIcons.map((menuIcon, key) => (
					<Link to={menuIcon.listPath}>
						<ListItem button key={key} onClick={handleDrawerToggle}>
							<ListItemIcon
								style={{
									color: "#5f9ea0c7",
									// color: "cadetblue",
									paddingLeft: "6px",
								}}
							>
								{menuIcon.listIcon}
							</ListItemIcon>
							<ListItemText
								primary={menuIcon.listText}
								style={{
									color: "aliceblue",
									// color: "aliceblue",
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
		<div className={classes.displayFlex}>
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
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					{/* <div className={classes.root}> */}
					<CssBaseline />
					<Paper className={classes.mainAppPaper}>
						<AppBar position="fixed" className={classes.appBar}>
							<Toolbar
								style={{
									// backgroundColor: "#fafafa",
									backgroundColor: "#ffffffe6",
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
										color: "#e49059ed",
										// color: "sandybrown",
									}}
								>
									<MenuIcon />
								</IconButton>
								<Typography variant="h6" noWrap>
									Portfolio
								</Typography>
							</Toolbar>
						</AppBar>
						<nav
							className={classes.drawer}
							aria-label="mailbox folders"
						>
							{/* The implementation can be swapped with js to avoid SEO duplication of links. */}
							<Hidden smUp implementation="css">
								<Drawer
									container={container}
									variant="temporary"
									anchor={
										theme.direction === "rtl"
											? "right"
											: "left"
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
									className={classes.root}
									variant="permanent"
									anchor="top"
									open
									// style={{ color: 45" }}
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
								<Route path="projects" element={<Projects />} />
								<Route path="contact" element={<Contact />} />
							</Routes>
						</main>
						{/* </div> */}
					</Paper>
				</BrowserRouter>
			</ThemeProvider>
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
