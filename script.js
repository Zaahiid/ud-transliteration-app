async function loadJSON(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Failed to load JSON file: ${file}`, error);
    return {};
  }
}

let alphabets,
  alifWords,
  alifMaddaWords,
  beWords,
  peWords,
  teWords,
  tehWords,
  seWords,
  jimWords,
  cheWords,
  heBadiWords,
  kheWords,
  daalWords,
  dhalWords,
  zaalWords,
  reWords,
  rayWords,
  zeWords,
  zheWords,
  seenWords,
  sheenWords,
  suaadWords,
  zuaadWords,
  toeWords,
  zoeWords,
  ainWords,
  ghainWords,
  feWords,
  qaafWords,
  kaafWords,
  gaafWords,
  laamWords,
  meemWords,
  noonWords,
  wawWords,
  heChhotiWords,
  heDoChashmiWords,
  yeWords;

async function initialize() {
  alphabets = await loadJSON("./Data/alphabets.json");
  alifWords = await loadJSON("./Data/Common_words/alif.json");
  alifMaddaWords = await loadJSON("./Data/Common_words/alifMadda.json");
  beWords = await loadJSON("./Data/Common_words/be.json");
  peWords = await loadJSON("./Data/Common_words/pe.json");
  teWords = await loadJSON("./Data/Common_words/te.json");
  tehWords = await loadJSON("./Data/Common_words/teh.json");
  seWords = await loadJSON("./Data/Common_words/se.json");
  jimWords = await loadJSON("./Data/Common_words/jim.json");
  cheWords = await loadJSON("./Data/Common_words/che.json");
  heBadiWords = await loadJSON("./Data/Common_words/he_Badi.json");
  kheWords = await loadJSON("./Data/Common_words/khe.json");
  daalWords = await loadJSON("./Data/Common_words/daal.json");
  dhalWords = await loadJSON("./Data/Common_words/dhal.json");
  zaalWords = await loadJSON("./Data/Common_words/zaal.json");
  reWords = await loadJSON("./Data/Common_words/re.json");
  rayWords = await loadJSON("./Data/Common_words/ray.json");
  zeWords = await loadJSON("./Data/Common_words/ze.json");
  zheWords = await loadJSON("./Data/Common_words/zhe.json");
  seenWords = await loadJSON("./Data/Common_words/seen.json");
  sheenWords = await loadJSON("./Data/Common_words/sheen.json");
  suaadWords = await loadJSON("./Data/Common_words/suaad.json");
  zuaadWords = await loadJSON("./Data/Common_words/zuaad.json");
  toeWords = await loadJSON("./Data/Common_words/toe.json");
  zoeWords = await loadJSON("./Data/Common_words/zoe.json");
  ainWords = await loadJSON("./Data/Common_words/ain.json");
  ghainWords = await loadJSON("./Data/Common_words/ghain.json");
  feWords = await loadJSON("./Data/Common_words/fe.json");
  qaafWords = await loadJSON("./Data/Common_words/qaaf.json");
  kaafWords = await loadJSON("./Data/Common_words/kaaf.json");
  gaafWords = await loadJSON("./Data/Common_words/gaaf.json");
  laamWords = await loadJSON("./Data/Common_words/laam.json");
  meemWords = await loadJSON("./Data/Common_words/meem.json");
  noonWords = await loadJSON("./Data/Common_words/noon.json");
  wawWords = await loadJSON("./Data/Common_words/waw.json");
  heChhotiWords = await loadJSON("./Data/Common_words/he_chhoti.json");
  heDoChashmiWords = await loadJSON("./Data/Common_words/he_do_chashmi.json");
  yeWords = await loadJSON("./Data/Common_words/ye.json");
}

initialize();

function transliterate() {
  const inputText = document.getElementById("inputText").value;
  const lines = inputText.split("\n");

  const transliteratedLines = lines.map((line) => {
    const words = line.split(/\s+/);

    const transliteratedWords = words.map((word) => {
      let normalizedWord = word.normalize("NFC");

      if (normalizedWord[1] === "ؔ") {
        normalizedWord = `'${normalizedWord[0] + normalizedWord.slice(2)}'`;
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
            heDoChashmiWords[normalizedWord] ||
            convertWithRules(normalizedWord);
          break;
        case "ی":
          transliterated =
            yeWords[normalizedWord] || convertWithRules(normalizedWord);
          break;
        default:
          transliterated = convertWithRules(normalizedWord);
      }

      return transliterated;
    });

    return transliteratedWords.join(" ");
  });

  document.getElementById("outputText").innerText =
    transliteratedLines.join("\n");
}

function convertWithRules(word) {
  const normalizedWord = word.normalize("NFC"); // Normalize only once
  return normalizedWord
    .split("")
    .map((char) => alphabets[char] || char)
    .join("");
}

function copyToClipboard() {
  const outputText = document.getElementById("outputText").innerText;
  navigator.clipboard
    .writeText(outputText)
    .then(() => {
      alert("Text copied to clipboard!");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
