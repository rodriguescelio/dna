const gql = require('gql');

module.exports = {
  id: 137,
  description: 'This script determines if you are at an increased risk for thyroid cancer, as per gs137',
  query: gql.and([
    gql.exact('rs965513', 'AA'),
    gql.exact('rs944289', 'TT'),
  ]),
};
