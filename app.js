let mainDiv = document.querySelector(".mainDiv");
let body = document.querySelector("body");
let inputField = document.querySelector(".inputField");
let input = document.querySelector("input");
let createQr = document.querySelector(".createQr");
let qrImg = document.querySelector(".qrImg");
let qrButton = document.querySelector(".qrButton");

qrButton.addEventListener("click", () => {
  if (input.value != "") {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
    qrImg.classList.add("qrImgExtraClass");
    mainDiv.classList.add("mainDivExtraClass");
    createQr.classList.add("createQrExtraClass");
  } else {
    const changeBackground = setTimeout(() => {
      body.style.backgroundColor = "rgb(193, 31, 58)";
      input.value = "error";
      input.style.backgroundColor = "rgb(193, 31, 58)";
    }, 0);
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
});
