import data from '../SkillsData.js';
import down from '../../../images/skills/down.svg';
import { useRef } from 'react';

const SkillsViewMobile = ({ skill }) => {
	const toggle = useRef();
	const onClick = e => {
		e.target.classList.toggle('skills__reverse');
		toggle.current?.classList.toggle('skills__toggle');
	};
	return (
		<div className='skills__wrapper'>
			<article className='skills__main'>
				<div className='skills__title'>
					<h3 className='skills__h3'>{data[skill].title}</h3>
					<img onClick={onClick} src={down} alt='' />
				</div>
				<div className='skills__text skills__toggle' ref={toggle}>
					<p className='skills__p'>{data[skill].desc}</p>
					<div className='skills__logos'>
						{data[skill].imgs.map(el => {
							return <img src={el} alt='' className='skills__img' key={el} />;
						})}
					</div>
				</div>
			</article>
		</div>
	);
};

export default SkillsViewMobile;
