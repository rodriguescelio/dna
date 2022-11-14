const gql = require('gql');

module.exports = {
  id: 221,
  description: 'Use this module to help determine if there\'s an increased risk of gluten intolerance and celiac disease in europeans.',
  query: gql.and([
    gql.has('rs2395182', 'T'),
    gql.has('rs7775228', 'C'),
    gql.not(gql.has('rs4713586', 'C')),
  ]),
};
