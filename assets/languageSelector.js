const form = document.querySelector("#localization_form");
const formInput = document.querySelector("#language-selector__input");
const selectArrow = document.querySelector(".lang-select__dropdown-arrow");
const dropdown = document.querySelector(".lang-select__dropdown");
const dropdownOptions = document.querySelectorAll(".lang-select__option");

selectArrow.addEventListener("click", () => {
  if (selectArrow.classList.contains("rotate-180")) {
    selectArrow.classList.remove("rotate-180");
    dropdown.classList.add("hidden");
  } else {
    selectArrow.classList.add("rotate-180");
    dropdown.classList.remove("hidden");
  }
});

dropdownOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    formInput.value = option.getAttribute("lang");
    form.submit();
  });
});
