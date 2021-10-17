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

export const deleteItem = (id: string) => {
	// 비동기 통신, id값에 따라 아이템 삭제
};

export const changeItemCompletion = (id: string) => {
	// 비동기 통신, id값에 아이템 상태 변경
};
