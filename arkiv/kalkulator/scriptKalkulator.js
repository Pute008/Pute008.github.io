const inputValue = document.getElementById("user-input");

const number = document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (inputValue.innerText === "NaN") {
        inputValue.innerText = "";
      }
      if (inputValue.innerText === "0") {
        inputValue.innerText = "";
      }
      inputValue.innerText += e.target.innerHTML.trim();
    });
  });
  