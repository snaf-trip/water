var inputs = document.querySelectorAll("input");
var inputsPH = document.querySelectorAll(".input-p-H");
var inputsLit = document.querySelectorAll(".input-head-liters");

var urlDel = "http://localhost:3000/data";


editBtn.addEventListener("click", () => {
  for(var i = 0; i < inputs.length; i++) {
  let input = inputs[i];
  input.classList.remove("hide");
  }
  // save();//test
})


saveBtn.addEventListener("click", () => {
  var good = true;
  for(var i = 0; i < inputs.length; i++){
    if(inputs[i].value.length < 1) {
      good = false;
  }
}

  for(i=0; i < inputsPH.length; i++){
  if(inputsPH[i].value > 13 || inputsPH[i].value < 1) {
  good = false;
  }
  }

  for(i=0; i < inputsLit.length; i++){
    if(inputsLit[i].value > 1.5 || inputsLit[i].value < 0.1){
      good = false;
    }
  }


  if(good == false) {
    $('#myModal').modal("show");//вывод ошибки
  } else {
    save2();
  }

})


//Попытка отправить данные одним запросом 

// var save = function(data) {

//   for(var j = 0; j < inputs.length; j++) {
//     inputs[j].placeholder = inputs[j].value;
//     let inputT = inputs[j];
//     inputT.classList.add("hide");
//   }

//   var data1 = {};
//   data1.name = inputs[0].value;
//   data1.secondValue  = inputs[1].value;
//   data1.thridValue = inputs[2].value;

//   var data2 = {};
//   data2.name = inputs[3].value;
//   data2.secondValue  = inputs[4].value;
//   data2.thridValue = inputs[5].value;

//   var data3 = {};
//   data3.name = inputs[6].value;
//   data3.secondValue  = inputs[7].value;
//   data3.thridValue = inputs[8].value;

//   var data4 = {};
//   data4.name = inputs[9].value;
//   data4.secondValue  = inputs[10].value;
//   data4.thridValue = inputs[11].value;

//   var data5 = {};
//   data5.name = inputs[12].value;
//   data5.secondValue  = inputs[13].value;
//   data5.thridValue = inputs[14].value;

//   var allData = [];
//   allData[0] = data1;
//   allData[1] = data2;
//   allData[2] = data3;
//   allData[3] = data4;
//   allData[4] = data5;

//   console.log(allData);
  
  
//   var json = JSON.stringify(allData);

//   console.log(json);

//   var xhr = new XMLHttpRequest();
//   xhr.open("PUT", url, true);
//   xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
//   xhr.onload = function () {
// 	var users = JSON.parse(xhr.responseText);
// 	if (xhr.readyState == 4 && xhr.status == "200") {
// 		console.table(users);
// 	} else {
// 		console.error(users);
// 	}
// }
// xhr.send(json);

// }


var save2 = function(data) {

var data = {};
  data.name = inputs[0].value;
  data.secondValue  = inputs[1].value;
  data.thridValue = inputs[2].value;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url+'/1', true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
	// var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(json);

///////////////////////////////////////////////////////////////////////////////////////


var data = {};
  data.name = inputs[3].value;
  data.secondValue  = inputs[4].value;
  data.thridValue = inputs[5].value;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url+'/2', true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(json);


//////////////////////////////////////////////////////////////////////////////////////////

var data = {};
  data.name = inputs[6].value;
  data.secondValue  = inputs[7].value;
  data.thridValue = inputs[8].value;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url+'/3', true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(json);

//////////////////////////////////////////////////////////////////////////////////////////

var data = {};
  data.name = inputs[9].value;
  data.secondValue  = inputs[10].value;
  data.thridValue = inputs[11].value;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url+'/4', true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(json);

//////////////////////////////////////////////////////////////////////////////////////////

var data = {};
  data.name = inputs[12].value;
  data.secondValue  = inputs[13].value;
  data.thridValue = inputs[14].value;
  var json = JSON.stringify(data);

  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url+'/5', true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = function () {
	var users = JSON.parse(xhr.responseText);
	if (xhr.readyState == 4 && xhr.status == "200") {
		console.table(users);
	} else {
		console.error(users);
	}
}
xhr.send(json);
}