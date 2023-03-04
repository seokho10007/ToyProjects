import PageTitle from './components/PageTitle.js';
import Table from './components/Table.js';
import DropDown from './components/DropDown.js';
import Pagination from './components/Pagination.js';

// state: 현재 선택된 번호, 몇개 볼껀지, 데이터

class App {
	$app;
	state = {
		data: [],
		pageNum: 0, // 0, 1, 2, 3, 4, ...
		filteredNum: 5, // 5 or 15
	};

	constructor($app) {
		this.$app = $app;
		this.fetchData();
	}

	async fetchData() {
		const res = await fetch('/web/src/data/data.json');
		const data = await res.json();

		this.setState({ data });
	}

	setState(newState) {
		this.state = {
			...this.state,
			...newState,
		};

		this.render();
	}

	render() {
		const { state, setState } = this;

		this.$app.innerHTML = '';

		new PageTitle(this.$app).render();
		new DropDown(this.$app, { state, setState: setState.bind(this) }).render();
		new Table(this.$app, { state }).render();
		new Pagination(this.$app, { state, setState: setState.bind(this) }).render();
	}
}

export default App;
