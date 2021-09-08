const diceImage = document.getElementById("dice-image");
const diceGif = document.getElementById("dice-gif");
const divContainerStatistics = document.getElementsByClassName(
  "containerStatistics"
);

/* ----------------- Roll dices function ---------------- */
function rollDices() {
  let dicesArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 1; i <= 1000; i++) {
    //   Row 1st dice randomly
    const dice1 = Math.ceil(Math.random(i) * 6);

    // Row 2nd dice randomly
    const dice2 = Math.ceil(Math.random(i) * 6);

    // Sum 1st and 2nd dices
    const result = dice1 + dice2;

    // Add +1 time this number have been sorted in the array
    dicesArray[result - 2] += 1;
  }

  return dicesArray;
}

/* ------------- Create paragraph Statistics ------------ */
function createStatistics(a) {
  const statisticsResults = document.getElementById("statisticsResults");
  statisticsResults.innerHTML = "";
  //   Create paragraph with statistics
  for (let i = 0; i < a.length; i++) {
    const newParagraph = document.createElement("p");
    newParagraph.innerText = i + 2 + ": foi sorteado " + a[i] + " vezes.";
    statisticsResults.appendChild(newParagraph);
  }
}

/* -------------- Create statistics graphic ------------- */
function createGraphic(a) {
  const containerGraphic = document.getElementById("containerGraphic");
  containerGraphic.innerHTML = "";
  for (let i = 0; i < a.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("graphic");
    newDiv.style.width = a[i] + "px";
    newDiv.innerHTML = i + 2 + ": " + a[i];
    containerGraphic.appendChild(newDiv);
  }
}

/* ------------------ CALL ALL ACTIONS ------------------ */
const callActions = () => {
  rollDices();
  createStatistics(rollDices());
  createGraphic(rollDices());

  const hiddenDivs = document.getElementsByClassName("remove");
  for (let i = 0; i < hiddenDivs.length; i++) {
    hiddenDivs[i].classList.remove("hidden");
  }
};

const rollDicesButton = document.getElementById("roll-dices");
rollDicesButton.addEventListener("click", callActions);
