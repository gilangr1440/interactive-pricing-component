const slider = document.querySelector(".card__slider");
const viewCount = document.querySelector(".card__page-view-count");
const unit = document.querySelector(".card__page-view-unit");
const price = document.querySelector(".card__price-number");
const duration = document.querySelector(".card__time-duration");
const toggleCheckbox = document.querySelector(".card__toggle-checkbox");

slider.style.background = "linear-gradient(to right, hsl(174, 77%, 80%) 50%, hsl(224, 65%, 95%) 50%)";

slider.addEventListener("input", (e) => sliderProgress(e));
slider.addEventListener("input", (e) => updatePrice(e));
toggleCheckbox.addEventListener("change", (e) => toggleChange(e));

function sliderProgress(e) {
  const sliderValue = e.target.value;
  const progress = (sliderValue / e.target.max) * 100;

  e.target.style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${progress}%, hsl(224, 65%, 95%) ${progress}%)`;
}

function updateView(priceValue, viewCountValue, unitValue, durationValue = "month") {
  viewCount.textContent = viewCountValue;
  unit.textContent = unitValue;
  price.textContent = priceValue;
  duration.textContent = durationValue;
}

function updatePrice(e) {
  const value = e.target.value;
  let priceValue = 0;
  let viewCountValue = 0;
  let unitValue = "";

  if (value < 20) {
    priceValue = 0;
    viewCountValue = 0;
    unitValue = "K";
  } else if (value >= 20 && value < 40) {
    priceValue = 8;
    viewCountValue = 10;
    unitValue = "K";
  } else if (value >= 40 && value < 60) {
    priceValue = 12;
    viewCountValue = 50;
    unitValue = "K";
  } else if (value >= 60 && value < 80) {
    priceValue = 16;
    viewCountValue = 100;
    unitValue = "K";
  } else if (value >= 80 && value < 100) {
    priceValue = 24;
    viewCountValue = 500;
    unitValue = "K";
  } else if (value == 100) {
    priceValue = 36;
    viewCountValue = 1;
    unitValue = "M";
  }

  if (toggleCheckbox.checked) {
    let discount = priceValue * (25 / 100);
    let perYear = (priceValue - discount) * 12;

    updateView(perYear, viewCountValue, unitValue, "year");
  } else {
    updateView(priceValue, viewCountValue, unitValue);
  }
}

function toggleChange(e) {
  let priceValue = price.textContent;
  let viewCountValue = viewCount.textContent;
  let unitValue = unit.textContent;
  let value = slider.value;

  if (e.target.checked) {
    let discount = priceValue * (25 / 100);
    let perYear = (priceValue - discount) * 12;

    updateView(perYear, viewCountValue, unitValue, "year");
  } else {
    if (value < 20) {
      priceValue = 0;
      viewCountValue = 0;
      unitValue = "K";
    } else if (value >= 20 && value < 40) {
      priceValue = 8;
      viewCountValue = 10;
      unitValue = "K";
    } else if (value >= 40 && value < 60) {
      priceValue = 12;
      viewCountValue = 50;
      unitValue = "K";
    } else if (value >= 60 && value < 80) {
      priceValue = 16;
      viewCountValue = 100;
      unitValue = "K";
    } else if (value >= 80 && value < 100) {
      priceValue = 24;
      viewCountValue = 500;
      unitValue = "K";
    } else if (value == 100) {
      priceValue = 36;
      viewCountValue = 1;
      unitValue = "M";
    }

    updateView(priceValue, viewCountValue, unitValue);
  }
}
