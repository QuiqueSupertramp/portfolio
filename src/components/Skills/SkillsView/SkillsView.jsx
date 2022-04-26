import data from '../SkillsData.js';

const SkillsView = ({ skill }) => {
	return (
		<div className='skills__wrapper'>
			<article className='skills__main'>
				<h3 className='skills__h3'>{data[skill].title}</h3>
				<p className='skills__p'>{data[skill].desc}</p>
				<div className='skills__logos'>
					{data[skill].images.map(el => {
						return (
							<img
								key={el.text}
								src={el.img}
								title={el.text}
								alt={el.text}
								className='skills__img'
							/>
						);
					})}
				</div>
			</article>
		</div>
	);
};

export default SkillsView;
