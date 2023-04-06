const fs = require('fs');
const path = require('path');

const dirPath = './json'


function readJsonFilesInDir(dirPath) {
  const files = fs.readdirSync(dirPath);
  const jsonFiles = files.filter(file => path.extname(file) === '.json');
  const result = [];

  for (const file of jsonFiles) {
    const filePath = path.join(dirPath, file);
    const data = fs.readFileSync(filePath, 'utf8');

    try {
      const jsonData = JSON.parse(data);
      result.push({ name: file, data: jsonData });
    } catch (error) {
      console.error(`Error reading JSON file ${file}: ${error}`);
    }
  }

  return result;
}
module.exports = readJsonFilesInDir(dirPath);
