const gql = require('gql')

module.exports = {
  id: 162,
  description: 'This script determines if you are a CYP2C9 poor metabolizer. CYP2C9 poor metabolizers require different dosages for drugs such as tamoxifen, warfarin, fluvastin, and many nonsteroidal anti-inflammatory agents such as aspirin, ibuprofen and naproxen, as per gs162',
  query: gql.atLeast(2, [
    gql.has('rs1799853', 'T'),
    gql.has('rs1057910', 'C'),
    gql.has('rs56165452', 'C'),
    gql.has('rs28371686', 'G'),
    gql.has('rs9332131', '-'),
    gql.has('rs7900194', 'A'),
    gql.has('rs2256871', 'C'),
    gql.has('rs9332130', 'G'),
    gql.has('rs28371685', 'T'),
    gql.has('rs9332239', 'T'),
    gql.has('rs1057909', 'G'),
    gql.has('rs2017319', 'T'),
    gql.exact('rs1799853', 'TT'),
    gql.exact('rs1057910', 'CC'),
    gql.exact('rs56165452', 'CC'),
    gql.exact('rs28371686', 'GG'),
    gql.exact('rs9332131', '--'),
    gql.exact('rs7900194', 'AA'),
    gql.exact('rs2256871', 'CC'),
    gql.exact('rs9332130', 'GG'),
    gql.exact('rs28371685', 'TT'),
    gql.exact('rs9332239', 'TT'),
    gql.exact('rs1057909', 'GG'),
    gql.exact('rs2017319', 'TT')
  ]),
};
