import React, { useState } from "react";

import {
	AppBar,
	Toolbar,
	ListItem,
	ListItemIcon,
	IconButton,
	ListItemText,
	Avatar,
	Divider,
	List,
	Typography,
	Box,
} from "@material-ui/core";

import {
	AssignmentInd,
	Home,
	Apps,
	ContactMail,
	InfoOutlined,
} from "@material-ui/icons";

// import { mdiInformation } from '@mdi/js';

import MenuIcon from "@material-ui/icons/Menu";

import { makeStyles } from "@material-ui/core/styles";

import MenuDrawerSlider from "@material-ui/core/Drawer";

import avatar from "../assets/Boone.png";
import { Link } from "react-router-dom";

// CSS STYLES
const useStyles = makeStyles((theme) => ({
	menuSliderContainer: {
		width: "100%",
		background: "rgba(0,0,0,.5)", //don't think this is working
		height: "100%",
	},
	avatar: {
		display: "block",
		margin: "0.75rem auto",
		width: theme.spacing(14),
		height: theme.spacing(14),
	},

	// menuSliderContainer: {
	// 	width: "20%",
	// 	height: "100%",
	// 	background: "inherit",
	// 	position: "absolute",
	// 	overflow: "hidden",
	// 	top: "50%",
	// 	left: "50%",
	// margin-left: "-175px",
	// margin-top: "-250px",
	// border-radius: "8px",
}));
//   #container:before{

//   }
//   &::before: {
// 	width: "100%",
// 	height: "100%",
// 	content: "''",
// 	position: "absolute",
// 	top: "-25px",
// 	left: "-25px",
// 	bottom: "0",
// 	right: "0",
// 	background: "inherit",
// 	box-shadow: "inset 0 0 0 200px rgba(255,255,255,0.2)",
// 	filter: "blur(10px)",
//   }

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
		listText: "Portfolio",
		listPath: "/portfolio",
	},
	{
		listIcon: <ContactMail />,
		listText: "Contact",
		listPath: "/contact",
	},
];

const Navbar = () => {
	const classes = useStyles();
	const [state, setState] = useState({ right: false });

	const toggleSlider = (slider, open) => () => {
		setState({ ...state, [slider]: open });
	};
	const sideList = (slider) => (
		<Box
			className={classes.menuSliderContainer}
			component="div"
			onClick={toggleSlider(slider, false)}
		>
			{/* <Avatar
				className={classes.avatar}
				src={avatar}
				alt="cute pitbull"
			/>
			<Divider /> */}
			<List>
				{menuIcons.map((menuIcon, key) => (
					<ListItem
						button
						key={key}
						component={Link}
						to={menuIcon.listPath}
					>
						<IconButton
							style={{
								color: "white",
								// background: "black",
							}}
						>
							<ListItemIcon>{menuIcon.listIcon}</ListItemIcon>
							<ListItemText primary={menuIcon.listText} />
						</IconButton>
					</ListItem>
				))}
			</List>
		</Box>
	);
	return (
		<>
			<Box component="nav">
				<AppBar position="static" style={{ background: "#222" }}>
					<Toolbar>
						<IconButton onClick={toggleSlider("right", true)}>
							<MenuIcon style={{ color: "sandybrown" }} />
						</IconButton>
						<Typography variant="h5">Portfolio</Typography>
						<MenuDrawerSlider
							anchor="left"
							open={state.right}
							onClose={toggleSlider("right", false)}
						>
							{sideList("right")}
						</MenuDrawerSlider>
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Navbar;
