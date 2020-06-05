import {
	Button,
	TextField,
	Box,
	Grid,
	Paper,
	Typography,
} from "@material-ui/core";
import Link from "@material-ui/core/Link";

import { Form, Formik, Field, FieldProps } from "formik";
import * as React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import Navbar3 from "./Navbar3";
import { MyField } from "./MyField";
import { makeStyles, ThemeProvider } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import axios from "axios";
import * as Yup from "yup";
import Error from "./Error";
// import Modal from "@material-ui/core/Modal";
import Modal from "react-modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import { createMuiTheme } from "@material-ui/core/styles";
Modal.setAppElement("#root"); //fixes the warning that react-modal: App element is not defined

const useStyles = makeStyles((theme) => ({
	// root: {
	// 	// fullWidth: "true",
	// },
	gridContainer: {
		justify: "center",
		alignContent: "center",
		width: "100%",
		background: "white",
	},
	gridItem: {
		background: "white",
		// padding: "2rem",
	},
	paper: {
		background: "white",
		padding: "1.5rem",
		marginTop: ".5rem",
	},
	mainPaper: {
		padding: "21% 10%",

		[theme.breakpoints.up("sm")]: {
			padding: "7%",
			margin: "18% 15% 20%",
			// backgroundColor: "darkblue",
		},
	},
	hasError: {
		border: "1px solid #f44336",
		background: "#f44336",
	},
	noError: {
		width: "100%",
	},

	formMessage: {
		fontSize: "10px",
		paddingTop: "2px",
	},
	valid: {
		color: "#4caf50",
		background: "#4caf50",
	},
	invalid: {
		color: "#f44336",
		background: "#f44336",
	},
	paperContact: {
		// padding: "10% 20% 10%"
		padding: "2rem",
	},
}));

const handleSubmit = async (values, actions) => {
	console.log(actions);
	let res = await axios.post("api/sendMail", values).then(
		(response) => {
			console.log(response);
		},
		(error) => {
			console.log(error);
		}
	);

	console.log(
		`inside handleSubmit: values:${values.json()},actions:${actions.json()}`
	);
	// alert(JSON.stringify(values, null, 2));
	actions.setSubmitting(false);
};

const validationSchema = Yup.object().shape({
	firstName: Yup.string()
		.max(255, "Must be shorter than 255 characters")
		.required("must enter a first name"),

	lastName: Yup.string()
		.max(255, "Must be shorter than 255 characters")
		.required("must enter a last name"),

	email: Yup.string()
		.email("Must be a valid email address")
		.max(255, "Must be shorter than 255 characters")
		.required("must enter an email so that I can email you back"),

	message: Yup.string()
		.max(255, "Must be shorter than 255 characters")
		.required(
			"must enter a message. I'm not a mind reader...at least, not yet"
		),
});

// const formTheme = createMuiTheme({
// 	overrides: {
// 		MuiFormControl: {
// 			// fullWidth: "true",
// 			minWidth: "88%",
// 		},
// 	},
// });

const Contact = () => {
	const classes = useStyles();
	const [modalIsOpen, setModalIsOpen] = React.useState(false);

	const handleOpen = () => {
		setModalIsOpen(true);
	};

	const handleClose = () => {
		setModalIsOpen(false);
	};

	const handleModal = () => {
		setTimeout(() => {
			console.log("yo!");
			setModalIsOpen(true);
		}, 500);
	};

	return (
		<>
			{/* <Navbar3 /> */}
			{/* <ThemeProvider theme={formTheme}> */}
			<Paper className={classes.mainPaper}>
				<Grid
					container
					justify="center"
					alignItems="center"
					spacing={1}
					className={classes.gridContainer}
				>
					<Grid
						item
						xs={12}
						md={6}
						className={classes.gridItem}
						// style={{ backgroundColor: "pink" }}
					>
						<Paper className={classes.paper}>
							<Typography
								variant="h5"
								align="center"
								style={{
									color: "darkslategrey",
									paddingBottom: ".5rem",
								}}
							>
								Let's build together
							</Typography>
							<Typography variant="body1" color="textSecondary">
								Have a project you're looking to get off the
								ground? I'd love to hear from you. Send a
								message and let's get the ball rolling!
							</Typography>
						</Paper>
					</Grid>
					<Grid
						item
						container
						xs={12}
						md={6}
						// lg={6}
						justify="center"
						className={classes.gridItem}
						// style={{ backgroundColor: "teal" }}
					>
						<Grid item xs={12} lg={8}>
							<Paper className={classes.paper}>
								<Formik
									initialValues={{
										firstName: "",
										lastName: "",
										email: "",
										message: "",
									}}
									onSubmit={handleSubmit}
									validationSchema={validationSchema}
									fullWidth
								>
									{({
										values,
										errors,
										touched,
										handleChange,
										handleBlur,
									}) => (
										<Form>
											<div style={{ width: "100%" }}>
												<Field
													name="firstName"
													component={MyField}
													label="first name"
													style={{
														minWidth: "81%",
														// width: "100%",
													}}
													as={TextField}
													fullWidth
												>
													<TextField
														name="firstName"
														value={values.firstName}
														onChange={handleChange}
														onBlur={handleBlur}
														fullWidth
														// className={
														// 	touched.firstName &&
														// 	errors.firstName
														// 		? "classes.hasError"
														// 		: null
														// }
														variant="filled"
													/>
												</Field>
												<Error
													touched={touched.firstName}
													message={errors.firstName}
													className={classes.invalid}
												/>
											</div>

											<div style={{ width: "100%" }}>
												<Field
													name="lastName"
													component={MyField}
													label="last name"
													style={{
														minWidth: "81%",
														background: "#f44336",
													}}
												>
													<TextField
														name="lastName"
														fullWidth
														value={values.lastName}
														onChange={handleChange}
														onBlur={handleBlur}
														className={
															touched.lastName &&
															errors.lastName
																? "classes.hasError"
																: null
														}
														variant="filled"
													/>
												</Field>
												<Error
													touched={touched.lastName}
													message={errors.lastName}
													className={
														touched.lastName &&
														errors.lastName
															? "classes.hasError"
															: null
													}
												/>
											</div>

											<div style={{ width: "100%" }}>
												<Field
													name="email"
													component={MyField}
													label="email"
													style={{
														minWidth: "81%",
														// width: "100%",
													}}
												>
													<TextField
														name="email"
														fullWidth
														value={values.email}
														onChange={handleChange}
														onBlur={handleBlur}
														className={
															touched.email &&
															errors.email
																? "classes.hasError"
																: "classes.noError"
														}
														variant="outlined"
													/>
												</Field>
												<Error
													touched={touched.email}
													message={errors.email}
												/>
											</div>
											<div>
												<Field
													name="message"
													component={MyField}
													label="message"
													style={{
														minWidth: "81%",
													}}
													autocomplete="false"
												>
													<TextField
														name="message here"
														multiline
														rows="3"
														fullWidth
														value={values.message}
														onChange={handleChange}
														onBlur={handleBlur}
														variant="outlined"
														className={
															touched.message &&
															errors.message
																? "classes.hasError"
																: null
														}
														helperText={
															errors.message
														}
													/>
												</Field>
												<Error
													touched={touched.message}
													message={errors.message}
												/>
											</div>
											<Button
												type="submit"
												onClick={handleModal}
											>
												submit
											</Button>

											<Modal
												isOpen={modalIsOpen}
												onRequestClose={() =>
													setModalIsOpen(false)
												}
												style={{
													overlay: {
														backgroundColor:
															"gainsboro",
													},
													content: {
														color: "#234",
													},
												}}
											>
												<h2>
													Thanks for reaching out!
												</h2>
												<p>
													You should be receiving a
													confirmation email soon and
													can expect to hear back from
													me in the next few days.
												</p>

												<Button
													onClick={() =>
														setModalIsOpen(false)
													}
												>
													X Close
												</Button>
											</Modal>

											{/* <pre>
												{JSON.stringify(
													values,
													null,
													2
												)}
											</pre> */}
										</Form>
									)}
								</Formik>
							</Paper>
						</Grid>
					</Grid>
					<Grid
						item
						xs={12}
						md={6}
						container
						// spacing={3}
						className={classes.paperContact}
						justify="center"
						style={{
							// backgroundColor: "purple",
							marginTop: ".7rem",
							padding: ".5rem 0",
						}}
					>
						<Paper style={{ width: "98%", padding: ".75rem 0" }}>
							<Grid item>
								<Typography
									variant="h5"
									align="center"
									style={{ color: "darkslategrey" }}
								>
									Let's Connect
								</Typography>
							</Grid>

							<Grid
								container
								justify="space-evenly"
								style={{ paddingTop: ".5rem" }}
							>
								<Grid item>
									<Link
										href="https://www.linkedin.com/in/donald-yeh-b3b1426/"
										// onClick={preventDefault}
										variant="body2"
									>
										{/* {'variant="body2"'} */}
										<LinkedInIcon
											style={{
												color: "rgba(67,118,178)",
											}}
										/>
									</Link>
								</Grid>

								<Grid item>
									<Link
										href="https://github.com/DonYeh"
										// onClick={preventDefault}
										variant="body2"
									>
										{/* {'variant="body2"'} */}
										<GitHubIcon
											style={{ color: "rgba(42,45,49)" }}
										/>
									</Link>
								</Grid>

								<Grid item>
									<Link
										href="https://twitter.com/heydonaldyeh"
										// onClick={preventDefault}
										variant="body2"
									>
										{/* {'variant="body2"'} */}
										<TwitterIcon
											style={{
												color: "rgb(94, 160,239)",
											}}
										/>
									</Link>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</Paper>

			{/* </ThemeProvider> */}
		</>
	);
};

export default Contact;
