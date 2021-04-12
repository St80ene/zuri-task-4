const axios = require('axios');
const fs = require('fs');

async function posts() {
	const url = 'http://jsonplaceholder.typicode.com/posts';
	let response = await axios.get(url);
	let data = JSON.stringify(response.data, null, 2);

	return data;
}

posts().then(result => {
	fs.writeFile('./result/posts.json', result, (error) => {
		if (error) {
			console.error(error);
			return
		}
		return 'File created...';
	});
}).catch(error => console.error(error))
