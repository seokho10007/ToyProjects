class PageTitle {
	constructor($app) {
		this.$app = $app;
		this.$pageTitle = document.createElement('div');
		this.$pageTitle.id = 'page_title';
		this.$app.append(this.$pageTitle);
	}

	render() {
		this.$pageTitle.innerHTML = 'Grepp Enterprise';
	}
}

export default PageTitle;
