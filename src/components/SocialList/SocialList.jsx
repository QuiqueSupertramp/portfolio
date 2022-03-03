import github from '../../images/social/github.svg';
import linkedin from '../../images/social/linkedin.svg';
import instagram from '../../images/social/instagram.svg';
import './SocialList.css';

const SocialList = () => {
	return (
		<div className='socialList'>
			<a
				href='https://github.com/QuiqueSupertramp'
				target='_blank'
				rel='noreferrer'>
				<img src={github} alt='github' />
			</a>
			<a
				href='https://linkedin.com/in/quiquesupertramp'
				target='_blank'
				rel='noreferrer'>
				<img src={linkedin} alt='linkedin' />
			</a>
			<a
				href='https://instagram.com/quiquesupertramp'
				target='_blank'
				rel='noreferrer'>
				<img src={instagram} alt='instagram' />
			</a>
		</div>
	);
};

export default SocialList;
