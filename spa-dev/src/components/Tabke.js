class Table {
	constructor($app, { state }) {
		this.$app = $app;
		this.state = state;

		this.$table = document.createElement('div');
		this.$table.id = 'table';
		this.$table.classList.add('area');

		this.$app.append(this.$table);
	}

	drawTable() {
		const $table = document.createElement('table');
		const $thead = this.drawThead();
		const $tbody = this.drawTbody();

		$table.append($thead);
		$table.append($tbody);

		return $table;
	}

	drawThead() {
		const $thead = document.createElement('thead');
		const keys = Object.keys(this.state.data[0]);

		for (let i = 0; i < keys.length; i++) {
			const $th = document.createElement('th');

			$th.innerHTML = keys[i];
			$thead.append($th);
		}

		$thead.classList.add('gray');

		return $thead;
	}

	drawTbody() {
		const $tbody = document.createElement('tbody');
		const { data, filteredNum, pageNum } = this.state;

		for (let i = 0; i < filteredNum; i++) {
			const account = data[i + filteredNum * pageNum];

			if (!account) break;

			const $tr = document.createElement('tr');
			const values = Object.values(account);

			for (let j = 0; j < values.length; j++) {
				const $td = document.createElement('td');

				if (i % 2 === 1) $td.classList.add('gray');

				$td.innerText = values[j];

				$tr.appendChild($td);
			}

			$tbody.appendChild($tr);
		}

		return $tbody;
	}

	render() {
		const $table = this.drawTable();
		this.$table.appendChild($table);
	}
}

export default Table;
