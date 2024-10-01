import { useState, useEffect } from 'react';

const useFetch = (url, requestOptions) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(url, requestOptions)
		.then(res => {
			if (!res.ok) {
					throw Error('Some error');
			}
			return res.json();
		})
		.then(data => {
			setData(data);
			setIsPending(false);
			setError(null);
		})
		.catch(err => {
			setIsPending(false);
			setError(err.message);
		});
	}, [url, requestOptions]);

	return { data, isPending, error };
}

export default useFetch;