const gpl = require('gql');

module.exports = {
  id: 266,
  description: 'Some of your data claims that you have 2 Y chromosomes. In particular it is claiming heterozygosity for a Y chromosomal SNP.',
  query: gpl.or([
    gpl.exact('rs9341296', 'CT'),
    gpl.exact('rs13304168', 'CT'),
    gpl.exact('rs1118473', 'AG'),
    gpl.exact('rs150173', 'AC'),
    gpl.exact('rs1558843', 'AC'),
    gpl.exact('rs16980426', 'GT'),
    gpl.exact('rs17222419', 'CT'),
    gpl.exact('rs16980601', 'AG'),
    gpl.exact('rs2032604', 'GT'),
    gpl.exact('rs2032624', 'AC'),
    gpl.exact('rs35567891', 'AG'),
    gpl.exact('rs9786379', 'AG'),
    gpl.exact('rs9786550', 'CG'),
    gpl.exact('rs9786832', 'AT'),
  ]),
};
