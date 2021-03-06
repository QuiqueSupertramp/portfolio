const Button = ({
	href = '#',
	children,
	filled = true,
	fullWidth = true,
	smallText = false,
	className = '',
	...props
}) => {
	const isFilled = filled ? 'btn--filled' : 'btn--ghost';
	const isFullWidth = fullWidth ? 'w100' : null;
	const isSmallText = smallText ? 'text-sm' : null;
	return (
		<button
			{...props}
			href={href}
			className={`btn ${isFilled} ${isFullWidth} ${isSmallText} ${className}`}>
			{children}
		</button>
	);
};

export default Button;
