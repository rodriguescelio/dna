const gql = require('gql');

module.exports = {
  id: 228,
  description: 'Use this module to help determine if affected by sickle cell anemia.',
  query: gql.or([
    gql.exact('rs334', 'TT'),
    gql.exact('i3003137', 'AA'),
  ]),
};
