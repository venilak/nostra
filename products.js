document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll("input[type='checkbox']");
  const searchInput = document.querySelector("input[type='text']");
  const productCards = document.querySelectorAll("[data-occasion]");

  function filterProducts() {
    const selectedOccasions = getCheckedValues("occasion");
    const selectedColors = getCheckedValues("color");
    const selectedArrivals = getCheckedValues("arrival");
    const searchTerm = searchInput.value.toLowerCase();

    productCards.forEach(card => {
      const matchesOccasion = selectedOccasions.length === 0 || selectedOccasions.includes(card.dataset.occasion);
      const matchesColor = selectedColors.length === 0 || selectedColors.includes(card.dataset.color);
      const matchesArrival = selectedArrivals.length === 0 || selectedArrivals.includes(card.dataset.arrival);
      const matchesSearch = card.querySelector("h3").textContent.toLowerCase().includes(searchTerm);

      if (matchesOccasion && matchesColor && matchesArrival && matchesSearch) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  }

  function getCheckedValues(name) {
    return Array.from(document.querySelectorAll(`input[name='${name}']:checked`)).map(cb => cb.value);
  }

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", filterProducts);
  });

  searchInput.addEventListener("input", filterProducts);
});