class Pagination {
	constructor($app, { state, setState }) {
		this.$app = $app;
		this.state = state;
		this.setState = setState;

		this.$pagination = document.createElement('div');
		this.$pagination.id = 'pagination';
		this.$pagination.classList.add('area');

		this.addEvent();
		this.$app.append(this.$pagination);
	}

	addEvent() {
		this.$pagination.addEventListener('click', (e) => {
			const $target = e.target.closest('button');

			if (!$target) return;

			if ($target.innerText === '<<') {
				this.setState({ pageNum: 0 });
			} else if ($target.innerText === '>>') {
				this.setState({ pageNum: this.buttonCount - 1 });
			} else {
				this.setState({ pageNum: parseInt($target.innerText) - 1 });
			}
		});
	}

	createArrowButton() {
		return Array(2)
			.fill('')
			.map((_, i) => {
				const $arrowButton = document.createElement('button');
				$arrowButton.classList.add('arrow');

				$arrowButton.innerText = i === 0 ? '<<' : ' >>';

				return $arrowButton;
			});
	}

	createNumberButton() {
		const { pageNum, filteredNum, data } = this.state;
		const buttonCount = Math.round(data.length / filteredNum);

		this.buttonCount = buttonCount;

		return Array(buttonCount)
			.fill('')
			.map((_, i) => {
				const $button = document.createElement('button');
				$button.innerHTML = i + 1;

				if (i === pageNum) $button.style.color = 'red';

				return $button;
			});
	}

	render() {
		const [$left, $right] = this.createArrowButton();
		const numberButtons = this.createNumberButton();

		this.$pagination.append($left, ...numberButtons, $right);
	}
}

export default Pagination;
