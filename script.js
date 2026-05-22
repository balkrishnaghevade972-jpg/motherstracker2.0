const content = {

  english: {

    title: "🌸 Nutrition Tracker for Mothers",

    subtitle: "Healthy Mothers, Healthy Future",

    button: "Generate Nutrition Plan",

    bmiTitle: "💪 BMI Calculator",

    bmiButton: "Calculate BMI",

    waterTitle: "💧 Water Intake Tracker",

    waterButton: "+ Add Water",

    progressTitle: "🌿 Nutrition Progress",

    resultTitle: "🌸 Personalized Nutrition Suggestions",

    viewDiet: "View Detailed Diet Plan",

    reminder: "Drink water and eat healthy meals 💧",

    quote:
      "A healthy mother builds a healthy generation.",

    stages: [

      "Before Pregnancy",
      "First Trimester",
      "Second Trimester",
      "Third Trimester",
      "After Pregnancy"
    ]
  },

  marathi: {

    title: "🌸 मातांसाठी पोषण ट्रॅकर",

    subtitle: "निरोगी माता, निरोगी भविष्य",

    button: "पोषण योजना तयार करा",

    bmiTitle: "💪 BMI कॅल्क्युलेटर",

    bmiButton: "BMI मोजा",

    waterTitle: "💧 पाणी सेवन ट्रॅकर",

    waterButton: "+ पाणी जोडा",

    progressTitle: "🌿 पोषण प्रगती",

    resultTitle: "🌸 वैयक्तिक पोषण सूचना",

    viewDiet: "सविस्तर आहार योजना पहा",

    reminder: "पाणी प्या आणि वेळेवर जेवा 💧",

    quote:
      "निरोगी माता म्हणजे निरोगी भविष्य.",

    stages: [

      "गर्भधारणेपूर्वी",
      "पहिला त्रैमासिक",
      "दुसरा त्रैमासिक",
      "तिसरा त्रैमासिक",
      "प्रसूतीनंतर"
    ]
  }
};

/* Language Change */

function changeLanguage() {

  let lang =
    document.getElementById("language").value;

  document.getElementById("title").innerHTML =
    content[lang].title;

  document.getElementById("subtitle").innerHTML =
    content[lang].subtitle;

  document.getElementById("btn").innerHTML =
    content[lang].button;

  document.querySelector(".quote-box").innerHTML =
    content[lang].quote;

  document.querySelector(".bmi-card h2").innerHTML =
    content[lang].bmiTitle;

  document.querySelector(".bmi-card button").innerHTML =
    content[lang].bmiButton;

  document.querySelector(".water-card h2").innerHTML =
    content[lang].waterTitle;

  document.querySelector(".water-card button").innerHTML =
    content[lang].waterButton;

  document.querySelector(".progress-section h2").innerHTML =
    content[lang].progressTitle;

  let stage =
    document.getElementById("stage");

  for(let i = 0; i < 5; i++) {

    stage.options[i].text =
      content[lang].stages[i];
  }

  if(lang === "marathi") {

    document.getElementById("name").placeholder =
      "आईचे नाव लिहा";

    document.getElementById("weight").placeholder =
      "वजन लिहा (KG)";

    document.getElementById("height").placeholder =
      "उंची लिहा (CM)";
  }

  else {

    document.getElementById("name").placeholder =
      "Enter Mother's Name";

    document.getElementById("weight").placeholder =
      "Enter Weight (KG)";

    document.getElementById("height").placeholder =
      "Enter Height (CM)";
  }
}

/* Generate Plan */

function generatePlan() {

  let lang =
    document.getElementById("language").value;

  let stage =
    document.getElementById("stage").value;

  let meals = "";

  /* Before Pregnancy */

  if(stage === content[lang].stages[0]) {

    meals = `

    <div class="meal-box">

      <h2>
      ${lang === "english"
      ? "🌸 Before Pregnancy Diet Plan"
      : "🌸 गर्भधारणेपूर्वी आहार योजना"}
      </h2>

      <p>

      ${lang === "english"

      ? "Before pregnancy, mothers should eat foods rich in protein, calcium, iron, and vitamins to prepare the body for a healthy pregnancy."

      : "गर्भधारणेपूर्वी महिलांनी प्रोटीन, आयर्न आणि कॅल्शियमयुक्त अन्न खावे."}

      </p>

      <h3>
      ${lang === "english"
      ? "🌅 Morning Breakfast"
      : "🌅 सकाळचा नाश्ता"}
      </h3>

      <p>
      🥛 Milk, Oats, Banana and Dry Fruits
      </p>

      <h3>
      ${lang === "english"
      ? "☀ Mid Morning"
      : "☀ मधल्या वेळचे अन्न"}
      </h3>

      <p>
      🍎 Fruits and Coconut Water
      </p>

      <h3>
      ${lang === "english"
      ? "🍛 Afternoon Lunch"
      : "🍛 दुपारचे जेवण"}
      </h3>

      <p>
      🍚 Rice, Dal, Chapati and Vegetables
      </p>

      <h3>
      ${lang === "english"
      ? "☕ Evening Snacks"
      : "☕ संध्याकाळचा नाश्ता"}
      </h3>

      <p>
      🥜 Nuts and Fruit Salad
      </p>

      <h3>
      ${lang === "english"
      ? "🌙 Dinner"
      : "🌙 रात्रीचे जेवण"}
      </h3>

      <p>
      🍲 Soup, Salad and Chapati
      </p>

    </div>
    `;
  }

  /* First Trimester */

  else if(stage === content[lang].stages[1]) {

    meals = `

    <div class="meal-box">

      <h2>
      ${lang === "english"
      ? "🌸 First Trimester Diet Plan"
      : "🌸 पहिला त्रैमासिक आहार"}
      </h2>

      <p>

      ${lang === "english"

      ? "During the first trimester, protein and iron-rich foods support early baby growth and reduce weakness."

      : "पहिल्या त्रैमासिकात प्रोटीन आणि आयर्नयुक्त अन्न आवश्यक असते."}

      </p>

      <h3>
      🌅 ${lang === "english"
      ? "Morning Breakfast"
      : "सकाळचा नाश्ता"}
      </h3>

      <p>
      🍌 Banana Milkshake and Oats
      </p>

      <h3>
      ☀ ${lang === "english"
      ? "Mid Morning"
      : "मधल्या वेळचे अन्न"}
      </h3>

      <p>
      🍊 Orange Juice and Dry Fruits
      </p>

      <h3>
      🍛 ${lang === "english"
      ? "Afternoon Lunch"
      : "दुपारचे जेवण"}
      </h3>

      <p>
      🍚 Rice, Dal and Paneer
      </p>

      <h3>
      ☕ ${lang === "english"
      ? "Evening Snacks"
      : "संध्याकाळचा नाश्ता"}
      </h3>

      <p>
      🥜 Yogurt and Fruits
      </p>

      <h3>
      🌙 ${lang === "english"
      ? "Dinner"
      : "रात्रीचे जेवण"}
      </h3>

      <p>
      🍲 Vegetable Soup and Chapati
      </p>

    </div>
    `;
  }

  /* Second Trimester */

  else if(stage === content[lang].stages[2]) {

    meals = `

    <div class="meal-box">

      <h2>
      ${lang === "english"
      ? "🌸 Second Trimester Diet Plan"
      : "🌸 दुसरा त्रैमासिक आहार"}
      </h2>

      <p>

      ${lang === "english"

      ? "The second trimester needs extra calcium and proteins for baby bone development."

      : "दुसऱ्या त्रैमासिकात कॅल्शियम आणि प्रोटीन आवश्यक असते."}

      </p>

      <h3>🌅 Morning Breakfast</h3>

      <p>
      🥞 Idli, Milk and Fruits
      </p>

      <h3>☀ Mid Morning</h3>

      <p>
      🍎 Fruit Salad and Juice
      </p>

      <h3>🍛 Afternoon Lunch</h3>

      <p>
      🥗 Chapati, Dal and Vegetables
      </p>

      <h3>☕ Evening Snacks</h3>

      <p>
      🥜 Dry Fruits and Yogurt
      </p>

      <h3>🌙 Dinner</h3>

      <p>
      🍲 Khichdi and Curd
      </p>

    </div>
    `;
  }

  /* Third Trimester */

  else {

    meals = `

    <div class="meal-box">

      <h2>
      ${lang === "english"
      ? "🌸 Third Trimester / After Pregnancy Diet"
      : "🌸 तिसरा त्रैमासिक / प्रसूतीनंतर आहार"}
      </h2>

      <p>

      ${lang === "english"

      ? "During the final stage and after delivery, mothers require more energy, calcium, and fiber for recovery."

      : "प्रसूतीनंतर शरीराला जास्त ऊर्जा आणि पोषण आवश्यक असते."}

      </p>

      <h3>🌅 Morning Breakfast</h3>

      <p>
      🥣 Oats, Fruits and Milk
      </p>

      <h3>☀ Mid Morning</h3>

      <p>
      🍎 Coconut Water and Fruits
      </p>

      <h3>🍛 Afternoon Lunch</h3>

      <p>
      🍛 Brown Rice and Vegetables
      </p>

      <h3>☕ Evening Snacks</h3>

      <p>
      🥗 Sprouts Salad
      </p>

      <h3>🌙 Dinner</h3>

      <p>
      🍲 Soup and Multigrain Roti
      </p>

    </div>
    `;
  }

  document.getElementById("result").innerHTML = `

    <h2>
      ${content[lang].resultTitle}
    </h2>

    <button onclick="openPopup()">

      ${content[lang].viewDiet}

    </button>
  `;

  document.getElementById("popup-data").innerHTML =
    meals;

  updateProgress();

  if(Notification.permission !== "granted") {

    Notification.requestPermission();
  }

  if(Notification.permission === "granted") {

    new Notification("🌸 Reminder", {

      body: content[lang].reminder
    });
  }
}

/* Popup */

function openPopup() {

  document.getElementById("popup").style.display =
    "block";
}

function closePopup() {

  document.getElementById("popup").style.display =
    "none";
}

/* Dark Mode */

function toggleDarkMode() {

  document.body.classList.toggle("dark-mode");
}

/* Water Tracker */

let water = 0;

function addWater() {

  water++;

  document.getElementById("waterCount").innerHTML =
    water + " Glasses";
}

/* BMI Calculator */

function calculateBMI() {

  let weight =
    parseFloat(document.getElementById("weight").value);

  let height =
    parseFloat(document.getElementById("height").value);

  height = height / 100;

  let bmi =
    (weight / (height * height)).toFixed(1);

  let status = "";

  if(bmi < 18.5) {

    status = "Underweight";
  }

  else if(bmi < 25) {

    status = "Healthy";
  }

  else {

    status = "Overweight";
  }

  document.getElementById("bmiResult").innerHTML =
    "BMI: " + bmi + " (" + status + ")";
}

/* Progress Bar */

function updateProgress() {

  let progress =
    document.getElementById("progress");

  progress.style.width = "85%";
}
