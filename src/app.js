const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");

const ratingCard = document.querySelector(".rating-card");
const successCard = document.querySelector(".success-card");

const ratingScoreDisplay = document.querySelector(".rating-score");

let selectedRating;

const toggleActiveButtons = () => {
  ratingBtns.forEach((btn) => {
    btn.classList.toggle(
      "active",
      Number(btn.dataset.rating) === selectedRating,
    );
  });
};

const selectRating = (btn) => {
  const ratingValue = Number(btn.dataset.rating);
  if (selectedRating === ratingValue) return;

  selectedRating = ratingValue;
  console.log(selectedRating);
  toggleActiveButtons();
};

const submitRating = () => {
  if (!selectedRating) return alert("Please select a rating");

  ratingScoreDisplay.textContent = `You selected ${selectedRating} out of 5`;
  ratingCard.style.display = "none";
  successCard.style.display = "flex";
};

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", () => selectRating(btn));
});
submitBtn.addEventListener("click", submitRating);
