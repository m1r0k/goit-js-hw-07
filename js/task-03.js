const userName = document.querySelector("input#name-input");
const userAnonymous = document.querySelector("span#name-output");

let username = "";
const anonymous = userAnonymous.textContent;

userName.addEventListener("input", (event) => {
  username = event.target.value.trim();
  event.preventDefault()
});

userName.addEventListener("blur", (event) => {
  if (!event.target.value || event.target.value.trim() === "") {
      alert(anonymous);
  } else {
      alert(username)
  }
  event.preventDefault()
});
