const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const inputDir = path.join(__dirname, "../Images");
const outputDir = path.join(__dirname, "../Images");

function convertFolder(folderPath) {
  fs.readdirSync(folderPath).forEach((file) => {
    const fullPath = path.join(folderPath, file);

    if (fs.statSync(fullPath).isDirectory()) {
      convertFolder(fullPath);
    } else {
      if (/\.(jpg|jpeg|png)$/i.test(file)) {
        const outputFile = fullPath.replace(/\.(jpg|jpeg|png)$/i, ".webp");

        sharp(fullPath)
          .webp({ quality: 80 })
          .toFile(outputFile)
          .then(() => {
            console.log("Converted:", outputFile);
          })
          .catch(console.error);
      }
    }
  });
}

convertFolder(inputDir);
