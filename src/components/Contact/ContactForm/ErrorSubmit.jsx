const ErrorSubmit = ({ submitError }) => {
	return (
		<div className='contact__error'>
			<h4>
				{submitError === false
					? 'Mensaje enviado correctamente'
					: 'No se ha podido enviar'}
			</h4>
		</div>
	);
};

export default ErrorSubmit;
