const saveBtn = document.getElementById("save");
const editBtn = document.getElementById("edit");

var inputs = document.querySelectorAll("input");

var url = "http://localhost:3000/data";


function funonload() {
    sendRequest("GET", url).then(fillingData).catch(err => console.log(err));
} 
window.onload = funonload;


//Получение профилей с сервера
function sendRequest (method, url) {
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

//Размещение полученных данных по инпутам
var fillingData = function (data) {

  // var dataParse = JSON.parse(data);
  // console.log(dataParse);
  

    var dataArr1 = Object.values(data[0]);
    dataArr1.pop();
    var dataArr2 = Object.values(data[1]);
    dataArr2.pop();
    var dataArr3 = Object.values(data[2]);
    dataArr3.pop();
    var dataArr4 = Object.values(data[3]);
    dataArr4.pop();
    var dataArr5 = Object.values(data[4]);
    dataArr5.pop();
    
    var allDataArr = dataArr1.concat(dataArr2, dataArr3, dataArr4, dataArr5);

    for(i=0; i < inputs.length; i++) {
      inputs[i].value = allDataArr[i];
      inputs[i].placeholder = allDataArr[i];
    }

}

