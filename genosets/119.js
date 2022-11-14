const gql = require('gql');

module.exports = {
  id: 119,
  description: 'This script determines if you have an increased risk for developing breast cancer, as per gs119',
  query: gql.or([
    gql.and([
      gql.exact('rs1501299', 'GG'),
      gql.exact('rs2241766', 'TT'),
    ]),
    gql.and([
      gql.exact('rs1501299', 'GT'),
      gql.exact('rs2241766', 'TT'),
    ]),
    gql.and([
      gql.exact('rs1501299', 'GG'),
      gql.exact('rs2241766', 'GT'),
    ]),
  ]),
};
