export default function htmlToPlainText(html: string): string {
  // Create a temporary DOM element to parse the HTML content
  const tempElement = document.createElement("div");
  tempElement.innerHTML = html;

  // Extract and return the text content
  return tempElement.textContent || tempElement.innerText || "";
}
