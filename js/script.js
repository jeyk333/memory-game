document.addEventListener("DOMContentLoaded", () => {
  //Card Collections
  const collections = [
    {
      name: "apple",
      image: "../images/apple.jpg",
    },
    {
      name: "apple",
      image: "../images/apple.jpg",
    },
    {
      name: "orange",
      image: "../images/orange.jpg",
    },
    {
      name: "orange",
      image: "../images/orange.jpg",
    },
    {
      name: "banana",
      image: "../images/banana.jpg",
    },
    {
      name: "banana",
      image: "../images/banana.jpg",
    },
    {
      name: "grapes",
      image: "../images/grapes.jpg",
    },
    {
      name: "grapes",
      image: "../images/grapes.jpg",
    },
    {
      name: "mango",
      image: "../images/mango.jpg",
    },
    {
      name: "mango",
      image: "../images/mango.jpg",
    },
    {
      name: "s-berry",
      image: "../images/s-berry.jpg",
    },
    {
      name: "s-berry",
      image: "../images/s-berry.jpg",
    },
  ];

  collections.sort(() => 0.3 - Math.random());

  const board = document.querySelector(".board");
  const score = document.querySelector("#score");
  const won = document.querySelector(".won");
  var cardSelected = [];
  var cardSelectedId = [];
  var cardsWon = [];

  //Creating the board
  function createBoard() {
    for (let i = 0; i < collections.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "../images/fruits.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      board.appendChild(card);
    }
  }

  //Flipping the card
  function flipCard() {
    var cardId = this.getAttribute("data-id");
    cardSelected.push(collections[cardId].name);
    cardSelectedId.push(cardId);
    this.setAttribute("src", collections[cardId].image);
    if (cardSelected.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }

  //Checking for match
  function checkMatch() {
    var cards = document.querySelectorAll("img");
    const chosenOneId = cardSelectedId[0];
    const chosenTwoId = cardSelectedId[1];
    if (cardSelected[0] === cardSelected[1]) {
      alert("You found a Match");
      cards[chosenOneId].setAttribute("src", "../images/white.jpg");
      cards[chosenTwoId].setAttribute("src", "../images/white.jpg");
      cardsWon.push(cardSelected);
    } else {
      cards[chosenOneId].setAttribute("src", "../images/fruits.jpg");
      cards[chosenTwoId].setAttribute("src", "../images/fruits.jpg");
      alert("Sorry! Try Again");
    }
    cardSelected = [];
    cardSelectedId = [];
    score.textContent = cardsWon.length;
    if (cardsWon.length === collections.length / 2) {
      won.textContent = "Congratulations! You found them all";
    }
  }

  createBoard();
});
