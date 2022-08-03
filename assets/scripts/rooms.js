let solteiroBtn = document.querySelector('div.solteiro');
let casalBtn = document.querySelector('div.casal');

let v1 = document.querySelector('div.v1');
let v2 = document.querySelector('div.v2');

let imgSolteiro = document.getElementById("img-solteiro");
let imgCasal = document.getElementById("img-casal");

solteiroBtn.addEventListener('click', () => {
  casalBtn.classList.remove('selected');
  solteiroBtn.classList.add('selected');

  v1.textContent = "R$ 60,00";
  v2.textContent = "R$ 70,00";

  imgSolteiro.src = "./assets/imgs/room1.png";
  imgCasal.src = "./assets/imgs/room1.png";

})

casalBtn.addEventListener("click", () => {
  solteiroBtn.classList.remove("selected");
  casalBtn.classList.add("selected");

  v1.textContent = "R$ 120,00";
  v2.textContent = "R$ 140,00";

  imgSolteiro.src = "./assets/imgs/room2.png";
  imgCasal.src = "./assets/imgs/room2.png";
});