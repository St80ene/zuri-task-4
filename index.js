const axios = require('axios');
const fs = require('fs');

async function posts() {
	const url = 'http://jsonplaceholder.typicode.com/posts';
	let response = await axios.get(url);
	let data = JSON.stringify(response.data, null, 2);
	fs.writeFileSync('./result/posts.json', data, (error) => {
		if (error) {
			return error;
		}
		return 'File created...';
	});
}

posts();

