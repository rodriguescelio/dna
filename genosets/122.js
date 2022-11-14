const gql = require('gql');
const gs144 = require('./144');

module.exports = {
  id: 122,
  description: 'This script determines if a genome has an increased risk of baldness as per gs122.',
  query: gql.and([
    gs144.query,
		gql.only('rs6625163', 'A'),
		gql.or([
			gql.only('rs1160312', 'A'),
			gql.exact('rs1160312', 'AG'),
			gql.and([
				gql.only('rs201571', 'T'),
				gql.only('rs6036025', 'G'),
			]),
		]),
	]),
};
