/**
 * @description Script to generate asset icon with require function
 * @param urls: array of asset folder need to be indexing with generated asset
 * 
 * Usage
 *  node asset-icon-generator.script.js ../asset/icons ../asset/images
 * 
 * Output: icon-facebook.png => export const ICON_FACEBOOK = require('./icon-facebook.png');
 */


const fs = require('fs');
const path = require('path');
const dirname = path.dirname(__dirname);
const folders = process.argv.slice(2);

function replaceAll(raw, regex, replace) {
  while (raw.includes(regex)) {
    raw = raw.replace(regex, replace);
  }
  return raw;
}

function gen(folder) {
  const dir = `${dirname}/${folder}`;

  fs.readdir(dir, (err, files) => {
    if (err) {
      return;
    }
    const requireItems = files
      .filter(
        (x) => !x.includes('@') && (x.includes('.png') || x.includes('.jpg')),
      )
      .map((file) => {
        const name = replaceAll(file, '-', '_')
          .replace('.png', '')
          .replace('.jpg', '')
          .toUpperCase();
        return `export const ${name} = require('./${file}')`;
      });
    const outputName = `${dir}/index.ts`;
    fs.writeFile(
      outputName,
      requireItems.join(';\n').concat(';\n'),
      (wError) => {
        console.log(wError);
      },
    );
  });
}
folders.forEach(gen);
