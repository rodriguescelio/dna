const gql = require('gql');

module.exports = {
  id: 209,
  description: 'This script determines if you have an increased risk for developing panic disorder, as per gs209',
  query: gql.and([
    gql.has('rs3794808', 'A'),
    gql.has('rs140701', 'T'),
    gql.has('rs4583306', 'G'),
  ]),
};
