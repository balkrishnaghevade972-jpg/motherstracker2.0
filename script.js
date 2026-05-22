const content = {

  english: {

    title: "🌸 Nutrition Tracker for Mothers",

    subtitle: "Healthy Mothers, Healthy Future",

    button: "Generate Nutrition Plan",

    bmiTitle: " BMI Calculator",

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

    bmiTitle: " BMI कॅल्क्युलेटर",

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

function changeLanguage() {

  let lang =
    document.getElementById("language").value;

  document.getElementById("title").innerHTML =
    content[lang].title;

  document.getElementById("subtitle").innerHTML =
    content[lang].subtitle;

  document.getElementById("btn").innerHTML =
    content[lang].button;

  document.getElementById("quoteBox").innerHTML =
    content[lang].quote;

  document.getElementById("bmiTitle").innerHTML =
    content[lang].bmiTitle;

  document.getElementById("bmiButton").innerHTML =
    content[lang].bmiButton;

  document.getElementById("waterTitle").innerHTML =
    content[lang].waterTitle;

  document.getElementById("waterButton").innerHTML =
    content[lang].waterButton;

  document.getElementById("progressTitle").innerHTML =
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

function generatePlan() {

  let lang =
    document.getElementById("language").value;

  let stage =
    document.getElementById("stage").value;

  let weight =
    parseFloat(document.getElementById("weight").value);

  let meals = "";

  let extraFood = "";

  if(weight < 50) {

    extraFood =
      lang === "english"
      ? "Extra protein, milk, banana and nuts are recommended for healthy weight gain."
      : "वजन वाढीसाठी अतिरिक्त प्रोटीन, दूध, केळी आणि ड्रायफ्रूट्स खाणे आवश्यक आहे.";
  }

  else if(weight > 70) {

    extraFood =
      lang === "english"
      ? "Low oil meals, fruits and fiber-rich foods are recommended."
      : "कमी तेलाचे पदार्थ, फळे आणि फायबरयुक्त अन्न खाणे आवश्यक आहे.";
  }

  else {

    extraFood =
      lang === "english"
      ? "Maintain a balanced healthy diet with proteins and vitamins."
      : "संतुलित प्रोटीन आणि व्हिटॅमिनयुक्त आहार घ्या.";
  }

  meals = `

  <div class="meal-box">

    <h2>
    ${
      lang === "english"
      ? "🌸 Personalized Diet Plan"
      : "🌸 वैयक्तिक आहार योजना"
    }
    </h2>

    <p>${extraFood}</p>

    <h3>
    ${
      lang === "english"
      ? "🌅 Morning Breakfast"
      : "🌅 सकाळचा नाश्ता"
    }
    </h3>

    <p>
    🥛 Milk, Oats, Banana and Dry Fruits
    </p>

    <h3>
    ${
      lang === "english"
      ? "☀ Mid Morning"
      : "☀ मधल्या वेळचे अन्न"
    }
    </h3>

    <p>
    🍎 Fruits and Coconut Water
    </p>

    <h3>
    ${
      lang === "english"
      ? "🍛 Afternoon Lunch"
      : "🍛 दुपारचे जेवण"
    }
    </h3>

    <p>
    🍚 Rice, Dal, Chapati and Vegetables
    </p>

    <h3>
    ${
      lang === "english"
      ? "☕ Evening Snacks"
      : "☕ संध्याकाळचा नाश्ता"
    }
    </h3>

    <p>
    🥜 Nuts and Fruit Salad
    </p>

    <h3>
    ${
      lang === "english"
      ? "🌙 Dinner"
      : "🌙 रात्रीचे जेवण"
    }
    </h3>

    <p>
    🍲 Soup, Salad and Chapati
    </p>

  </div>
  `;

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
