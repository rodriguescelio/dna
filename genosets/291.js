const gql = require('gql')

module.exports = {
  id: 291,
  description: 'Use this module to help determine if your genome is lower risk for heart attack or cardiovascular incident.',
  query: gql.and([
    gql.exact('rs1108580', 'AA'),
    gql.exact('rs1611115', 'TT'),
  ]),
};
