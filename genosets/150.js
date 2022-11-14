const gql = require('gql');

module.exports = {
  id: 150,
  description: 'Most likely CYP2C19 normal, i.e. CYP2C19*1, and therefore of the "rapid metabolizer" phenotype, as per gs150',
  query: gql.and([
    gql.exact('rs4244285', 'GG'),
    gql.exact('rs17878459', 'GG'),
    gql.exact('rs4986893', 'GG'),
    gql.exact('rs28399504', 'AA'),
    gql.exact('rs41291556', 'TT'),
    gql.exact('rs17884712', 'GG'),
    gql.exact('rs6413438', 'CC'),
    gql.exact('rs17879685', 'CC'),
    gql.exact('rs12248560', 'CC'),
    gql.or([
      gql.exact('rs5787121', 'GG'),
      gql.exact('rs5787121', 'II'),
    ]),
  ]),
};
