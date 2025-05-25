  document.addEventListener("DOMContentLoaded", function () {
    const randomList = Math.floor(Math.random() * 5) + 1;
    const allSections = document.querySelectorAll("section");
    allSections.forEach((section, index) => {
      if (index !== randomList - 1) {
        section.style.display = "none";
      }
    });
  });

  
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
    q1: "a",
    q2: "b",
    q3: "d",
    q4: "c",
    q5: "b",
    q6: "a",
    q7: "d",
    q8: "c",
    q9: "b",
    q10: "a",
    q11: "b",
    q12: "c",
    q13: "d",
    q14: "a",
    q15: "b",
    q16: "c",
    q17: "d",
    q18: "a",
    q19: "b",
    q20: "c"
  };
  for (let i = 1; i <= 20; i++) {
    const questionName = "q" + i;
    const selected = document.querySelector('input[name="' + questionName + '"]:checked');
     if (!selected) {
      alert("يرجى الإجابة على كل الأسئلة قبل الإرسال!");
      return; // نوقف تنفيذ الدالة إذا في سؤال بدون إجابة
    }
    if (selected && selected.value === correctAnswers[questionName]) {
      score += 5; 
    }
  }

  document.getElementById("result").textContent = "علامتك النهائية: " + score + " من 100";

  if (score >=70) {
    document.getElementById("video").src = "https://cdn.htmlgames.com/WoodBlockPuzzle/";
  }


}