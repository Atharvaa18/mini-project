let isStatus = document.querySelector("h5");
let btn = document.querySelector("#add");

let check = 0;
add.addEventListener("click", function () {
  if (check == 0) {
    isStatus.innerHTML = "friends";
    isStatus.style.color = "green";
    btn.innerHTML="remove friend"
    check = 1;
  } else {
    isStatus.innerHTML = "stranger";
    isStatus.style.color = "red";
    btn.innerHTML="add friend"
    check = 0;
  }
});
