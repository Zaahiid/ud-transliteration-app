import {
  ainWords,
  alifMaddaWords,
  alifWords,
  alphabets,
  beWords,
  cheWords,
  daalWords,
  dhalWords,
  feWords,
  gaafWords,
  ghainWords,
  heBadiWords,
  heChhotiWords,
  heDoChashmiWords,
  jimWords,
  kaafWords,
  kheWords,
  laamWords,
  meemWords,
  noonWords,
  peWords,
  qaafWords,
  rayWords,
  reWords,
  seenWords,
  seWords,
  sheenWords,
  suaadWords,
  tehWords,
  teWords,
  toeWords,
  wawWords,
  yeWords,
  zaalWords,
  zeWords,
  zheWords,
  zoeWords,
  zuaadWords,
} from "./initialize.js";

export function transliterate() {
  const inputText = document.getElementById("inputText").value;
  const lines = inputText.split("\n");

  const transliteratedLines = lines.map((line) => {
    const words = line.split(/\s+/);

    let transliteratedWords = [];
    let i = 0;

    while (i < words.length) {
      let normalizedWord = words[i].normalize("NFC");

      // Handle chain of words ending with " ِ"
      let joinedWords = [];
      while (normalizedWord.endsWith("ِ") && i + 1 < words.length) {
        normalizedWord = normalizedWord.slice(0, -1); // Remove " ِ"
        joinedWords.push(normalizedWord);
        i++;
        normalizedWord = words[i].normalize("NFC");
      }
      joinedWords.push(normalizedWord);

      if (joinedWords.length > 1) {
        const transliteratedChain = joinedWords
          .map((word) => transliterateWord(word))
          .join("-E-");
        transliteratedWords.push(transliteratedChain);
      } else {
        transliteratedWords.push(transliterateWord(joinedWords[0]));
      }

      i++;
    }

    return transliteratedWords.join(" ");
  });

  document.getElementById("outputText").innerText =
    transliteratedLines.join("\n");
}

export function transliterateWord(word) {
  let normalizedWord = word.normalize("NFC");

  if (normalizedWord[1] === "ؔ") {
    // normalizedWord = `'${normalizedWord[0] + normalizedWord.slice(2)}'`;
    normalizedWord = `${normalizedWord.replace("ؔ", "")}`;
  }

  const initialChar = normalizedWord[0];
  let transliterated = "";

  switch (initialChar) {
    case "ا":
      transliterated =
        alifWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "آ":
      transliterated =
        alifMaddaWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ب":
      transliterated =
        beWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "پ":
      transliterated =
        peWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ت":
      transliterated =
        teWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ٹ":
      transliterated =
        tehWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ث":
      transliterated =
        seWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ج":
      transliterated =
        jimWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "چ":
      transliterated =
        cheWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ح":
      transliterated =
        heBadiWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "خ":
      transliterated =
        kheWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "د":
      transliterated =
        daalWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ڈ":
      transliterated =
        dhalWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ذ":
      transliterated =
        zaalWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ر":
      transliterated =
        reWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ڑ":
      transliterated =
        rayWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ز":
      transliterated =
        zeWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ژ":
      transliterated =
        zheWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "س":
      transliterated =
        seenWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ش":
      transliterated =
        sheenWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ص":
      transliterated =
        suaadWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ض":
      transliterated =
        zuaadWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ط":
      transliterated =
        toeWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ظ":
      transliterated =
        zoeWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ع":
      transliterated =
        ainWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "غ":
      transliterated =
        ghainWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ف":
      transliterated =
        feWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ق":
      transliterated =
        qaafWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ک":
      transliterated =
        kaafWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "گ":
      transliterated =
        gaafWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ل":
      transliterated =
        laamWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "م":
      transliterated =
        meemWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ن":
      transliterated =
        noonWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "و":
      transliterated =
        wawWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ہ":
      transliterated =
        heChhotiWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ھ":
      transliterated =
        heDoChashmiWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    case "ی":
      transliterated =
        yeWords[normalizedWord] || convertWithRules(normalizedWord);
      break;
    default:
      transliterated = convertWithRules(normalizedWord);
  }

  return transliterated;
}

export function convertWithRules(word) {
  const normalizedWord = word.normalize("NFC");
  return normalizedWord
    .split("")
    .map((char) => alphabets[char] || char)
    .join("");
}
