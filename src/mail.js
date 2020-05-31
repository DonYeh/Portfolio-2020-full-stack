require("dotenv").config();

const nodemailer = require("nodemailer");
let sgTransport = require("nodemailer-sendgrid-transport");
const nodemailerSendgrid = require("nodemailer-sendgrid");
const sgMail = require("@sendgrid/mail");

const smtpTransport = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

const transport = nodemailer.createTransport(
	sgTransport({
		auth: {
			api_key: process.env.SENDGRID_API_KEY,
		},
	})
);

const sendEmail = ({ firstName, lastName, email, message }) => {
	const mail = {
		from: email,
		to: process.env.EMAIL_USER,
		subject: `new message from ${firstName} ${lastName}`,
		text: `from: ${email}
message: ${message}`,
	};

	smtpTransport.sendMail(mail, (err, response) => {
		if (err) {
			console.log(err);
		} else {
			//code confirmation page modal here
			sendConfirmationEmail({ firstName, lastName, email, message });
			console.log("email has been sent!", response);
		}
		// smtpTransport.close();
	});
};

const sendConfirmationEmail = ({ firstName, lastName, email, message }) => {
	const msg = {
		to: `${firstName} ${lastName} <${email}>`,
		from: process.env.SG_FROM_EMAIL,
		subject: "Confirmation email",
		text: "texttexttextext",
		html: "<h1>Thanks for contacting me! I will get back to you soon!</h1>",
	};

	sgMail.setApiKey(process.env.SENDGRID_API_KEY);

	(async () => {
		try {
			await sgMail.send(msg);
		} catch (error) {
			console.error(error);

			if (error.response) {
				console.error(error.response.body);
			}
		}
	})();
	//
};

// sendEmail({
// 	firstName: "d",
// 	lastName: "yeh",
// 	email: "donald.yeh@gmail.com",
// 	message: "testing",
// });
module.exports = { sendEmail };
