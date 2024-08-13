// Load JSON files
async function loadJSON(file) {
    const response = await fetch(file);
    return await response.json();
}

// Load all JSON files
let alphabets, alifMadda, beWords;

async function initialize() {
    alphabets = await loadJSON('./Data/alphabets.json');
    alifMadda = await loadJSON('./Data/alifMadda.json');
    // Load more files as needed
}

initialize();

function transliterate() {
    const inputText = document.getElementById('inputText').value;
    const words = inputText.split(/\s+/);
    const transliteratedWords = words.map(word => {
        // Check if the word is in the most common words file
        const initialChar = word[0];
        let transliterated = '';

        switch (initialChar) {
            case 'آ':
                transliterated = alifMadda[word] || convertWithRules(word);
                break;
            case 'ب':
                transliterated = beWords[word] || convertWithRules(word);
                break;
            // Add more cases as needed
            default:
                transliterated = convertWithRules(word);
        }

        return transliterated;
    });

    document.getElementById('outputText').innerText = transliteratedWords.join(' ');
}

function convertWithRules(word) {
    return word.split('').map(char => alphabets[char] || char).join('');
}
