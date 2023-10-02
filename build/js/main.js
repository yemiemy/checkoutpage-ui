const accordionItem = document.getElementById("accordion-item");
const accordionHeader = document.getElementById("accordion-header");
const summaryHeader = document.getElementById("summary-header");

accordionHeader.addEventListener("click", () => {
  const isItemOpen = accordionItem.classList.contains("open");
  accordionItem.classList.remove("open");
  if (!isItemOpen) {
    accordionItem.classList.toggle("open");
  }
  summaryHeader.innerHTML = `${isItemOpen ? "Show" : "Hide"} order summary`;
});
