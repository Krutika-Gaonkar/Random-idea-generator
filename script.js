const ideas = {
  productive: [
    "🧹 Clean your inbox",
    "🗂️ Organize your files",
    "📝 Write a to-do list",
    "💻 Practice coding",
    "🧾 Update your resume"
  ],
  fun: [
    "🎬 Watch a comedy on Netflix",
    "💃 Dance to your favorite song",
    "📞 Call a friend",
    "🎨 Draw something random",
    "🍳 Try a new recipe"
  ],
  quick: [
    "🙆‍♂️ Stretch for 5 minutes",
    "💧 Drink a glass of water",
    "🌤️ Step outside",
    "💪 Do 10 pushups",
    "🧘 Take 3 deep breaths"
  ]
};

function generateIdea() {
  const category = document.getElementById("category").value;
  let selectedIdeas = [];

  if (category === "all") {
    selectedIdeas = [...ideas.productive, ...ideas.fun, ...ideas.quick];
  } else {
    selectedIdeas = ideas[category];
  }

  const randomIndex = Math.floor(Math.random() * selectedIdeas.length);
  const idea = selectedIdeas[randomIndex];

  const resultCard = document.getElementById("resultCard");
  const resultText = document.getElementById("resultText");

  resultText.textContent = idea;
  resultCard.classList.remove("hidden");
  resultCard.classList.add("result-card");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const icon = document.getElementById("themeIcon");
  const isDark = document.body.classList.contains("dark-mode");

  icon.textContent = isDark ? "☀️" : "🌙";
}

