// 전역 선언 필요한 script
const $darkModeCheckBox = document.querySelector("#darkModeCheckBox");
const isUserColorTheme = localStorage.getItem("color-theme");
const $darkmodeGroup = document.querySelector("#darkmodeGroup");
const $page = document.querySelector("#page");
let isVisible = true;

window.onload = function () {
  if (isUserColorTheme === "dark") {
    localStorage.setItem("color-theme", "dark");
    document.documentElement.setAttribute("color-theme", "dark");
    $darkModeCheckBox.setAttribute("checked", true);
    $page.classList.add("is-dark");
  } else {
    localStorage.setItem("color-theme", "light");
    document.documentElement.setAttribute("color-theme", "light");
    $page.classList.remove("is-dark");
  }
};

$darkModeCheckBox.addEventListener("click", (e) => {
  if (e.target.checked) {
    localStorage.setItem("color-theme", "dark");
    document.documentElement.setAttribute("color-theme", "dark");
    $page.classList.add("is-dark");
  } else {
    localStorage.setItem("color-theme", "light");
    document.documentElement.setAttribute("color-theme", "light");
    $page.classList.remove("is-dark");
  }
});

document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    // 마우스 휠을 아래로 스크롤할 때
    if (isVisible) {
      $darkmodeGroup.classList.add("is-hide");
      isVisible = false;
    }
  } else {
    // 마우스 휠을 위로 스크롤할 때
    if (!isVisible) {
      $darkmodeGroup.classList.remove("is-hide");
      isVisible = true;
    }
  }
});
