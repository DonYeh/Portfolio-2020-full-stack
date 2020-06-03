import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

import Navbar from "./Navbar";
import Navbar3 from "./Navbar3";
import { Typography, Box, Paper, Grid, Avatar, Card } from "@material-ui/core";
import { FullscreenExit } from "@material-ui/icons";

import portfolioImg from "../assets/donaldyehportoflioheader.png";
import ChatrisImg from "../assets/tetris-game-retro-arcade-512.png";
import movieExplorerGif from "../assets/newMovieGIFedited.gif";

const useStyles = makeStyles({
	root: {
		maxWidth: 400,
		// background: "white",
	},
	mainBox: {
		// margin: "20rem 1.25rem 1.25rem 1.25rem",
		// paddingTop: "20rem",
		// marginTop: "15%",
	},
	mainGridContainer: {
		// display: "flex",
		// background: "black",
		marginTop: "80em ",
		padding: "2em",
		height: "50%",
		// background: "pink",
		padding: "20% 11%",
	},
	media: {
		// height: "0",
		// padding: "29rem 40rem",
	},

	proj1: {},
});

// const styles = {
// 	media: {
// 		// height: 0,
// 		paddingTop: "190rem",
// 		marginTop: "100",
// 	},
// };

export default function ImgMediaCard() {
	const classes = useStyles();

	return (
		<>
			<Navbar3 />
			<Box className="classes.mainBox">
				<Grid
					className="classes.mainGridContainer"
					container
					spacing={5}
					justify="space-evenly"
					alignContent="center"
					style={{ padding: " 24% 11%" }}
				>
					<Grid item>
						<Box className="proj1">
							<Card className={classes.root} raised>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="donaldyeh.dev"
										height="260rem"
										src={portfolioImg}
										// image="../assets/donaldyehportoflioheader.png"
										title="donaldyeh.dev"
										className="classes.media"
										// style={{
										// 	height: "0",
										// 	paddingTop: "55%",
										// }}

										// style={{
										// 	height: "0",
										// 	paddingTop: "56.25%",
										// }}
										component="img"
									/>
									<CardContent>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
										>
											donaldyeh.dev
										</Typography>
										<Typography
											variant="body2"
											color="textSecondary"
											component="p"
										>
											This portfolio site is a full stack
											Javascript app. The front end is
											written in React and leverages
											Material-UI responsive design. The
											back end consists of Node, Express,
											and Nodemailer, which is used to
											send an email from the contact form.
										</Typography>
									</CardContent>
								</CardActionArea>
								<CardActions>
									<Button size="small" color="primary">
										Github
									</Button>
									<Button size="small" color="primary">
										Learn More
									</Button>
								</CardActions>
							</Card>
						</Box>
					</Grid>

					<Grid item>
						<Box className="proj2">
							<Card className={classes.root} raised>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="puzzle blocks"
										height="260rem"
										// image="https://play.vg/g2_imgs/g2_6.gif"
										src={ChatrisImg}
										title="Video Chat + Tetris = Chatris"
										className="classes.media"
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
											full-stack mobile app that allows
											you to enjoy a puzzle game classic
											while connecting with your friends
											over live video and voice chat.
											Chatris is built using React Native,
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
							<Card className={classes.root} raised>
								<CardActionArea>
									<CardMedia
										component="img"
										alt="Movie Explorer gif"
										height="260"
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
											Movie Explorer allows you to browse
											and discover movies. It uses a
											responsive, mobile-first design
											featuring advanced filtering and
											search functionality. It is built
											with Javascript, HTML, CSS and it
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
			</Box>
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
