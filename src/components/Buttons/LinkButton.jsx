const LinkButton = ({
	href = '#',
	children,
	filled = true,
	fullWidth = true,
	className = '',
	smallText = false,
	...props
}) => {
	const isFilled = filled ? 'btn--filled' : 'btn--ghost';
	const isFullWidth = fullWidth ? 'w100' : null;
	const isSmallText = smallText ? 'text-sm' : null;

	return (
		<a
			{...props}
			href={href}
			className={`btn ${isFilled} ${isFullWidth} ${isSmallText} ${className}`}>
			{children}
		</a>
	);
};

export default LinkButton;
