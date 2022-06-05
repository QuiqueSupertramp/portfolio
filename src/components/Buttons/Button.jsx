const LinkButton = ({
	href = '#',
	children,
	filled = true,
	className = '',
	...props
}) => {
	const isFilled = filled ? 'btn btn--filled' : 'btn btn--ghost';
	return (
		<a {...props} href={href} className={`${isFilled} ${className}`}>
			{children}
		</a>
	);
};

export default LinkButton;
