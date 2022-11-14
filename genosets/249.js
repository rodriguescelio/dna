const gql = require('gql');

module.exports = {
  id: 249,
  description: 'This script determines if you have an increased risk of developing Parkinson\'s Disease, as per gs249',
  query: gql.and([
    gql.has('rs10513789', 'T'),
    gql.not(gql.exact('rs10513789', 'TT')),
  ]),
};
