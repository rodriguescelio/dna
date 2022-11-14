const gql = require('gql');

module.exports = {
  id: 243,
  description: 'This script determines if a genome has at least 4 of 5 genotypes which increase, by approximately 50%, the risk of prostate cancer patients dying of disease, as per gs243',
  query: gql.atLeast(4, [
    gql.has('rs1137100', 'A'),
    gql.has('rs627839', 'T'),
    gql.has('rs2070874', 'T'),
    gql.has('rs10778534', 'C'),
    gql.has('rs5993891', 'T'),
  ]),
};
