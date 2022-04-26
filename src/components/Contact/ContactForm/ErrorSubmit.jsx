const ErrorSubmit = ({ submitError }) => {
	return (
		<span className='contact__error'>
			{submitError === false
				? 'Mensaje enviado correctamente'
				: 'No se ha podido enviar. Revisa que el email sea correcto'}
		</span>
	);
};

export default ErrorSubmit;
