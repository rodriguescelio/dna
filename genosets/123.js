const gql = require('gql');

module.exports = {
  id: 123,
  description: 'This script determines if a genome has an increased risk of basal cell carcinoma, which is the most common form of skin cancer (in fact of any cancer) as per gs123.',
  query: gql.and([
    gql.only('rs7538876', 'A'),
    gql.only('rs801114', 'G'),
  ]),
};
