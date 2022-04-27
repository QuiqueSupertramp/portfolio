const Emailnput = ({ validation, email }) => {
	return (
		<div className="contact__email">
			<input
				type="email"
				className={[
					'contact__emailInput',
					email.input.active ? 'input-active' : null,
				].join(' ')}
				placeholder="Email..."
				value={email.input.value}
				onChange={email.onChange}
				onFocus={email.onFocus}
				onBlur={email.onBlur}
				required
			/>
			{email.input.error && (
				<p className="contact__emailError">* {validation.errorMessage}</p>
			)}
		</div>
	);
};

export default Emailnput;
