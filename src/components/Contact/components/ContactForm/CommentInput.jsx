const CommentInput = ({ comment }) => {
	return (
		<textarea
			className={[
				'contact__comment',
				comment.input.active ? 'input-active' : null,
			].join(' ')}
			rows="6"
			placeholder="Mensaje..."
			value={comment.input.value}
			onChange={comment.onChange}
			onFocus={comment.onFocus}
			onBlur={comment.onBlur}
			required></textarea>
	);
};

export default CommentInput;
