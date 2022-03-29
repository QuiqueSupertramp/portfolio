const Emailnput = ({ validations, email }) => {
	return (
		<div className='contact__email'>
			<input
				type='email'
				className={['contact__emailInput', email.active ? 'blur' : null].join(
					' '
				)}
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
	);
};

export default Emailnput;
