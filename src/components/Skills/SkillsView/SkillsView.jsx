import data from '../SkillsData.js';

const SkillsView = ({ skill }) => {
	return (
		<div className='skills__wrapper'>
			<article className='skills__main'>
				<h3 className='skills__h3'>{data[skill].title}</h3>
				<p className='skills__p'>{data[skill].desc}</p>
				<div className='skills__logos'>
					{data[skill].imgs.map(el => {
						return <img src={el} alt='' className='skills__img' key={el} />;
					})}
				</div>
			</article>
		</div>
	);
};

export default SkillsView;
