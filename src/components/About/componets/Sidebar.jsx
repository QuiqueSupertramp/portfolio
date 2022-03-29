import photo from '../../../images/quique1.png';

const Sidebar = () => {
	return (
		<div className='about__sidebar'>
			<div className='photo'>
				<img src={photo} alt='foto portfolio' />
			</div>
			<div className='about__links'>
				<a className='btn btn--filled' href='#softSkills'>
					Soft Skills
				</a>
				<a className='btn btn--filled' href='#skills'>
					Hard Skills
				</a>
				<a className='btn btn--filled' href='#projects'>
					Projects
				</a>
			</div>
		</div>
	);
};

export default Sidebar;