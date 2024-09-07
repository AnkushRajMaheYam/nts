// const words = [
//   "Bring your business online",
//   "Find better solutions for online services",
//   "Explore digital marketing and advertising",
//   "Boost your chances of winning elections with PAC",
// ];

// const h2 = document.getElementById("typing");
// let index = 0;
// let currentSentence = 0;

// function typeWriter() {
//   if (index < words[currentSentence].length) {
//     h2.innerHTML += words[currentSentence].charAt(index);
//     index++;
//     setTimeout(typeWriter, 100);
//   } else {
//     setTimeout(erase, 1000);
//   }
// }

// function erase() {
//   if (index > 0) {
//     h2.innerHTML = words[currentSentence].substring(0, index - 1);
//     index--;
//     setTimeout(erase, 50);
//   } else {
//     index = 0;
//     currentSentence++;
//     if (currentSentence >= words.length) {
//       currentSentence = 0;
//     }
//     setTimeout(typeWriter, 100);
//   }
// }

// typeWriter();

// eddited by rajneesh

const words = [
  "Bring your business online",
  "Find better solutions for online services",
  "Explore digital marketing and advertising",
  "Boost your chances of winning elections with PAC",
];

const h2 = document.getElementById("typing");
let currentSentence = 0;
let typingSpeed = 100; // Adjustable typing speed
let erasingSpeed = 50; // Adjustable erasing speed

function typeSentence() {
  const sentence = words[currentSentence];
  let index = 0;

  const typeChar = () => {
    if (index < sentence.length) {
      h2.textContent += sentence.charAt(index); // Use textContent for efficiency
      index++;
      setTimeout(typeChar, typingSpeed);
    } else {
      setTimeout(eraseSentence, 1000); // Wait a second before erasing
    }
  };

  typeChar();
}

function eraseSentence() {
  const sentence = words[currentSentence];
  let index = sentence.length;

  const eraseChar = () => {
    if (index > 0) {
      h2.textContent = sentence.substring(0, index - 1); // Use textContent
      index--;
      setTimeout(eraseChar, erasingSpeed);
    } else {
      currentSentence = (currentSentence + 1) % words.length; // Circular loop
      setTimeout(typeSentence, typingSpeed); // Start next sentence
    }
  };

  eraseChar();
}

typeSentence();

// <.................>



// eddited by ankush raj 

$(document).ready(function () {
  $(".counter").counterUp({
    delay: 10,
    time: 1200,
  });
});
