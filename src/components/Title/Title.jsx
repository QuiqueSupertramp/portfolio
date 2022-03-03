import './Title.css';

const Title = ({ text, number }) => {
	return (
		<div className='title'>
			<span className='orange'>{number}.</span>
			<h2>{text}</h2>
		</div>
	);
};

export default Title;
