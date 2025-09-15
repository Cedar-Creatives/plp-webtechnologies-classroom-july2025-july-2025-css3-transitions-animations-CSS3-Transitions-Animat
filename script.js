let score = 0;

const cards = document.querySelectorAll(".flip-card");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

// Flip functionality
cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("flipped");
  });

  const buttons = card.querySelectorAll(".flip-card-back button");

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation(); // prevent unwanted flip
      const selected = button.getAttribute("data-answer");
      const correct = card.getAttribute("data-correct");
      checkAnswer(selected, correct);
    });
  });
});

// Check answer function
function checkAnswer(answer, correct) {
  if (answer === correct) {
    result.textContent = "✅ Correct!";
    updateScore(1);
  } else {
    result.textContent = "❌ Wrong! Try again.";
    updateScore(0);
  }
}

// Update score function
function updateScore(points) {
  if (points > 0) {
    score += points;
  }
  scoreDisplay.textContent = "Score: " + score;
  return score;
}
