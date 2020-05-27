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
		// padding: "2.5rem",
		// margin: "2.5rem",
	},
	paper: {
		background: "white",
		padding: "1.75rem",
		margin: "1rem",
	},
});

const handleSubmit = (values, actions) => {
	// const preventDefault = (event) =>
	// 	event.preventDefault();
	axios
		.post("api/sendMail", values)
		.then((res) => console.log(res))
		.catch(() => {
			console.log("message not sent");
		});
	console.log({ values, actions });
	// alert(JSON.stringify(values, null, 2));
	actions.setSubmitting(false);
};

const Contact = ({ onSubmit }) => {
	const classes = useStyles();
	const preventDefault = (event) => event.preventDefault();
	// const initialValues = {
	// 	firstName: "",
	// 	lastName: "",
	// 	email: "",
	// 	message: "",
	// };

	return (
		<>
			<Navbar />
			{/* <Box> */}
			<Grid
				container
				// alignItems="center"
				spacing={3}
				className={classes.gridContainer}
			>
				<Grid item xs={12} className={classes.gridItem}>
					<Paper className={classes.paper}>
						<Typography>Let's build together</Typography>
						<Typography>
							Have a project you're looking to get off the ground?
							I'd love to hear from you. Send a message to get the
							ball rolling.
						</Typography>
					</Paper>
				</Grid>
				<Grid item xs={12} className={classes.gridItem}>
					<Paper className={classes.paper}>
						<Formik
							initialValues={{
								firstName: "",
								lastName: "",
								email: "",
								message: "",
							}}
							onSubmit={handleSubmit}
						>
							{
								({ values }) => (
									<Form>
										<div>
											<Field
												name="firstName"
												component={MyField}
												label="first name"
											/>

											{/* <TextField
									name="firstName"
									placeholder="first name"
									value={values.firstName}
									onChange={handleChange}
									onBlur={handleBlur}
								/> */}
										</div>

										<div>
											<Field
												name="lastName"
												component={MyField}
												label="last name"
											/>
											{/* <TextField
									name="lastName"
									placeholder="last name"
									value={values.lastName}
									onChange={handleChange}
									onBlur={handleBlur}
								/> */}
										</div>

										<div>
											<Field
												name="email"
												component={MyField}
												label="email"
											/>
											{/* <TextField
									name="email"
									placeholder="email"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/> */}
										</div>
										<div>
											<Field
												name="message"
												component={MyField}
												label="message"
											/>
											{/* <TextField
									name="email"
									placeholder="email"
									value={values.email}
									onChange={handleChange}
									onBlur={handleBlur}
								/> */}
										</div>
										<Button type="submit">submit</Button>
										{/* <pre>
												{JSON.stringify(
													values,
													null,
													2
												)}
											</pre> */}
									</Form>
								)

								// <div>Contact me herrrrrreee</div>
							}
						</Formik>
					</Paper>
				</Grid>
				<Grid item xs={12} className={classes.gridItem}>
					<Paper className={classes.paper}>
						<Typography>Let's Connect</Typography>
						<Typography>
							Social media links here
							<Link
								href="https://www.linkedin.com/in/donald-yeh-b3b1426/"
								// onClick={preventDefault}
								variant="body2"
							>
								{/* {'variant="body2"'} */}
								<LinkedInIcon />
							</Link>
							<Link
								href="https://github.com/DonYeh"
								// onClick={preventDefault}
								variant="body2"
							>
								{/* {'variant="body2"'} */}
								<GitHubIcon />
							</Link>
							<Link
								href="https://twitter.com/heydonaldyeh"
								// onClick={preventDefault}
								variant="body2"
							>
								{/* {'variant="body2"'} */}
								<TwitterIcon />
							</Link>
						</Typography>
					</Paper>
				</Grid>
			</Grid>
			{/* </Box> */}
		</>
	);
};

export default Contact;
