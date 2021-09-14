// npm install got
// mkdir data

const fs = require('fs');
const got = require('got');

(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m01.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/scrapedata.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();

(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m02.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/scrapedata.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m03.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/scrapedata.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m04.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/scrapedata.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m05.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/scrapedata.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m06.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/scrapedata.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m07.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/scrapedata.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m08.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/scrapedata.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m09.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/scrapedata.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
(async () => {
	try {
		const response = await got('https://parsons.nyc/aa/m10.html');
		console.log(response.body);
		fs.writeFileSync('/home/ec2-user/environment/data/scrapedata.txt', response.body);
		//=> '<!doctype html> ...'
	} catch (error) {
		console.log(error.response.body);
		//=> 'Internal server error ...'
	}
})();
