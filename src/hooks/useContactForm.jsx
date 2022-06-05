import { useState } from 'react';
import formValidations from '../lib/formValidations';

const COMMENT_MIN_LENGTH = 10;
const initialForm = {
	email: {
		value: '',
		error: false,
	},
	comment: '',
};

const useContactForm = () => {
	const [formValues, setFormValues] = useState(initialForm);

	const setEmail = emailValue => {
		const error =
			emailValue.length === 0
				? false
				: !formValidations.email.regularExp.test(emailValue);

		setFormValues({
			...formValues,
			email: { value: emailValue, error },
		});
	};

	const setComment = commentValue => {
		setFormValues({
			...formValues,
			comment: commentValue,
		});
	};

	const isFormInvalid =
		formValues.email.value.length === 0 ||
		formValues.email.error ||
		formValues.comment.length === 0;

	const resetContactForm = () => setFormValues(initialForm);

	return {
		formValues,
		setEmail,
		setComment,
		isFormInvalid,
		resetContactForm,
		COMMENT_MIN_LENGTH,
	};
};

export default useContactForm;
