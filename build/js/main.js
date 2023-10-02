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

function proceedToPayment() {
  // Hide contact stage
  document.getElementById("contact-stage").style.display = "none";
  const infoTab = document.getElementById("info-tab");
  infoTab.classList.remove(...["text-purple-600", "hover:text-purple-300"]);
  infoTab.classList.add("text-gray-500");

  // Show payment stage
  document.getElementById("payment-stage").style.display = "block";
  document.getElementById("express-checkout").style.display = "block";
  const paymentTab = document.getElementById("payment-tab");
  paymentTab.classList.remove(["text-gray-500"]);
  paymentTab.classList.add(...["text-purple-600", "hover:text-purple-300"]);
}

function backToContactInfo() {
  // show contact stage
  document.getElementById("contact-stage").style.display = "block";
  const infoTab = document.getElementById("info-tab");
  infoTab.classList.add(...["text-purple-600", "hover:text-purple-300"]);
  infoTab.classList.remove(["text-gray-500"]);

  // hide payment stage
  document.getElementById("payment-stage").style.display = "none";
  document.getElementById("express-checkout").style.display = "none";
  const paymentTab = document.getElementById("payment-tab");
  paymentTab.classList.add(["text-gray-500"]);
  paymentTab.classList.remove(...["text-purple-600", "hover:text-purple-300"]);
}

function toggleTheme() {
  const theme = localStorage.getItem("theme");
  if (theme && theme === "dark") {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }
}

function switchTheme() {
  const theme = localStorage.getItem("theme");
  if (theme && theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  }
}

const themeChanger = document.getElementById("theme-changer");
themeChanger.addEventListener("click", (e) => {
  e.preventDefault();
  toggleTheme();

  if (localStorage.getItem("theme") === "dark") {
    e.target.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sun-moon"><path d="M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.9 4.9 1.4 1.4"/><path d="m17.7 17.7 1.4 1.4"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.3 17.7-1.4 1.4"/><path d="m19.1 4.9-1.4 1.4"/></svg>
    `;
  } else {
    e.target.innerHTML = `
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="lucide lucide-sun-medium"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v1" />
    <path d="M12 20v1" />
    <path d="M3 12h1" />
    <path d="M20 12h1" />
    <path d="m18.364 5.636-.707.707" />
    <path d="m6.343 17.657-.707.707" />
    <path d="m5.636 5.636.707.707" />
    <path d="m17.657 17.657.707.707" />
  </svg>
    `;
  }
});
