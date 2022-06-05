const ErrorSubmit = ({ submitError }) => {
	const styles =
		submitError.ok === true ? 'contact__error' : 'contact__success';
	return <span className={styles}>{submitError.message}</span>;
};

export default ErrorSubmit;
