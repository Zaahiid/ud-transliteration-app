import { copyToClipboard } from "./clipboard.js";
import { initialize } from "./initialize.js";
import { transliterate } from "./transliterate.js";


document.getElementById("transliterationButton").addEventListener("click", transliterate);
document.getElementById("copyButton").addEventListener("click", copyToClipboard);

initialize()