import Title from '../Title/Title';
import './Contact.css';
import image from '../../images/contact.png';
import useForm from '../../hooks/useForm';
import sendEmail from '../../services/sendEmail';
import { useState } from 'react';

const validations = {
	email: {
		regularExp:
			/^[a-zñÑ0-9_-]+(?:\.[a-zñÑ0-9_-]+)*@(?:[a-z0-9](?:[a-z0-9-_]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9]*[a-z0-9])?$/,
		errorMessage: 'El email es incorrecto',
	},
};

const Contact = () => {
	const email = useForm(validations.email.regularExp);
	const comment = useForm();

	const [submitError, setSubmitError] = useState(null);

	const onSubmit = e => {
		e.preventDefault();
		if (!email.error && comment.value.length !== 0) {
			const data = {
				email: email.value,
				comment: comment.value,
			};
			sendEmail(data).then(res => {
				if (res.ok === true) {
					setSubmitError(false);
					email.reset();
					comment.reset();
				} else {
					setSubmitError(true);
				}
				setTimeout(() => {
					setSubmitError(null);
				}, 4000);
			});
		}
	};

	return (
		<section className='contact' id='form'>
			<Title text='Say Hello!' number='4' />
			<div className='contact__container'>
				<form className='contact__form' onSubmit={onSubmit}>
					<div className='contact__email'>
						<input
							type='email'
							className={[
								'contact__emailInput',
								email.active ? 'active' : null,
							].join(' ')}
							placeholder='Email...'
							value={email.value}
							onChange={email.onChange}
							onFocus={email.onFocus}
							onBlur={email.onBlur}
							required
						/>
						<div className='contact__emailError'>
							{email.error && <p>* {validations.email.errorMessage}</p>}
						</div>
					</div>
					<textarea
						className={[
							'contact__comment',
							comment.active ? 'active' : null,
						].join(' ')}
						rows='6'
						placeholder='Mensaje...'
						value={comment.value}
						onChange={comment.onChange}
						onFocus={comment.onFocus}
						onBlur={comment.onBlur}
						required></textarea>
					{submitError !== null && (
						<div className='contact__error'>
							<h4>
								{submitError === false
									? 'Mensaje enviado correctamente'
									: 'No se ha podido enviar'}
							</h4>
						</div>
					)}

					<input type='submit' className='contact__submitBtn' value='Enviar' />
				</form>
				<div className='contact__image'>
					<img src={image} alt='' />
				</div>
			</div>
		</section>
	);
};

export default Contact;
