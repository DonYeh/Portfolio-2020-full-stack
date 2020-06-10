import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import Navbar from "./Navbar";
import Navbar3 from "./Navbar3";
import {
	Typography,
	Box,
	Paper,
	Grid,
	Avatar,
	Card,
	CssBaseline,
} from "@material-ui/core";
import { FullscreenExit } from "@material-ui/icons";

import portfolioImg from "../assets/donaldyehportoflioheader.png";
import ChatrisImg from "../assets/tetris-game-retro-arcade-512.png";
import movieExplorerGif from "../assets/newMovieGIFedited.gif";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: 400,
		// background: "white",
	},
	// mainBox: {
	// 	display: "flex",

	// 	// margin: "20rem 1.25rem 1.25rem 1.25rem",
	// 	// paddingTop: "20rem",
	// 	// marginTop: "15%",
	// },
	mainPaper: {},
	mainGridContainer: {
		// display: "flex",
		// background: "black",

		// backdropFilter: "blur(5px)",
		// backgroundColor: "rgba(0,0,0,.6)",
		// padding: "16% 5%",
		padding: "16% 5% 6%",
		// marginTop: "80em ",
		// padding: "2em",
		// height: "50%",
		// background: "pink",
		// padding: "20% 11%",
		[theme.breakpoints.up("sm")]: {
			padding: "6% 5% 6%",
		},
	},
	media: {
		// height: "0",
		// padding: "29rem 40rem",
	},

	proj1: {},
	projectsGridContainer: {
		padding: ".5rem",
	},
}));

export default function ImgMediaCard() {
	const classes = useStyles();

	return (
		<>
			<CssBaseline />
			<Paper
				className={classes.mainPaper}
				style={{ backdropFilter: "blur(5px)" }}
			>
				<Grid
					className={classes.mainGridContainer}
					container
					justify="center"
					alignContent="center"
					// spacing={2}
					// style={{
					// 	padding: " 24% 11%",
					// }}
				>
					<Grid
						container
						item
						// style={{ width: "100%" }}
						justify="space-evenly"
						spacing={3}
						className={classes.projectsGridContainer}
					>
						<Grid item>
							<Box className="proj1">
								<Card
									className={classes.root}
									raised
									// variant="outlined"
								>
									<CardActionArea>
										<CardMedia
											component="img"
											alt="donaldyeh.dev"
											height="220rem"
											src={portfolioImg}
											// image="../assets/donaldyehportoflioheader.png"
											title="donaldyeh.dev"
											className="classes.media"
											component="img"
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												// component="h2"
											>
												donaldyeh.dev
											</Typography>
											<Typography
												variant="body2"
												color="textSecondary"
												component="p"
											>
												This portfolio site is a full
												stack Javascript app. The front
												end is written in React and
												leverages Material-UI responsive
												design. The back end consists of
												Node, Express, and Nodemailer,
												which is used to send an email
												from the contact form.
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="primary">
											Github
										</Button>
										{/* <Button
													size="small"
													color="primary"
												>
													Learn More
												</Button> */}
									</CardActions>
								</Card>
							</Box>
						</Grid>

						<Grid item>
							<Box className="proj2">
								<Card
									className={classes.root}
									// variant="outlined"
									raised
								>
									<CardActionArea>
										<CardMedia
											component="img"
											alt="puzzle blocks"
											height="280rem"
											// image="https://play.vg/g2_imgs/g2_6.gif"
											src={ChatrisImg}
											title="Video Chat + Tetris = Chatris"
											className="classes.media"
											// style={{ objectFit: "cover" }}
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="h2"
											>
												Chatris
											</Typography>
											<Typography
												variant="body2"
												color="textSecondary"
												component="p"
											>
												Chatris is a cross-platform,
												full-stack mobile app that
												allows you to enjoy a puzzle
												game classic while connecting
												with your friends over live
												video and voice chat. Chatris is
												built using React Native,
												PostgreSQL, Node, Express, and
												Socket.io
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="primary">
											Github link
										</Button>
										{/* <Button size="small" color="primary">
										Learn More
									</Button>  */}
									</CardActions>
								</Card>
							</Box>
						</Grid>

						<Grid item>
							<Box className="proj3">
								<Card
									className={classes.root}
									raised
									// variant="outlined"
								>
									<CardActionArea>
										<CardMedia
											component="img"
											alt="Movie Explorer gif"
											height="280"
											src={movieExplorerGif}
											title="Movie Explorer"
											className="classes.media"
										/>
										<CardContent>
											<Typography
												gutterBottom
												variant="h5"
												component="h2"
											>
												Movie Explorer
											</Typography>
											<Typography
												variant="body2"
												color="textSecondary"
												component="p"
											>
												Movie Explorer allows you to
												browse and discover movies. It
												uses a responsive, mobile-first
												design featuring advanced
												filtering and search
												functionality. It is built with
												Javascript, HTML, CSS and it
												calls the OMDB and TMDB APIs for
												up-to-date movie information and
												trailers.
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="small" color="primary">
											Share
										</Button>
										<Button size="small" color="primary">
											Learn More
										</Button>
									</CardActions>
								</Card>
							</Box>
						</Grid>
					</Grid>
					{/* </Paper> */}
				</Grid>
			</Paper>
		</>
	);
}

// const useStyles = makeStyles((theme) => ({
// 	mainContaitner: {
// 		backgroundColor: "white",
// 		width: "100vw",
// 		height: "100vh",
// 	},
// }));

// const Portfolio = () => {
// 	const classes = useStyles();

// 	return (
// 		<>
// 			<Navbar />
// 			<Box className={classes.mainContaitner}>
// 				<div>Portfolio here - tsx</div>
// 				<Card>Card goes here</Card>
// 			</Box>
// 		</>
// 	);
// };

// export default Portfolio;
