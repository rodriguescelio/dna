const gql = require('gql');

module.exports = {
  id: 216,
  description: 'Possessing two copies of the ApoE-ε4 allele confers a greater risk for all the diseases to which an individual with just one allele is at risk: an increased risk of Alzheimer\'s disease, other types of dementia, and cardiovascular disease (heart disease).',
  query: gql.and([
    gql.exact('rs429358', 'CC'),
    gql.exact('rs7412', 'CC')
  ]),
};
