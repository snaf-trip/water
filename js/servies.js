const onOffBtn = document.querySelector(".on-off-button");

onOffBtn.addEventListener("click", () => {
  if(onOffBtn.innerHTML === "Включить реактор"){
    onOffBtn.innerHTML = "Выключить реактор";
  } else {
    onOffBtn.innerHTML = "Включить реактор"
  }
})