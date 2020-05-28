require("dotenv").config();

const nodemailer = require("nodemailer");

const smtpTransport = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

const sendEmail = ({ firstName, lastName, email, message }) => {
	const mail = {
		from: email,
		to: process.env.EMAIL_USER,
		subject: `new message from ${firstName} ${lastName}`,
		text: message,
	};

	smtpTransport.sendMail(mail, (err, response) => {
		if (err) {
			console.log(err);
		} else {
			console.log("email has been sent!", response);
		}
		smtpTransport.close();
	});

	console.log("mail sent! from sendEmail");
};

// sendEmail();
module.exports = { sendEmail };
