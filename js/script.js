let backgroundColor = "#FFF8E7";
let image1 = document.getElementById("image1");
let image2 = document.getElementById("image2");
let image3 = document.getElementById("image3");

function showSequenceTwo() {
  image1.src = "images/leave.png";
  image2.src = "images/door.png";
  image3.src = "images/room.png";
}

function showSequenceOne() {
  image1.src = "images/room.png";
  image3.src = "images/leave.png"
  image2.src = "images/door.png";
  ;
}

document.body.style.backgroundColor = backgroundColor;
let count = 25;

function updateStoryText() {
  let storyText = document.getElementById("storyText");
  if (count <= 30) {
    storyText.textContent =
      "“Home is warm and cozy, but it’s time for me to explore the world.” \n" +
      "“It’s hard to say goodbye, but I believe I can do this.” \n" +
      "“A bigger world is waiting for me, and my adventure starts today!”";
  } else {
    storyText.textContent =
      "“I can finally go home!” \n" +
      "“I once dreamed of leaving this place behind.” \n" +
      "“But now I know that home is where I feel safest and most loved.”";
  }
}

function updateAgeText() {
  document.getElementById("ageText").textContent =
    "When the puppy turns " + count + "...";
}

updateStoryText();
updateAgeText();

if (count <= 30) {
  showSequenceOne();
}

function addOne() {
  count++; // count = count + 1;

  console.log("count: " + count);

  if (count > 30) {
    showSequenceTwo();
  }
 updateStoryText();
 updateAgeText();

}

function subtractOne() {
  count--; // count = count - 1;

  console.log("count: " + count);

  if (count <= 30) {
    showSequenceOne();
  }
  updateStoryText();
  updateAgeText();

}

