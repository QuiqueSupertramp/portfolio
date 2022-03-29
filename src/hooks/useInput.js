import { useEffect, useState } from 'react';

const useInput = regularExp => {
	const [value, setValue] = useState('');
	const [error, setError] = useState(false);
	const [active, setActive] = useState(false);

	const onChange = e => setValue(e.target.value);
	const reset = () => setValue('');
	const onFocus = () => setActive(true);
	const onBlur = () => setActive(false);

	useEffect(() => {
		if (!regularExp) return;
		if (value.length === 0) return setError(false);
		regularExp.test(value) ? setError(false) : setError(true);
	}, [value]);

	return { value, error, active, onChange, onFocus, onBlur, reset };
};

export default useInput;
