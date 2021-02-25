const firstInput = document.querySelector(".first-input");
const txtError = document.querySelector(".text-error-inputs"); 
const secondInput = document.querySelector(".second-input");
const containerBtn = document.querySelector(".jojo");
var dropDownBtn = document.querySelector(".dropdown-content");
var fill = document.querySelector(".fill");
var pour = document.querySelector(".pour");

function proverka1(firstInput) { 
    var value = firstInput.value; 
    var rep = /[-\;~!,@#№":'a-zA-Zа-яА-Я]/; 
    if (rep.test(value)) { 
        value = value.replace(rep, ''); 
        firstInput.value = value; 
    } 
}

function proverka2(secondInput) { 
    var value = secondInput.value; 
    var rep = /[-\.;":'a-zA-Zа-яА-Я]/; 
    if (rep.test(value)) { 
        value = value.replace(rep, ''); 
        secondInput.value = value; 
    } 
}


var checkInputs = false; 

// checking values
firstInput.oninput = function() {
  if(firstInput.value > 1.5 || firstInput.value < 0.1 || firstInput.value.length < 1) {
    // txtError.classList.remove("err-hide");
    containerBtn.classList.add("none-click");
    checkInputs = false;
  } else {
    txtError.classList.add("err-hide");
    containerBtn.classList.remove("none-click");
    checkInputs = true;
  }
}

secondInput.oninput = function() {
  if(secondInput.value > 13 || secondInput.value.length > 2 || secondInput.value < 1 || secondInput.value.length < 1 ) {
    // txtError.classList.remove("err-hide");
    containerBtn.classList.add("none-click");
    checkInputs = false;
  } else {
    txtError.classList.add("err-hide");
    containerBtn.classList.remove("none-click");
    checkInputs = true;
  }
}

containerBtn.addEventListener("click", function() {

  if(firstInput.value.length > 0 && secondInput.value.length > 0){
    checkInputs = true;
  };

  if(containerBtn.innerHTML === "Выключить"){
    checkInputs = false;
  }

  if(firstInput.value.length < 1 || secondInput.value.length < 1){
    alert("Введены не все значения!")
  } else if(checkInputs == true){
    containerBtn.textContent = "Выключить";
    console.log("Отправка данных...");
    console.log("Данные отправленны!");
    // fill.style.animation-play-state = "running";
    fill.style.display = "block";
    pour.style.display = "block";
    fill.classList.remove("paused");
    fill.classList.add("run");
    pour.classList.remove("paused");
    pour.classList.add("run");
    firstInput.style.pointerEvents='none';
    secondInput.style.pointerEvents='none';
    dropDownBtn.style.pointerEvents='none';
    
    
  } else if(checkInputs == false){
    containerBtn.innerHTML = "Включить";
    // water.style.display = "none";
    fill.style.display = "none";
    pour.style.display = "none";
    fill.classList.add("paused");
    fill.classList.remove("run");
    pour.classList.add("paused");
    pour.classList.remove("run");
    firstInput.style.pointerEvents='auto';
    secondInput.style.pointerEvents='auto';
    dropDownBtn.style.pointerEvents='auto';
  }
})
