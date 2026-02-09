const captchaText = document.getElementById("captchaText");
const userInput = document.getElementById("userInput");
const message = document.getElementById("message");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");

let currentCaptcha = "";

function generateCaptcha() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let captcha = "";

  for (let i = 0; i < 5; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  currentCaptcha = captcha;
  captchaText.textContent = captcha;
  userInput.value = "";
  message.textContent = "";
}

submitBtn.addEventListener("click", () => {
  const userValue = userInput.value.trim();    
  const realValue = currentCaptcha.trim();     

  if (userValue === "") {
    message.textContent = "Please enter the captcha!";
    message.style.color = "orange";
    return;
  }

  if (userValue === realValue) {
    message.textContent = "Correct ✅";
    message.style.color = "green";
  } else {
    message.textContent = "Try again ❌";
    message.style.color = "red";
  }
});

restartBtn.addEventListener("click", generateCaptcha);

generateCaptcha();
