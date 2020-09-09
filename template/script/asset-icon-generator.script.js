const fs = require('fs');
const [folder] = process.argv.slice(2);
const dir = `${__dirname}/${folder}`;

function replaceAll(raw, regex, replace) {
  while (raw.includes(regex)) {
    raw = raw.replace(regex, replace);
  }
  return raw;
}
fs.readdir(dir, (err, files) => {
  if (err) {
    return;
  }
  const requireItems = files
    .filter((x) => !x.includes('@') && x.includes('.png'))
    .map((file) => {
      const name = replaceAll(file, '-', '_').replace('.png', '').toUpperCase();
      return `export const ${name} = require('./${file}')`;
    });
  const outputName = `${dir}/index.ts`;
  fs.writeFile(outputName, requireItems.join(';\n').concat(';\n'), (wError) => {
    console.log(wError);
  });
});
