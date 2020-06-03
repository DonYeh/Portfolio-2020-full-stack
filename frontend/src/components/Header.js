import React from "react";
import {
	Typography,
	Avatar,
	Grid,
	Box,
	CssBaseline,
	ThemeProvider,
} from "@material-ui/core/";
// import avatar from "../images/Boone.png";
import Typed from "react-typed";
import {
	makeStyles,
	createMuiTheme,
	responsiveFontSizes,
} from "@material-ui/core/styles";
import { ViewColumn } from "@material-ui/icons";
// import CssBaseline from "@material-ui/core/CssBaseline";

const useStyles = makeStyles((theme) => ({
	mainContainer: {
		// direction: "column",
		// alignContent: "center",
		padding: "33% 10% 0%",
	},

	typedContainer: {
		// margin: theme.spacing(8),
		// paddingTop: "5rem",
		alignItems: "center",
		textAlign: "center",
		// height: "80vh",
		// padding: "0 10%",
		[theme.breakpoints.up("lg")]: {
			justify: "center",
			alignItems: "center",
			fontSize: "8em",
		},
	},
	whiteFont: {
		color: "white",
		textShadow: ".5px .5px rgb(20,33,61)", //dark blue
		// textShadow: "1.5px 1.5px rgb(240,169,80)",

		// marginTop: "10%",
		// textAlign: "flex-start",
		// backgroundColor: "blue",
	},
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const Header = () => {
	const classes = useStyles();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Grid
				container
				spacing={2}
				justify="center"
				className={classes.mainContainer}
				alignItems="center"
				// margin="dense"
				// justifyContent="center"
			>
				<Grid
					item
					justify="center"
					// alignItems="top"
					xs={12}
					sm={12}
					lg={8}
					className={classes.typedContainer}
					// style={{ background: "brown" }}
				>
					<Typography variant="h3" className={classes.whiteFont}>
						<Typed
							strings={["Hello^2", "Hi!^4 👋", "I'm Donald^2"]}
							typeSpeed={26}
							startDelay={2000}
							showCursor={false}
						/>
					</Typography>
				</Grid>
				<Grid
					item
					justify="center"
					// alignItems="top"
					xs={12}
					sm={12}
					lg={8}
					className={classes.typedContainer}
					// style={{ background: "brown" }}
				>
					<Typography variant="h3">
						<Typed
							strings={[
								"I'm a full stack developer ^11800",
								"I'm a software engineer ^700",
								"I'm a coder ^700",
								"I'm a techie ^700",
								"I'm a builder ^700",
								"I'm a problem solver^700",
							]}
							typeSpeed={15}
							startDelay={6500}
							backSpeed={22}
							smartBackspace="true"
							random
							loop
							showCursor={false}
							className={classes.whiteFont}
							// showCursor={false}
							// fadeOut="true"
						/>
					</Typography>
				</Grid>
				<Grid
					item
					justify="center"
					// alignItems="top"
					xs={12}
					sm={12}
					lg={8}
					className={classes.typedContainer}
					// style={{ background: "brown" }}
				>
					<Typography variant="h3">
						<Typed
							strings={["from^3"]}
							typeSpeed={18}
							startDelay={7300}
							showCursor={false}
							className={classes.whiteFont}
						/>
					</Typography>
				</Grid>
				{/* <br /> */}

				<Grid
					item
					justify="center"
					// alignItems="top"
					xs={12}
					sm={12}
					lg={8}
					className={classes.typedContainer}
					// style={{ background: "brown" }}
				>
					<Typography variant="h3">
						<Typed
							strings={[
								// "Atlanta^1800",
								"ATL^900",
								"A-Town^900",
								"the A^900",
								"Hotlanta^400...(please don't ever call it Hotlanta)^650",
								"Atlanta^1800",
							]}
							typeSpeed={11}
							startDelay={7750}
							backSpeed={15}
							backDelay={250}
							smartBackspace="true"
							cursorChar=" "
							showCursor={true}
							className={classes.whiteFont}
							fadeOut="false"
							loop
							random
							// smartBackspace="true"
						/>
					</Typography>
				</Grid>

				<Grid
					item
					justify="center"
					// alignItems="top"
					xs={12}
					sm={12}
					lg={8}
					className={classes.typedContainer}
					// style={{ background: "brown" }}
				>
					<Typography variant="h3">
						<Typed
							strings={["Georgia^60 🍑"]}
							typeSpeed={11}
							startDelay={16200}
							backSpeed={55}
							showCursor={false}
							className={classes.whiteFont}
						/>
					</Typography>
				</Grid>
			</Grid>

			{/* </Grid> */}
			{/* // </Grid> */}
		</ThemeProvider>
	);
};

export default Header;
