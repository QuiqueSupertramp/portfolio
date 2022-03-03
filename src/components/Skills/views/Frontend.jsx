import html from '../../../images/skills/frontend/html.svg';
import css from '../../../images/skills/frontend/css.svg';
import js from '../../../images/skills/frontend/js.svg';
import react from '../../../images/skills/frontend/react.svg';
import vue from '../../../images/skills/frontend/vue.svg';

const Frontend = () => {
	return (
		<article className='skills__frontend'>
			<div className='skills__logos'>
				<img src={html} alt='html' />
				<img src={css} alt='css' />
				<img src={js} alt='javascript' />
				<img src={react} alt='react js' />
				<img src={vue} alt='vue js' />
			</div>
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
				tempora fuga consequuntur magnam, ad voluptatibus itaque praesentium
				fugit architecto deleniti obcaecati eligendi possimus culpa odio
				repudiandae provident suscipit iure aspernatur autem rerum nobis dolor
				mollitia. Eligendi ipsa ex asperiores non earum molestiae, quia repellat
				alias perspiciatis dolores accusantium impedit fugiat.
			</div>
		</article>
	);
};

export default Frontend;
