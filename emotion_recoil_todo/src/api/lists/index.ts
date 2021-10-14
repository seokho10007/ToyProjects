export const addList = (title: string, type: string) => {
	// 비동기 통신 (axois)
	const content = {
		id: 100,
		title,
		createdAt: '1234',
		completed: type === '완료' ? true : false,
	};

	return content;
};
