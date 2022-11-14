const colors = require('ansi-colors');
const { readFileSync, existsSync, readdirSync } = require('fs');
const { join } = require('path');
const dna2json = require('dna2json');
const { SingleBar, Presets } = require('cli-progress');

if (process.argv.length < 3) {
  console.log(colors.red('Invalid arguments!'));
  process.exit(1);
}

const csvFilePath = process.argv[2];

if (!existsSync(csvFilePath)) {
  console.log(colors.red('CSV file not found!'));
  process.exit(1);
}


console.log(colors.cyan('Loading genosets'));

const genosets = [];
const genosetsDir = join(__dirname, 'genosets');

readdirSync(genosetsDir).forEach(file => {
  genosets.push(require(join(genosetsDir, file)));
});

console.log(colors.cyan('Loading csv file.'));

const csvFile = readFileSync(csvFilePath);

console.log(colors.cyan('Processing csv file.'));

dna2json.parse(csvFile.toString('ascii'), (err, dna) => {
  
  console.log(colors.cyan('Running tests...\n'));

  const progress = new SingleBar(
    { format: colors.yellowBright('{bar} {percentage}%') },
    Presets.shades_classic
  );

  progress.start(genosets.length, 0);

  const results = [];

  genosets.forEach((it, index) => {
    progress.update(index + 1);

    results.push({
      id: it.id,
      description: it.description,
      result: it.query(dna),
    });
  });

  progress.stop();

  console.clear();
  console.log('\033[2J');

  results.forEach(it => {
    console.log(colors.white(it.description));
    console.log(colors.white('Result:'), colors.red(it.result ? 'Positive' : 'Negative'));
    console.log(colors.white('See more:'), colors.bold.white(`https://www.snpedia.com/index.php/gs${it.id}`));
    console.log(colors.yellow('-'.repeat(process.stdout.columns)));
  });
});
