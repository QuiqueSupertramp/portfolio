import vite from '../../../images/skills/tools/vite.svg';
import git from '../../../images/skills/tools/git.svg';
import npm from '../../../images/skills/tools/npm.svg';
import eslint from '../../../images/skills/tools/eslint.svg';

const Tools = () => {
	return (
		<article className='skills__main'>
			<div className='skills__logos'>
				<img src={git} alt='git' />
				<img src={vite} alt='vite' />
				<img src={npm} alt='npm' />
				<img src={eslint} alt='eslint' />
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
				tempora fuga consequuntur magnam, ad voluptatibus itaque praesentium
				fugit architecto deleniti obcaecati eligendi possimus culpa odio
				repudiandae provident suscipit iure aspernatur autem rerum nobis dolor
				mollitia. Eligendi ipsa ex asperiores non earum molestiae, quia repellat
				alias perspiciatis dolores accusantium impedit fugiat.
			</p>
		</article>
	);
};

export default Tools;
