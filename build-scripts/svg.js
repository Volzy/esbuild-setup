import fs, { write } from 'fs';
import fse from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirPath = path.join(__dirname, '../src/assets/svg');
const distPath = path.join(__dirname, '../src/assets/svg');

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach(file => {
        const extension = path.extname(file);

        if (extension !== '.svg') {
            return;
        }

        const fileName = file.split('.')[0];

        fs.readFile(path.join(dirPath, file), 'utf8', (err, data) => {
            if (err) {
              console.error(err);
              return;
            }

            writeSvgToReactComponent(fileName, data);
        });
    });
});

const writeSvgToReactComponent = (fileName, data) => {
    const content = `import React from 'react';\n\nconst ${toPascalCase(fileName)} = () => (\n${data}\n);\n\nexport default ${toPascalCase(fileName)};`;

    fse.outputFile(`${distPath}/${toPascalCase(fileName)}.jsx`, content, err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
      });
};

const toPascalCase = (text) => {
    return text.replace(/(^\w|-\w)/g, clearAndUpper);
}
  
const clearAndUpper = (text) => {
    return text.replace(/-/, "").toUpperCase();
}