import * as React from "react";
import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import { TextFieldProps } from "@material-ui/core/TextField/TextField";

interface Props extends FieldProps {
	label: string;
	placeholder: string;
}

export const MyField: React.FC<FieldProps & TextFieldProps> = ({
	placeholder,
	field,
	label,
}) => {
	return (
		<TextField
			label={label}
			placeholder={placeholder}
			{...field}
			style={{ width: "99%" }}
		/>
	);
};
