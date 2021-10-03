import React from 'react';

const TestList = ({ test }) => {
	return <>{test[0] && test.map((v, i) => <div key={i}>{v.test_id}</div>)}</>;
};

export default TestList;
