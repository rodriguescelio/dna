const gql = require('gql');

module.exports = {
  id: 101,
  description: 'Probably able to digest milk, people without this are more likely to experience lactose intolerance, as per gs101.',
  query: gql.or([
    gql.exact('rs4988235', 'CT'),
    gql.only('rs4988235', 'T'),
    gql.exact('rs182549', 'CT'),
    gql.only('rs182549', 'T'),
  ]),
};
