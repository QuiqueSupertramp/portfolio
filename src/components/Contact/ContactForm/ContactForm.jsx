import useInput from '../../../hooks/useInput';
import sendEmail from '../../../services/sendEmail';
import { useState } from 'react';
import Emailnput from './Emailnput';
import CommentInput from './CommentInput';
import ErrorSubmit from './ErrorSubmit';

const validations = {
	email: {
		regularExp:
			/^[a-zñÑ0-9_-]+(?:\.[a-zñÑ0-9_-]+)*@(?:[a-z0-9](?:[a-z0-9-_]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?$/,
		errorMessage: 'El email es incorrecto',
	},
};

const ContactForm = () => {
	const email = useInput(validations.email.regularExp);
	const comment = useInput();
	const [submitError, setSubmitError] = useState(null);

	const sendIt = () => {
		setSubmitError(false);
		email.reset();
		comment.reset();
	};

	const onSubmit = e => {
		e.preventDefault();
		if (!email.error && comment.value.length !== 0) {
			const data = {
				email: email.value,
				comment: comment.value,
			};
			sendEmail(data).then(res => {
				res.ok === true ? sendIt() : setSubmitError(true);
				setTimeout(() => setSubmitError(null), 4000);
			});
		}
	};
	return (
		<form className='contact__form' onSubmit={onSubmit}>
			<Emailnput validations={validations} email={email} />
			<CommentInput comment={comment} />
			{submitError !== null && <ErrorSubmit submitError={submitError} />}
			<input
				type='submit'
				className='btn btn--filled contact__submitBtn'
				value='Enviar'
			/>
		</form>
	);
};

export default ContactForm;
