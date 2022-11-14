const gql = require('gql');

module.exports = {
  id: 238,
  description: 'This links to red hair per gs238.',
  query: gql.or([
    gql.only('rs1805007', 'T'),
    gql.only('rs1805008', 'T'),
    gql.only('rs1805009', 'C'),
  ]),
};
