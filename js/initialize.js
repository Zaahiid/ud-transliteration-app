import { loadJSON } from "./loadJSON.js";

export let alphabets,
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

export async function initialize() {
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
