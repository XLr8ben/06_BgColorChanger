//generate a random color
let intervalID;
const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
    // console.log(color);
  }
  return color;
};

const startChangingColor = function () {
  if (!intervalID) {
    intervalID = setInterval(changeBgColor, 500);
}
  function changeBgColor() {
    document.body.style.backgroundColor = randomColor();
  }
};
const stopChangingColor = function () {
  clearInterval(intervalID);
  intervalID = null;
};
const resetChangingColor = function () {
    document.body.style.backgroundColor = '#212121';
    intervalID = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
document.querySelector('#reset').addEventListener('click', resetChangingColor);
