const content = {

  english: {

    title: "🌸 Nutrition Tracker for Mothers",

    subtitle: "Healthy Mothers, Healthy Future",

    button: "Generate Nutrition Plan",

    viewDiet: "View Detailed Diet Plan",

    reminder: "Drink water and eat healthy meals 💧",

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

    viewDiet: "सविस्तर आहार योजना पहा",

    reminder: "पाणी प्या आणि वेळेवर जेवा 💧",

    stages: [

      "गर्भधारणेपूर्वी",
      "पहिला त्रैमासिक",
      "दुसरा त्रैमासिक",
      "तिसरा त्रैमासिक",
      "प्रसूतीनंतर"
    ]
  }
};

function changeLanguage() {

  let lang =
    document.getElementById("language").value;

  document.getElementById("title").innerHTML =
    content[lang].title;

  document.getElementById("subtitle").innerHTML =
    content[lang].subtitle;

  document.getElementById("btn").innerHTML =
    content[lang].button;

  let stage =
    document.getElementById("stage");

  for(let i = 0; i < 5; i++) {

    stage.options[i].text =
      content[lang].stages[i];
  }
}

function generatePlan() {

  let lang =
    document.getElementById("language").value;

  let stage =
    document.getElementById("stage").value;

  let meals = "";

  if(stage === content[lang].stages[0]) {

    meals = `

    <div class="meal-box">

      <h2>🌸 Before Pregnancy Diet</h2>

      <p>
      Eat iron, calcium, and protein-rich foods.
      Include milk, fruits, vegetables, oats,
      and dry fruits for a healthy pregnancy.
      </p>

    </div>
    `;
  }

  else if(stage === content[lang].stages[1]) {

    meals = `

    <div class="meal-box">

      <h2>🌸 First Trimester Diet</h2>

      <p>
      Focus on iron and protein-rich foods.
      Eat banana milkshake, dal, paneer,
      yogurt, and vegetables.
      </p>

    </div>
    `;
  }

  else if(stage === content[lang].stages[2]) {

    meals = `

    <div class="meal-box">

      <h2>🌸 Second Trimester Diet</h2>

      <p>
      Calcium and protein are important.
      Include idli, chapati, vegetables,
      fruits, and curd in meals.
      </p>

    </div>
    `;
  }

  else {

    meals = `

    <div class="meal-box">

      <h2>🌸 Third Trimester / After Pregnancy Diet</h2>

      <p>
      Mothers need more energy and calcium.
      Eat oats, brown rice, soup,
      sprouts, and multigrain roti.
      </p>

    </div>
    `;
  }

  document.getElementById("result").innerHTML = `

    <h2>
      🌸 Personalized Nutrition Suggestions
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

function openPopup() {

  document.getElementById("popup").style.display =
    "block";
}

function closePopup() {

  document.getElementById("popup").style.display =
    "none";
}

function toggleDarkMode() {

  document.body.classList.toggle("dark-mode");
}

let water = 0;

function addWater() {

  water++;

  document.getElementById("waterCount").innerHTML =
    water + " Glasses";
}

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

function updateProgress() {

  let progress =
    document.getElementById("progress");

  progress.style.width = "85%";
}
