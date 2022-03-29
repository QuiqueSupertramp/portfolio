import emoji from '../../../images/bienvenidos.png';
import github from '../../../images/social/github.svg';
import linkedin from '../../../images/social/linkedin.svg';
import instagram from '../../../images/social/instagram.svg';

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
				src={emoji}
				alt='Quique Supertramp Avatar'
			/>
		</div>
	);
};

export default AvatarMenu;
