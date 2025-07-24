let display = document.getElementById("result");


function appendValue(value) {
  const operators = ['+', '-', '*', '/', '%','.'];
  const lastChar = display.value.slice(-1);

 
  if (operators.includes(value) && operators.includes(lastChar)) {
    return; 
  }

     if (operators.includes(lastChar) || lastChar === ".") {
      display.value = value.slice(0, -1) + value; // Replace last operator
    } else {
      display.value += value;



  if (display.value === "" && operators.includes(value) && value !== '-') {
    return; 
  }


  display.value += value;
}
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let expression = display.value.replace(/%/g, '/100');
    display.value = eval(expression);
  } catch (e) {
    display.value = "Error";
  }
}
