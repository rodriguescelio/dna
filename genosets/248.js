const gql = require('gql');

module.exports = {
  id: 248,
  description: 'This script determines if you have an lower risk of developing Parkinson\'s Disease, as per gs248',
  query: gql.and([
    gql.has('rs34637584', 'A'),
    gql.has('rs11755699', 'C'),
  ]),
};
