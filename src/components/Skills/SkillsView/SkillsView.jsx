// import './SkillsView.css';

import data from '../SkillsData.js';

const SkillsView = ({ skill }) => {
	return (
		<article className='skills__main'>
			<h3 className='skills__h3'>{skill}</h3>
			<p className='skills__p'>{data[skill].desc}</p>
			<div className='skills__logos'>
				{data[skill].imgs.map(el => {
					return <img src={el} alt='' className='skills__img' key={el} />;
				})}
			</div>
		</article>
	);
};

export default SkillsView;
