import './AvatarMenu.css';

const github = 'images/social/github.svg';
const linkedin = 'images/social/linkedin.svg';
const instagram = 'images/social/instagram.svg';

const AvatarMenu = () => {
	return (
		<div className='avatarMenu'>
			<div className='header__circle'></div>
			<div className='socials'>
				<a
					href='https://github.com/QuiqueSupertramp'
					className='social'
					target='_blank'
					rel='noreferrer'>
					<img src={github} alt='github' />
				</a>
				<a
					href='https://linkedin.com/in/quiquesupertramp'
					className='social social1'
					target='_blank'
					rel='noreferrer'>
					<img src={linkedin} alt='linkedin' />
				</a>
				<a
					href='https://instagram.com/quiquesupertramp'
					className='social social2'
					target='_blank'
					rel='noreferrer'>
					<img src={instagram} alt='instagram' />
				</a>
			</div>
			<img
				className='header__emoji'
				src='images/bienvenidos.png'
				alt='Quique Supertramp Avatar'
			/>
		</div>
	);
};

export default AvatarMenu;
