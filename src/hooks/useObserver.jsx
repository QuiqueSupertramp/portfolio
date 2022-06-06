import { useEffect, useRef } from 'react';

function useObserver(rootMargin = '0px 0px -150px 0px') {
	const ref = useRef();

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry], observer) => {
				if (entry.isIntersecting) {
					ref.current.classList.add('showOn');
					observer.unobserve(ref.current);
				}
			},
			{
				rootMargin,
			}
		);
		if (ref.current) {
			observer.observe(ref.current);
		}
		return () => {
			observer.unobserve(ref.current);
		};
	}, []);
	return { ref };
}

export default useObserver;
