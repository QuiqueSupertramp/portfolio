import './AvatarMenu.css';

const AvatarMenu = () => {
	return (
		<div className="avatarMenu">
			<div className="header__circle"></div>
			<div className="socials">
				<a
					href="https://github.com/QuiqueSupertramp"
					className="social"
					target="_blank"
					rel="noopener noreferrer">
					<img src="images/social/github.svg" alt="github" />
				</a>
				<a
					href="https://linkedin.com/in/quiquesupertramp"
					className="social social1"
					target="_blank"
					rel="noopener noreferrer">
					<img src="images/social/linkedin.svg" alt="linkedin" />
				</a>
				<a
					href="https://instagram.com/quiquesupertramp"
					className="social social2"
					target="_blank"
					rel="noopener noreferrer">
					<img src="images/social/instagram.svg" alt="instagram" />
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
