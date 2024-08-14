const fs = require('fs');
const path = require('path');

const fileNames = [
    "alif.json",
    "be.json",
    "pe.json",
    "te.json",
    "teh.json",
    "je.json",
    "che.json",
    "he.json",
    "khe.json",
    "dal.json",
    "dhal.json",
    "re.json",
    "ray.json",
    "se.json",
    "she.json",
    "sue.json",
    "zu.json",
    "to.json",
    "zo.json",
    "ain.json",
    "ghain.json",
    "fe.json",
    "qe.json",
    "kaf.json",
    "gaf.json",
    "lam.json",
    "meem.json",
    "noon.json",
    "waw.json",
    "heh.json",
    "ye.json",
    "chotiYe.json",
    "alifMadda.json"
];

const directoryPath = path.join(__dirname, 'Data/Common_words');

// Create the directory if it does not exist
if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
}

// Create each file in the specified directory
fileNames.forEach(fileName => {
    const filePath = path.join(directoryPath, fileName);
    
    // Write an empty JSON object to each file
    fs.writeFileSync(filePath, '{}', 'utf8');
    
    console.log(`Created file: ${filePath}`);
});

console.log('All files have been created.');
