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
      const initialChar = word[0];
      let transliterated = "";

      switch (initialChar) {
        case "ا":
          transliterated = alifWords[word] || convertWithRules(word);
          break;
        case "آ":
          transliterated = alifMaddaWords[word] || convertWithRules(word);
          break;
        case "ب":
          transliterated = beWords[word] || convertWithRules(word);
          break;
        case "پ":
          transliterated = peWords[word] || convertWithRules(word);
          break;
        case "ت":
          transliterated = teWords[word] || convertWithRules(word);
          break;
        case "ٹ":
          transliterated = tehWords[word] || convertWithRules(word);
          break;
        case "ث":
          transliterated = seWords[word] || convertWithRules(word);
          break;
        case "ج":
          transliterated = jimWords[word] || convertWithRules(word);
          break;
        case "چ":
          transliterated = cheWords[word] || convertWithRules(word);
          break;
        case "ح":
          transliterated = heBadiWords[word] || convertWithRules(word);
          break;
        case "خ":
          transliterated = kheWords[word] || convertWithRules(word);
          break;
        case "د":
          transliterated = daalWords[word] || convertWithRules(word);
          break;
        case "ڈ":
          transliterated = dhalWords[word] || convertWithRules(word);
          break;
        case "ذ":
          transliterated = zaalWords[word] || convertWithRules(word);
          break;
        case "ر":
          transliterated = reWords[word] || convertWithRules(word);
          break;
        case "ڑ":
          transliterated = rayWords[word] || convertWithRules(word);
          break;
        case "ز":
          transliterated = zeWords[word] || convertWithRules(word);
          break;
        case "ژ":
          transliterated = zheWords[word] || convertWithRules(word);
          break;
        case "س":
          transliterated = seenWords[word] || convertWithRules(word);
          break;
        case "ش":
          transliterated = sheenWords[word] || convertWithRules(word);
          break;
        case "ص":
          transliterated = suaadWords[word] || convertWithRules(word);
          break;
        case "ض":
          transliterated = zuaadWords[word] || convertWithRules(word);
          break;
        case "ط":
          transliterated = toeWords[word] || convertWithRules(word);
          break;
        case "ظ":
          transliterated = zoeWords[word] || convertWithRules(word);
          break;
        case "ع":
          transliterated = ainWords[word] || convertWithRules(word);
          break;
        case "غ":
          transliterated = ghainWords[word] || convertWithRules(word);
          break;
        case "ف":
          transliterated = feWords[word] || convertWithRules(word);
          break;
        case "ق":
          transliterated = qaafWords[word] || convertWithRules(word);
          break;
        case "ک":
          transliterated = kaafWords[word] || convertWithRules(word);
          break;
        case "گ":
          transliterated = gaafWords[word] || convertWithRules(word);
          break;
        case "ل":
          transliterated = laamWords[word] || convertWithRules(word);
          break;
        case "م":
          transliterated = meemWords[word] || convertWithRules(word);
          break;
        case "ن":
          transliterated = noonWords[word] || convertWithRules(word);
          break;
        case "و":
          transliterated = wawWords[word] || convertWithRules(word);
          break;
        case "ه":
          transliterated = heChhotiWords[word] || convertWithRules(word);
          break;
        case "ھ":
          transliterated = heDoChashmiWords[word] || convertWithRules(word);
          break;
        case "ی":
          transliterated = yeWords[word] || convertWithRules(word);
          break;
        default:
          transliterated = convertWithRules(word);
      }

      return transliterated;
    });

    return transliteratedWords.join(" ");
  });

  document.getElementById("outputText").innerText =
    transliteratedLines.join("\n");
}

function convertWithRules(word) {
  return word
    .split("")
    .map((char) => alphabets[char] || char)
    .join("");
}

function copyToClipboard() {
  const outputText = document.getElementById("outputText").innerText;
  navigator.clipboard.writeText(outputText).then(() => {
    alert("Text copied to clipboard!");
  }).catch(err => {
    console.error("Failed to copy text: ", err);
  });
}
