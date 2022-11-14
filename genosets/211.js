const gql = require('gql');

module.exports = {
  id: 211,
  description: 'Use this module to help determine if there\'s a problem metabolizing ethanol with ADH (Alcohol dehydrogenase), meaning alcohol has a greater effect.',
  query: gql.atLeast(2, [
    gql.has('rs6413413', 'T'),
    gql.has('rs283413', 'T'),
    gql.has('rs1693482', 'A'),
    gql.has('rs698', 'G'),
  ]),
};
