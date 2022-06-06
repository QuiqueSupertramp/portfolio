import { useRef, useState } from 'react';
import ArrowDown from '../../Icons/ArrowDown';
import ArrowUp from '../../Icons/ArrowUp';

const SkillsViewMobile = ({ skill }) => {
	const toggle = useRef();
	const [showSkill, setShowSkill] = useState(false);
	const toggleShowView = () => setShowSkill(!showSkill);

	const ToggleArrow = showSkill ? ArrowUp : ArrowDown;

	return (
		<article className="skills__main">
			<div className="skills__title">
				<h3 className="skills__h3">{skill.title}</h3>
				<ToggleArrow className="skills__arrow" onClick={toggleShowView} />
			</div>
			{showSkill && (
				<div className="skills__text" ref={toggle}>
					<p className="skills__p">{skill.desc}</p>
					<div className="skills__logos">
						{skill.images.map(el => {
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
			)}
		</article>
	);
};

// const toggleShow = (showSkill, setShowSkill) => {
// 	// e.target.classList.toggle('skills__reverse');
// 	// toggle.current?.classList.toggle('skills__show');
// 	setShowSkill(!showSkill);
// };

export default SkillsViewMobile;
