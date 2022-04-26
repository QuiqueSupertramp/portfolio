import { useEffect, useState } from 'react';

const useInput = regularExp => {
	const [input, setInput] = useState({
		value: '',
		error: false,
		active: false,
	});

	const onChange = e => setInput({ ...input, value: e.target.value });
	const reset = () => setInput({ ...input, value: '' });
	const onFocus = () => setInput({ ...input, active: true });
	const onBlur = () => setInput({ ...input, active: false });
	const setError = error => setInput({ ...input, error });

	const validateInput = () => {
		if (!regularExp) return;
		if (input.value.length === 0) return setError(false);
		regularExp.test(input.value) ? setError(false) : setError(true);
	};

	useEffect(() => {
		validateInput();
	}, [input.value]);

	return { input, onChange, onFocus, onBlur, reset };
};

export default useInput;
