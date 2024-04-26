import fs, { write } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distPath = path.join(__dirname, '../public/BuildArtifacts');

fs.readdir(distPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    const importMap = {
        imports: {}
    };

    files.forEach(file => {
        const extension = path.extname(file);

        if (extension !== '.js' || file.includes('chunk')) {
            return;
        }

        const originalFileName = file.split('.')[0];

        if (originalFileName == 'chunk') {
            return;
        }

        importMap.imports[originalFileName] = `/BuildArtifacts/${file}`;
    });

    writeImportMapToCshtml(importMap);
    writeImportMapToJsonFile(importMap);
});

const writeImportMapToJsonFile = (importMap) => {
    fs.writeFile(distPath + '/importmap.json', JSON.stringify(importMap), err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
      });
};

const writeImportMapToCshtml = (importMap) => {
    const content = `@inherits System.Web.Mvc.WebViewPage\n\n<script type="importmap">${JSON.stringify(importMap)}</script>`;

    fs.writeFile(distPath + '/importmap.cshtml', content, err => {
        if (err) {
          console.error(err);
        } else {
          // file written successfully
        }
      });
};