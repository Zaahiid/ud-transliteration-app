const fs = require('fs');
const path = require('path');

const fileNames = [
    "alif.json",
    "be.json",
    "pe.json",
    "te.json",
    "teh.json",
    "se.json",
    "jim.json",
    "che.json",
    "he_badi.json",
    "khe.json",
    "daal.json",
    "dhal.json",
    "zaal.json",
    "re.json",
    "ray.json",
    "ze.json",
    "zhe.json",
    "seen.json",
    "sheen.json",
    "suaad.json",
    "zuaad.json",
    "toe.json",
    "zoe.json",
    "ain.json",
    "ghain.json",
    "fe.json",
    "qaaf.json",
    "kaaf.json",
    "gaaf.json",
    "laam.json",
    "meem.json",
    "noon.json",
    "waw.json",
    "he_chhoti.json",
    "he_do_chashmi.json",
    "ye.json",
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
