import React, { useCallback, useEffect, useState } from 'react';
import { createTest } from '../../../api';

const TestForm = ({ test, setTest }) => {
	const [test_id, setTestId] = useState<string>('');
	const [name, setName] = useState<string>('');
	const [auth, setAuth] = useState<string>('');
	const [context, setContext] = useState<string>('');

	const onChangeId = useCallback((e) => setTestId(e.target.value), [setTestId]);
	const onChangeName = useCallback((e) => setName(e.target.value), [setName]);
	const onChangeAuth = useCallback((e) => setAuth(e.target.value), [setAuth]);
	const onChangeContext = useCallback((e) => setContext(e.target.value), [setContext]);

	const onClickButton = useCallback(async () => {
		const data = {
			test_id,
			name,
			author: auth,
			context,
		};

		if (test_id && name && auth && context) {
			const testData = await createTest(data);

			console.log(testData);

			// setTest([...test, ...testData.data.testData]);
		}
	}, [test_id, name, auth, context, setTest, test]);

	const onScroll = () => {
		console.log(window.screenY, '@@@');
	};
	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);

	return (
		<>
			<form>
				<div>
					<input type="text" value={test_id} onChange={onChangeId} />
				</div>
				<div>
					<input type="text" value={name} onChange={onChangeName} />
				</div>
				<div>
					<input type="text" value={auth} onChange={onChangeAuth} />
				</div>
				<div>
					<input type="text" value={context} onChange={onChangeContext} />
				</div>
				<button type="button" onClick={onClickButton}>
					저장
				</button>
			</form>
		</>
	);
};

export default TestForm;
