const gameLinks = [
  "https://cdn.htmlgames.com/ANonogramADay/",
  "https://cdn.htmlgames.com/NumberSearch/",
  "https://cdn.htmlgames.com/TapItAway3D/",
  "https://cdn.htmlgames.com/Sumjong/",
  "https://cdn.htmlgames.com/Daily1to25/",
  "https://cdn.htmlgames.com/WoodBlockPuzzle/",
  "https://cdn.htmlgames.com/RapidMath/",
  "https://cdn.htmlgames.com/TicTacToe/",
  "https://cdn.htmlgames.com/ETBrain/",
];

// اختيار رابط عشوائي
const randomIndex = Math.floor(Math.random() * gameLinks.length);
  const b=document.getElementById("b");
 const x=document.querySelector("x");
 const y=document.querySelector("y");
  let timeLeft = 500;
  const timerElement = document.getElementById("timer");

  function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent =
      "الوقت المتبقي: " +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0");
  }

  updateTimerDisplay();

  const timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = "انتهى الوقت!";
      timerElement.style.color = "gray";
      alert("انتهى الوقت!");
    }
  }, 1000);
  function submitExam() {
  let score = 0;
  const correctAnswers = {
    q1: "a", q2: "b", q3: "c", q4: "d", q5: "a",
    q6: "b", q7: "c", q8: "d", q9: "a", q10: "b",
    q11: "c", q12: "d", q13: "a", q14: "b", q15: "c",
    q16: "d", q17: "a", q18: "b", q19: "c", q20: "d"
  };


  for (let i = 1; i <= 40; i++) {
    const questionName = "q" + i;
    const selected = document.querySelector('input[name="' + questionName + '"]:checked');
    const allOptions = document.querySelectorAll('input[name="' + questionName + '"]');

    allOptions.forEach((option) => {
      const label = option.closest("label");
      if (label) {
        label.style.color = ""; // Reset color before applying new
      }
    });

    if (selected) {
      const selectedLabel = selected.closest("label");
      if (selected.value === correctAnswers[questionName]) {
        score += 2.5;
        if (selectedLabel) selectedLabel.style.backgroundColor = "green";
      } else {
        if (selectedLabel) selectedLabel.style.backgroundColor = "red";
        const correctOption = document.querySelector('input[name="' + questionName + '"][value="' + correctAnswers[questionName] + '"]');
        const correctLabel = correctOption?.closest("label");
        if (correctLabel) correctLabel.style.backgroundColor = "green";
      }
    }
  }

  document.getElementById("result").textContent = "علامتك النهائية: " + score + " من 100";
  if (score >= 70) {
    document.getElementById("video").src = gameLinks[randomIndex];
    document.getElementsByClassName("x")[0].style.opacity = "1";
    document.getElementsByClassName("y")[0].style.opacity = "1";
  }
  else{
      document.getElementsByClassName("y")[0].style.opacity = "1";
  }

}

