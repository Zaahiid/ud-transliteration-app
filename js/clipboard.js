export function copyToClipboard() {
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
