import data from '../../SkillsData.js';
import { useRef } from 'react';

const SkillsViewMobile = ({ skill }) => {
	const toggle = useRef();

	const toggleShow = e => {
		e.target.classList.toggle('skills__reverse');
		toggle.current?.classList.toggle('skills__show');
	};
	return (
		<article className="skills__main">
			<div className="skills__title">
				<h3 className="skills__h3">{data[skill].title}</h3>
				<img
					onClick={toggleShow}
					src="images/skills/down.svg"
					alt="arrow down"
				/>
			</div>
			<div className="skills__text skills__show" ref={toggle}>
				<p className="skills__p">{data[skill].desc}</p>
				<div className="skills__logos">
					{data[skill].images.map(el => {
						return (
							<img
								src={el.img}
								alt={el.text}
								className="skills__img"
								key={el.text}
							/>
						);
					})}
				</div>
			</div>
		</article>
	);
};

export default SkillsViewMobile;
