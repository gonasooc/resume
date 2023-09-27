// 전역 선언 필요한 script
const $darkModeCheckBox = document.querySelector("#darkModeCheckBox");
const isUserColorTheme = localStorage.getItem("color-theme");
const $fixedBtnWrapper = document.querySelector("#fixedBtnWrapper");
const $app = document.querySelector("#app");
const $progressBar = document.querySelector("#progressBar");

let isVisible = true; // 다크모드 버튼 관련 변수

window.onload = function () {
  if (isUserColorTheme === "dark") {
    localStorage.setItem("color-theme", "dark");
    document.documentElement.setAttribute("color-theme", "dark");
    $darkModeCheckBox.setAttribute("checked", true);
    $app.classList.add("is-dark");
  } else {
    localStorage.setItem("color-theme", "light");
    document.documentElement.setAttribute("color-theme", "light");
    $app.classList.remove("is-dark");
  }
};

$darkModeCheckBox.addEventListener("click", (event) => {
  if (event.target.checked) {
    localStorage.setItem("color-theme", "dark");
    document.documentElement.setAttribute("color-theme", "dark");
    $app.classList.add("is-dark");
  } else {
    localStorage.setItem("color-theme", "light");
    document.documentElement.setAttribute("color-theme", "light");
    $app.classList.remove("is-dark");
  }
});

// 마우스 스크롤 이벤트 처리
document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    // 아래로 스크롤
    if (isVisible) {
      $fixedBtnWrapper.classList.add("is-hide");
      isVisible = false;
    }
  } else {
    // 위로 스크롤
    if (!isVisible) {
      $fixedBtnWrapper.classList.remove("is-hide");
      isVisible = true;
    }
  }
});

// 키보드 이벤트 처리
document.addEventListener("keydown", (event) => {
  if (event.key === "Home" || event.key === "PageUp") {
    $fixedBtnWrapper.classList.remove("is-hide");
    isVisible = true;
  } else if (event.key === "End" || event.key === "PageDown") {
    $fixedBtnWrapper.classList.add("is-hide");
    isVisible = false;
  }
});

// 스크롤 값에 따른 프로그레스바 처리
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const totalScrollHeight =
    document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercentage = (scrollY / totalScrollHeight) * 100;

  // 동적 변경
  $progressBar.style.width = scrollPercentage + "%";
});
