import express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const uri =
	'mongodb+srv://sukho1007:wltjrgh1007@simple-board-cluster.aat6r.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Hello! There is Web Server!');
});

client.connect((err) => {
	console.log('db연결', err);
	client.close();
});

app.listen(3065, () => {
	console.log('서버 연결 성공');
});
