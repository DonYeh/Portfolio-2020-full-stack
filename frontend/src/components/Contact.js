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
import Navbar from "./Navbar";
import { MyField } from "./MyField";
import { makeStyles } from "@material-ui/core/styles";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import axios from "axios";
import * as Yup from "yup";
import Error from "./Error";

const useStyles = makeStyles({
	// root: {
	// 	// borderBlock: "2px dotted",
	// 	border: "2px",
	// },

	gridContainer: {
		justify: "center",
		alignContent: "center",
		// width: "100vw",
		height: "100vh",
		background: "aliceblue",
		// padding: "1rem",
		// margin: "1rem",
	},
	gridItem: {
		background: "white",
		padding: "2rem",
		// margin: "2.5rem",
	},
	paper: {
		background: "white",
		padding: "1.5rem",
		margin: ".8rem",
	},
	mainPaper: {
		padding: "1.75rem",
	},
	hasError: {
		border: "1px solid #f44336",
		background: "#f44336",
		// border: "1px solid purple",
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
});

const handleSubmit = async (values, actions) => {
	// const preventDefault = (event) =>
	// 	event.preventDefault();

	// setTimeout(() => {
	// 	alert(JSON.stringify(values, null, 2));
	// }, 1000);
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

const Contact = () => {
	const classes = useStyles();

	return (
		<>
			<Navbar />
			{/* <Box> */}
			<Paper className={classes.mainPaper}>
				<Grid
					container
					justify="center"
					alignItems="center"
					spacing={1}
					className={classes.gridContainer}
				>
					<Grid item xs={12} md={6} className={classes.gridItem}>
						<Paper className={classes.paper}>
							<Typography variant="h6">
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
						justify="center"
						className={classes.gridItem}
					>
						<Grid item xs={12} lg={6}>
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
														// minWidth: "81%",
														width: "100%",
													}}
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
													// className={
													// 	touched.firstName &&
													// 	errors.firstName
													// 		? "classes.hasError"
													// 		: null
													// }
												/>
											</div>

											<div style={{ width: "100%" }}>
												<Field
													name="lastName"
													component={MyField}
													label="last name"
													style={{
														// minWidth: "81%",
														width: "100%",
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
														// minWidth: "81%",
														width: "100%",
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
											<div style={{ width: "100%" }}>
												<Field
													name="message"
													component={MyField}
													label="message"
													style={{
														// minWidth: "81%",
														width: "100%",
													}}
													autocomplete="false"
												>
													<TextField
														name="message here"
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
											<Button type="submit">
												submit
											</Button>
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
						container
						xs={12}
						className={classes.gridItem}
						justify="center"
					>
						<Paper className={classes.paper}>
							<Typography variant="h6">Let's Connect</Typography>
							<Grid container justify="space-evenly">
								<Grid item>
									<Link
										href="https://www.linkedin.com/in/donald-yeh-b3b1426/"
										// onClick={preventDefault}
										variant="body2"
									>
										{/* {'variant="body2"'} */}
										<LinkedInIcon />
									</Link>
								</Grid>

								<Grid item>
									<Link
										href="https://github.com/DonYeh"
										// onClick={preventDefault}
										variant="body2"
									>
										{/* {'variant="body2"'} */}
										<GitHubIcon />
									</Link>
								</Grid>

								<Grid item>
									<Link
										href="https://twitter.com/heydonaldyeh"
										// onClick={preventDefault}
										variant="body2"
									>
										{/* {'variant="body2"'} */}
										<TwitterIcon />
									</Link>
								</Grid>
							</Grid>
						</Paper>
					</Grid>
				</Grid>
			</Paper>
			{/* </Box> */}
		</>
	);
};

export default Contact;
