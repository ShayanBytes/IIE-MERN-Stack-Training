let generate = document.getElementById("generate");
let result = document.getElementById("result");

generate.addEventListener("click", () => {
  let length = document.getElementById("length").value;
  let uppercase = document.getElementById("uppercase").checked;
  let lowercase = document.getElementById("lowercase").checked;
  let numbers = document.getElementById("numbers").checked;
  let symbol = document.getElementById("symbol").checked;
  let password = generatePassword(
    length,
    uppercase,
    lowercase,
    numbers,
    symbol
  );
  result.innerHTML = "<h1>Generated Password: <b>" + password + "</b></h1>";
  result.style.visibility = "";
  result.style.visibility = "visible";
});

function generatePassword(length, uppercase, lowercase, numbers, symbol) {
  let charSet = "";
  if (uppercase) charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (lowercase) charSet += "abcdefghijklmnopqrstuvwxyz";
  if (numbers) charSet += "0123456789";
  if (symbol) charSet += "!@#$%^&*_+";
  let password = "";
  
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet.charAt(randomIndex);
  }
  return password;
}