export async function loadJSON(file) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error(`Failed to load JSON file: ${file}`, error);
    return {};
  }
}
