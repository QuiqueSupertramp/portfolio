import './AvatarMenu.css';

const AvatarMenu = () => {
	return (
		<div className="header__avatarMenu">
			<div className="header__circle"></div>
			<div className="header__socials">
				<a
					href="https://github.com/QuiqueSupertramp"
					className="header__social"
					target="_blank"
					rel="noopener noreferrer">
					<img src="images/social/github.svg" alt="github" title="github" />
				</a>
				<a
					href="https://linkedin.com/in/quiquesupertramp"
					className="header__social header__social1"
					target="_blank"
					rel="noopener noreferrer">
					<img
						src="images/social/linkedin.svg"
						alt="linkedin"
						title="linkedin"
					/>
				</a>
				<a
					href="https://instagram.com/quiquesupertramp"
					className="header__social header__social2"
					target="_blank"
					rel="noopener noreferrer">
					<img
						src="images/social/instagram.svg"
						alt="instagram"
						title="instagram"
					/>
				</a>
			</div>
			<img
				className="header__emoji"
				src="images/avatar.png"
				alt="Quique Supertramp Avatar"
			/>
		</div>
	);
};

export default AvatarMenu;
