const textElement = document.querySelector(".content span");
const plusArrow = document.querySelector(".plus");
const minusArrow = document.querySelector(".minus");

console.log(minusArrow);

let numberState = 0;

function plusNumber() {
  numberState++;
  textElement.textContent = numberState;
}

function minusNumber() {
  numberState--;
  textElement.textContent = numberState;
}

let plusAnimation = [
  {
    top: "-150px",
    left: "0px"
  },
  {
    top: "-150px",
    left: "-200px"
  },
  {
    top: "150px",
    left: "-200px"
  },
  {
    top: "150px",
    left: "0px"
  },
  {
    top: "0px",
    left: "0px"
  }
];

let minusAnimation = [
  {
    top: "150px",
    left: "0px"
  },
  {
    top: "150px",
    left: "-200px"
  },
  {
    top: "-150px",
    left: "-200px"
  },
  {
    top: "-150px",
    left: "0px"
  },
  {
    top: "0px",
    left: "0px"
  }
]

plusArrow.addEventListener("click", (event) => {
  plusNumber();
  textElement.animate(plusAnimation, 500);
});

minusArrow.addEventListener("click", (event) => {
  minusNumber();
  textElement.animate(minusAnimation, 500);
});


