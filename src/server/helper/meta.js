// Check to see what dev environment we are in
const isDeveloping = process.env.NODE_ENV !== 'production';

const isTest = process.env.NODE_ENV === 'test';

const port = isDeveloping ? 3000 : process.env.PORT;

module.exports = {
	isDeveloping,
	isTest,
	port,
};
