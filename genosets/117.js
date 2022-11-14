const gql = require('gql');

module.exports = {
  id: 117,
  description: 'This strongly predicts type-1 diabetes as per gs117.',
  query: gql.and([
    gql.only('rs7454108', 'C'),
    gql.or([
      gql.only('rs2040410', 'A'),
      gql.exact('rs2040410', 'AG'),
    ]),
  ]),
};
