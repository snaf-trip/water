var preset1 = document.querySelector(".preset1");
var preset2 = document.querySelector(".preset2");
var preset3 = document.querySelector(".preset3");
var preset4 = document.querySelector(".preset4");
var preset5 = document.querySelector(".preset5");

var url = "http://localhost:3000/data";


function funonload() {
    sendRequest2("GET", url).then(fillingDataForIndex).catch(err => console.log(err));
} 
window.onload = funonload;


//Получение профилей с сервера
function sendRequest2 (method, url) {
  return new Promise ( (resolve, reject) => {
    const xhr = new XMLHttpRequest();

  xhr.open("GET", url); 
  xhr.responseType = "json";
  xhr.onload = () => {

  if (xhr.status >= 400) {
    reject(xhr.response);
  } else {
    resolve(xhr.response);
  }
};

  xhr.onerror = () => {
    console.log(xhr.response);
  };
  xhr.send();
  })
  
}

var fillingDataForIndex = function(data) {
  // var x = JSON.stringify(data);
  // console.log(x);
  
  // console.log(data);

  preset1.textContent = data[0].name;
  var firstValuePres1 = data[0].secondValue;
  var secondValuePres1 = data[0].thridValue;

  preset2.textContent = data[1].name;
  var firstValuePres2 = data[1].secondValue;
  var secondValuePres2 = data[1].thridValue;

  preset3.textContent = data[2].name;
  var firstValuePres3 = data[2].secondValue;
  var secondValuePres3 = data[2].thridValue;

  preset4.textContent = data[3].name;
  var firstValuePres4 = data[3].secondValue;
  var secondValuePres4 = data[3].thridValue;

  preset5.textContent = data[4].name;
  var firstValuePres5 = data[4].secondValue;
  var secondValuePres5 = data[4].thridValue;

  //   firstInput.value = firstValuePres1;
  // secondInput.value = secondValuePres1;

  
  
  
  // var secondValuePres1 = data[0].thridValue

  preset1.onclick = function() {
  firstInput.value = firstValuePres1;
  secondInput.value = secondValuePres1;
  }

  preset2.onclick = function() {
  firstInput.value = firstValuePres2;
  secondInput.value = secondValuePres2;
  }

  preset3.onclick = function() {
  firstInput.value = firstValuePres3;
  secondInput.value = secondValuePres3;
  }

  preset4.onclick = function() {
  firstInput.value = firstValuePres4;
  secondInput.value = secondValuePres4;
  }

  preset5.onclick = function() {
  firstInput.value = firstValuePres5;
  secondInput.value = secondValuePres5;
  }
}

// preset1.addEventListener("click", function(data) {
//    = data[0].secondValue;
//   secondInput.value = data[0].thridValue;
// })



