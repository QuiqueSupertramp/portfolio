import useInput from '../../../hooks/useInput';
import sendEmail from '../../../services/sendEmail';
import { useState } from 'react';
import Emailnput from './Emailnput';
import CommentInput from './CommentInput';
import ErrorSubmit from './ErrorSubmit';
import formValidations from '../../../lib/formValidations';

const ContactForm = () => {
	const email = useInput(formValidations.email.regularExp);
	const comment = useInput();
	const [submitError, setSubmitError] = useState(null);

	const emailSended = () => {
		setSubmitError(false);
		email.reset();
		comment.reset();
	};

	const cleanErrorMessage = () => setTimeout(() => setSubmitError(null), 5000);

	const onSubmit = e => {
		e.preventDefault();

		if (email.input.error || comment.input.value.length === 0) {
			setSubmitError(true);
			cleanErrorMessage();
			return;
		}

		const data = {
			email: email.input.value,
			comment: comment.input.value,
		};

		sendEmail(data).then(res => {
			res.ok === true ? emailSended() : setSubmitError(true);
			cleanErrorMessage();
		});
	};
	return (
		<form className='contact__form' onSubmit={onSubmit}>
			<Emailnput validation={formValidations.email} email={email} />
			<CommentInput comment={comment} />
			{submitError !== null && <ErrorSubmit submitError={submitError} />}
			<div
				className='g-recaptcha'
				data-sitekey='6LeUn6EfAAAAAKIJPZ6etrL44ecGrBJWSu7RMW4R'></div>
			<input
				type='submit'
				className='btn btn--filled contact__submitBtn'
				value='Enviar'
			/>
		</form>
	);
};

export default ContactForm;
