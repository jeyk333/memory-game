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

  const board = document.querySelector(".board");
  var cardSelected = [];

  //Creating the board
  function createBoard() {
    for (let i = 0; i < collections.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "../images/white.jpg");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      board.appendChild(card);
    }
  }

  //Flipping the card
  function flipCard() {}
  createBoard();
});
