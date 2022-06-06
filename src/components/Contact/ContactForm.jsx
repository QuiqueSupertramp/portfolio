import { useState, useEffect } from 'react';
import ErrorSubmit from './ErrorSubmit';
import useContactForm from '../../hooks/useContactForm';
import sendEmail from '../../lib/services/sendEmail';

const ContactForm = () => {
	const [submitError, setSubmitError] = useState(null);

	const { formValues, setEmail, setComment, isFormInvalid, resetContactForm } =
		useContactForm();

	// Efecto para q el mensaje de éxito o error aparezca durante 5sg
	useEffect(() => {
		if (submitError === null) return;
		const timeoutID = setTimeout(() => setSubmitError(null), 5000);
		return () => clearTimeout(timeoutID);
	}, [submitError]);

	return (
		<form
			className="contact__form"
			onSubmit={e =>
				onSubmit(e, isFormInvalid, setSubmitError, formValues, resetContactForm)
			}>
			{submitError !== null && <ErrorSubmit submitError={submitError} />}
			<div className="contact__email">
				<input
					type="email"
					className="contact__emailInput"
					placeholder="Email..."
					value={formValues.email.value}
					onChange={e => setEmail(e.target.value)}
					required
				/>
				{formValues.email.error && (
					<p className="contact__emailError">* El email es incorrecto</p>
				)}
			</div>
			<textarea
				className="contact__comment"
				name="comment"
				rows="6"
				placeholder="Mensaje..."
				value={formValues.comment}
				onChange={e => setComment(e.target.value)}
				required></textarea>
			<button
				type="submit"
				className="btn btn--filled btn--submit w100"
				disabled={isFormInvalid}>
				Enviar
			</button>
		</form>
	);
};

// Función para mail enviado correctamente
const onSuccess = (setSubmitError, resetContactForm) => {
	setSubmitError({
		ok: false,
		message: 'Mensaje enviado correctamente',
	});
	resetContactForm();
};

const onSubmit = (
	e,
	isFormInvalid,
	setSubmitError,
	formValues,
	resetContactForm
) => {
	e.preventDefault();

	if (isFormInvalid) {
		setSubmitError({
			ok: true,
			message: 'Revisa todos los campos',
		});
		return;
	}

	const data = {
		email: formValues.email.value,
		comment: formValues.comment,
	};

	sendEmail(data).then(res => {
		res.ok === true
			? onSuccess(setSubmitError, resetContactForm)
			: setSubmitError({
					ok: true,
					message: 'No se ha podido enviar',
			  });
	});
};

export default ContactForm;
