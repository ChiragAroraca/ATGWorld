var createAccount = document.querySelector(".create-account ");
createAccount.addEventListener("click", function () {
  document.querySelector(".overlay").classList.add("active");
  document.querySelector(".sign-up").classList.add("active");
  document.querySelector(".close-button").classList.add("active");
});

document.querySelector(".close-button").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("active");
  document.querySelector(".sign-up").classList.remove("active");
  document.querySelector(".close-button").classList.remove("active");
  document.querySelector(".sign-in").classList.remove("display-sign-in");
});

const sociaButtons = document.querySelectorAll(".second-layout button");
sociaButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("active");
    document.querySelector(".sign-up").classList.remove("active");
    document.querySelector(".close-button").classList.remove("active");
    document.querySelector(".follow-parent").classList.add("follow-display");
    document.querySelector(
      ".join-group-button"
    ).innerHTML = `<i class="fa-solid fa-arrow-right-from-bracket"></i> Leave Group`;
    document
      .querySelector(".join-group-button")
      .classList.remove("btn-primary");
    document.querySelector(".join-group-button").classList.add("btn-secondary");
    document.querySelector(".create-account").innerHTML = `
  <div class="profile">
    <img src="/public/images/Profile4.png">
  <p>Siddharth Goyal&nbsp&nbsp▼</p>
  </div>
`;
  });
});

const sociaButtons2 = document.querySelectorAll(".second-layout2 button");
sociaButtons2.forEach(function (button) {
  button.addEventListener("click", function () {
    document.querySelector(".overlay").classList.remove("active");
    document.querySelector(".sign-in").classList.remove("display-sign-in");
    document.querySelector(".close-button").classList.remove("active");
    document.querySelector(".follow-parent").classList.add("follow-display");
    document.querySelector(
      ".join-group-button"
    ).innerHTML = `<i class="fa-solid fa-arrow-right-from-bracket"></i> Leave Group`;
    document
      .querySelector(".join-group-button")
      .classList.remove("btn-primary");
    document.querySelector(".join-group-button").classList.add("btn-secondary");
    document.querySelector(".create-account").innerHTML = `
  <div class="profile">
    <img src="/public/images/Profile4.png">
  <p>Siddharth Goyal&nbsp&nbsp▼</p>
  </div>
`;
  });
});
document.querySelector(".sign-in-desc").addEventListener("click", function () {
  document.querySelector(".sign-up").classList.remove("active");
  document.querySelector(".sign-in").classList.add("display-sign-in");
});
document
  .querySelector(".sign-up-desc .sign-up-link")
  .addEventListener("click", function () {
    document.querySelector(".sign-up").classList.add("active");
    document.querySelector(".sign-in").classList.remove("display-sign-in");
  });

const followButtons = document.querySelectorAll(".follow-button");

followButtons.forEach(function (buttons) {
  buttons.addEventListener("click", function () {
    if (buttons.textContent === "Follow") {
      buttons.classList.add("followed");
      buttons.classList.remove("follow-button");
      buttons.textContent = "Followed";
    } else {
      buttons.classList.remove("followed");
      buttons.classList.add("follow-button");
      buttons.textContent = "Follow";
    }
  });
});

document
  .querySelector(".join-group-mobile")
  .addEventListener("click", function () {
    document.querySelector(".overlay").classList.add("active");
    document.querySelector(".sign-up").classList.add("active");
    document.querySelector(".close-button").classList.add("active");
    document.querySelector(
      ".sign-up-desc"
    ).innerHTML = `<p><a class="sign-up-link" href="#">Create Account!</a></p>
  `;
    document.querySelector(".sign-in-heading div h3").innerText =
      "Welcome Back!";
  });
