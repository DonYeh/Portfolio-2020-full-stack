import React from "react";
import Navbar from "./Navbar";
import {
	makeStyles,
	responsiveFontSizes,
	createMuiTheme,
} from "@material-ui/core/styles";
import {
	Typography,
	Box,
	Paper,
	Grid,
	Avatar,
	Card,
	ThemeProvider,
} from "@material-ui/core";
import avatar from "../assets/IMG_1953.jpg";
import { FullscreenExit } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		flexDirection: "column",
		backgroundColor: "white",
		padding: "1.2rem",
		// margin: "1rem",
		// width: "100%",
		// height: "100vh",
		// justifyContent: "center",
		// height: "50%",
		// alignContent: "center",
	},
	gridContainer: {
		// display: "flex",
		// direction: "column",
		justify: "space-evenly",
		padding: "1.5rem 0 2rem",
		alignItems: "center",
		[theme.breakpoints.up("sm")]: {
			// padding: "14% 20% 0",
			// margin: "14% 24% 0",
			marginTop: "12%",
			justify: "center",
			alignItems: "center",
			fontSize: "8em",
			padding: "0rem 3rem",
			// transform: "translateX(-23%)",
			transform: "scale(0.8,0.8)",
			// padding: "2em",
			// spacing: "2",
		},
		// height: "100%",
		// alignContent: "center",
	},
	gridItems: {
		padding: "1rem",
	},
	gridItems1: {
		// justifyContent: "center",
		// alignItems: "center",
		padding: "1rem",
	},
	paper: {
		padding: "1rem",
		// justifyContent: "space-evenly",
	},
	avatarContainer: {
		// width: "100%",
		// margin: "auto",
		// width: theme.spacing(12),
		// height: "15vw",
		// margin:
		// backgroundColor: "white",
		// margin: "30px 0px 0px 0px",
		// backgroundColor: "red",
		// textAlign: "center",
		// maxWidth: "100%",
	},
	avatar: {
		textAlign: "center",
		width: theme.spacing(12),
		height: theme.spacing(12),
		// margin: theme.spacing(6),
		// textAlign: "center",
		// border: "black",
		// maxWidth: "50%",
		// margin: theme.spacing(2),
		// alignItems: "center",
		// justifyContent: "center",
		// backgroundColor: "purple",
		// margin: "auto",
	},
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const About = () => {
	const classes = useStyles();

	return (
		<>
			<ThemeProvider theme={theme}>
				<Navbar />
				{/* <Grid
				container
				// alignItems="center"
				style={{ flexDirection: "column" }}
				// justify="center"
				className={classes.mainContainer}
			> */}
				{/* <Box className={classes.mainContainer}> */}
				<Grid
					container
					className={classes.gridContainer}
					// spacing={2}
					// direction="column"
					justify="center"
					style={{ backgroundColor: "aliceblue" }}
					// justify="center"
				>
					<Grid
						item
						container
						className={classes.gridItems1}
						justify="space-evenly"
						alignItems="center"
						spacing={1}
					>
						<Grid item alignContent="center">
							<Paper
								elevation={0}
								className={classes.paper}
								style={{
									backgroundColor: "aliceblue",
									color: "darkslategray",
									textTransform: "lowercase",
									fontWeight: "bold",
								}}
							>
								<Typography variant="h2" align="center">
									About Me
								</Typography>
							</Paper>
						</Grid>
						<Grid item>
							<Paper elevation={4}>
								<Avatar
									src={avatar}
									alt="Donaldpicture"
									className={classes.avatar}
									variant="rounded"
								/>
							</Paper>
						</Grid>
					</Grid>

					<Grid item className={classes.gridItems}>
						<Paper
							elevation={3}
							className={classes.paper}
							style={{ color: "midnightblue" }}
						>
							<Typography variant="body1">
								Hello. I’m a full-stack developer who is
								passionate about writing clean, efficient code
								and solving real world problems - making the
								world a better place, one line of code at a
								time.
							</Typography>
						</Paper>
					</Grid>
					<Grid item className={classes.gridItems}>
						<Paper elevation={3} className={classes.paper}>
							<Typography>
								I enjoy turning complex problems into simple,
								beautiful and intuitive designs. I love to build
								things and I'm obsessed with making things
								better. I have a thirst for knowlede and coding
								really quenches my desire to learn.
							</Typography>
						</Paper>
					</Grid>

					<Grid
						item
						className={classes.gridItems}
						style={{ paddingBottom: ".5em" }}
					>
						<Paper elevation={3} className={classes.paper}>
							<Typography>
								When Im not at the computer, you can find me
								cooking something fierce in the kitchen, out in
								the garden, or out walking my dogs.
							</Typography>
						</Paper>
					</Grid>
				</Grid>
				{/* </Box> */}
				{/* </Grid> */}
			</ThemeProvider>
		</>
	);
};

export default About;
