const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
	res.send('Working fine');
});

app.listen(PORT, () => {
	console.log(`Server started at ${PORT}`);
});
