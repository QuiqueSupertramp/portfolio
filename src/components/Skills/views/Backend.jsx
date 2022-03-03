import node from '../../../images/skills/backend/node.svg';
import express from '../../../images/skills/backend/express.svg';
import mongo from '../../../images/skills/backend/mongo.svg';

const Backend = () => {
	return (
		<article className='skills__backend'>
			<div className='skills__logos'>
				<img src={node} alt='node' />
				<img src={express} alt='express' />
				<img src={mongo} alt='mongo' />
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

export default Backend;
