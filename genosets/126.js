const gql = require('gql');

module.exports = {
  id: 126,
  description: 'This script determines if a genome is a poor metabolizer of the popular anticoagulant Warfarin as per gs126. Such genomes are at an increased risk of drug-induced side effects due to diminished drug elimination, and might need decreased dosages.',
  query: gql.or([
    gql.only('rs1799853', 'T'),
    gql.only('rs1057910', 'T'),
    gql.and([
      gql.exact('rs1799853', 'CT'),
      gql.exact('rs1057910', 'AT')
    ])
  ]),
};
