let express = require("express");
let app = express();
function getWelcomeMessage() {
  let result = "Welcome to our service!";
  return result;
}
app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

function getGreetingMessage(username) {
  let result = "Hello, " + username + "!";
  return result;
}

app.get("/greet", (req, res) => {
  let username = req.query.username;
  res.send(getGreetingMessage(username));
});

function checkPasswordStrength(password) {
  let result = "";
  if (password.length > 15) {
    result = "Password is strong";
  } else {
    result = "Password is weak";
  }
  return result;
}

app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
});

function getSum(num1, num2) {
  let result = num1 + num2;
  return result.toString();
}

app.get("/sum", (req, res) => {
  let num1 = parseInt(req.query.num1);
  let num2 = parseInt(req.query.num2);
  res.send(getSum(num1, num2));
});

function getSubscriptionStatus(username, isSubscribed) {
  let result = "";
  if (isSubscribed === "true") {
    result = username + " is subscribed";
  } else {
    result = username + " is not subscribed";
  }
  return result;
}

app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let isSubscribed = req.query.isSubscribed;
  res.send(getSubscriptionStatus(username, isSubscribed));
});

function getDiscountedPrice(price, discount) {
  console.log(price, discount);
  let result = price - (price * discount) / 100;
  return result.toString();
}

app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price, discount));
});

function getPersonalizedGreeting(age, gender, name) {
  let result = "Hello, " + name + "! You are a " + age + " year old " + gender;
  return result;
}

app.get("/personalized-greeting", (req, res) => {
  let age = parseFloat(req.query.age);
  let gender = req.query.gender;
  let name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});

function getFinalPrice(price, discount, tax) {
  let price1 = price - (price * discount) / 100;
  let tax1 = price1 + (price1 * tax) / 100;
  return tax1.toString();
}

app.get("/final-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  let tax = parseFloat(req.query.tax);
  res.send(getFinalPrice(price, discount, tax));
});

function getTotalExerciseTime(running, cycling, swimming) {
  let totalexercisetime = running + cycling + swimming;
  return totalexercisetime.toString();
}

app.get("/total-exercise-time", (req, res) => {
  let running = parseFloat(req.query.running);
  let cycling = parseFloat(req.query.cycling);
  let swimming = parseFloat(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming));
});

PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on port 3000 http://localhost:" + PORT);
});
