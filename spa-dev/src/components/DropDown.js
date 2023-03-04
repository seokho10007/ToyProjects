class DropDown {
	constructor($app, { state, setState }) {
		this.$app = $app;
		this.state = state;
		this.setState = setState;

		this.$dropdown = document.createElement('div');
		this.$dropdown.id = 'dropdown';
		this.$dropdown.classList.add('area');
		this.$app.append(this.$dropdown);
	}

	createSelectList() {
		const { filteredNum } = this.state;
		const $select = document.createElement('select');

		const [$option1, $option2] = [5, 15].map((num) => {
			const $option = document.createElement('option');
			$option.value = num;
			if (num === filteredNum) $option.selected = true;
			$option.innerHTML = `${num}개씩`;
			return $option;
		});

		$select.append($option1, $option2);

		$select.addEventListener('change', (e) => {
			this.setState({ filteredNum: parseInt(e.target.value), pageNum: 0 });
		});

		return $select;
	}

	render() {
		const $select = this.createSelectList();

		this.$dropdown.appendChild($select);
	}
}

export default DropDown;
