import sendEmail from '../../../../services/sendEmail';
import { useState, useEffect } from 'react';
import Emailnput from './Emailnput';
import CommentInput from './CommentInput';
import ErrorSubmit from './ErrorSubmit';
import formValidations from '../../../../lib/formValidations';
import useInput from '../../../../hooks/useInput';

const ContactForm = () => {
	const email = useInput(formValidations.email.regularExp);
	const comment = useInput();
	const [submitError, setSubmitError] = useState(null);

	// Efecto para q el mensaje de éxito o error aparezca durante 5sg
	useEffect(() => {
		if (submitError === null) return;
		const timeoutID = setTimeout(() => setSubmitError(null), 5000);
		return () => clearTimeout(timeoutID);
	}, [submitError]);

	// Función para mail enviado correctamente
	const emailSended = () => {
		setSubmitError(false);
		email.reset();
		comment.reset();
	};

	const onSubmit = e => {
		e.preventDefault();

		if (email.input.error || comment.input.value.length === 0) {
			setSubmitError(true);
			return;
		}

		const data = {
			email: email.input.value,
			comment: comment.input.value,
		};

		sendEmail(data).then(res => {
			res.ok === true ? emailSended() : setSubmitError(true);
		});
	};

	return (
		<form className="contact__form" onSubmit={onSubmit}>
			<Emailnput validation={formValidations.email} email={email} />
			<CommentInput comment={comment} />
			{submitError !== null && <ErrorSubmit submitError={submitError} />}
			<input type="submit" className="btn btn--filled w100" value="Enviar" />
		</form>
	);
};

export default ContactForm;
