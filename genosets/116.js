const gql = require('gql');

module.exports = {
  id: 116,
  description: 'Determines if a genome is 80% likely to be unable to taste bitter. (GS116)',
  query: gql.and([
    gql.only('rs10246939', 'T'),
    gql.only('rs1726866', 'T'),
    gql.only('rs713598', 'C'),
  ]),
};
