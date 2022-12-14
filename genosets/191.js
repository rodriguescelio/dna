const gql = require('gql');

module.exports = {
  id: 191,
  description: 'Problem metabolizing NSAIDs',
  query: gql.or([
    gql.has('rs1799853', 'T'),
    gql.has('rs1057910', 'C'),
    gql.and([
      gql.has('rs11572080', 'A'),
      gql.has('rs10509681', 'C'),
    ]),
  ]),
};
