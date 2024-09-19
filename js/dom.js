let bod = document.body;
bod.style.background = "black";
let main = document.getElementsByTagName("div");
let section = document.getElementsByTagName("section");
let button = document.getElementById("button");

const changeStyle = function () {
  this.style.background = "black";
};
for (let i = 0; i < main.length && i !== 0; i++) {
    main[i].addEventListener('click',changeStyle);
}

const changeSection = function () {
  for (let i = 0; i < section.length; i++) {
    section[i].style.background = 'blue';
  }
  const head = document.head;
  const style = document.createElement("style");
  style.innerText = "#three{color: pink}";
  head.appendChild(style);
};
button.onclick=() => changeSection(1);

const changeId = function () {
  main[0].setAttribute("data-an-other-id",'three');
  // const three = document.getElementById('three');
  // three.style.background = 'pink';
};
main[0].addEventListener('click',changeId);