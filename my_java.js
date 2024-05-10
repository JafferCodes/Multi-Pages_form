var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");

var form11 = document.getElementById("form11");
var form22 = document.getElementById("form22");
var form33 = document.getElementById("form33");

var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");

var next11 = document.getElementById("next11");
var next22 = document.getElementById("next22");

var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");

var back11 = document.getElementById("back11");
var back22 = document.getElementById("back22");

var progress = document.getElementById("progress");

next1.onclick = function () {
  form1.style.left = "-450px";
  form2.style.left = "40px";
  progress.style.width = "240px";
};
next11.onclick = function () {
  form1.style.left = "-450px";
  form2.style.left = "40px";
  progress.style.width = "240px";
};

back1.onclick = function () {
  form1.style.left = "40px";
  form2.style.left = "450px";
  progress.style.width = "120px";
};

next2.onclick = function () {
  form2.style.left = "-450px";
  form3.style.left = "40px";
  progress.style.width = "360px";
};
back2.onclick = function () {
  form2.style.left = "40px";
  form3.style.left = "450px";
  progress.style.width = "240px";
};
