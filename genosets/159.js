const gql = require('gql');

module.exports = {
  id: 159,
  description: 'Your CYP1A2 fast metabolizer status means that you are less stimulated by caffeine, as per gs159',
  query: gql.and([
    gql.exact('rs762551', 'AA'),
    gql.not(gql.has('rs12720461', 'T')),
    gql.not(gql.has('rs2069526', 'G')),
    gql.not(gql.has('rs28399424', 'T')),
  ]),
};
