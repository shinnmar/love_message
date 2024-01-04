const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGroup = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yeiiiii! Te veo más tarde :3";
  gif.src = "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
  //this will hide the buttons that are inside a div, after you have the response
  //esto oculta a los dos botones tomando el div que los contiene, después de responder la pregunta :3
  btnGroup.style.display = "none";
});

noBtn.addEventListener("mouseover", () => {
  const maxX = window.innerWidth - noBtn.clientWidth;
  const maxY = window.innerHeight - noBtn.clientHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
