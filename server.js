const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('Every thing working fine');
});

app.listen(4000, () => {
	console.log('Server Started');
});
