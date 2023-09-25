// 전역 선언 필요한 script
const $darkModeCheckBox = document.querySelector("#darkModeCheckBox");
const isUserColorTheme = localStorage.getItem("color-theme");
const $darkmodeGroup = document.querySelector("#darkmodeGroup");
const $page = document.querySelector("#page");
const $progressBar = document.querySelector("#progressBar");

let touchStartY = null; // 터치 이벤트 관련 변수
let isVisible = true; // 다크모드 버튼 관련 변수

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

$darkModeCheckBox.addEventListener("click", (event) => {
  if (event.target.checked) {
    localStorage.setItem("color-theme", "dark");
    document.documentElement.setAttribute("color-theme", "dark");
    $page.classList.add("is-dark");
  } else {
    localStorage.setItem("color-theme", "light");
    document.documentElement.setAttribute("color-theme", "light");
    $page.classList.remove("is-dark");
  }
});

// 마우스 스크롤 이벤트 처리
document.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    // 아래로 스크롤
    if (isVisible) {
      $darkmodeGroup.classList.add("is-hide");
      isVisible = false;
    }
  } else {
    // 위로 스크롤
    if (!isVisible) {
      $darkmodeGroup.classList.remove("is-hide");
      isVisible = true;
    }
  }
});

// 키보드 이벤트 처리
document.addEventListener("keydown", (event) => {
  if (event.key === "Home" || event.key === "PageUp") {
    $darkmodeGroup.classList.remove("is-hide");
    isVisible = true;
  } else if (event.key === "End" || event.key === "PageDown") {
    $darkmodeGroup.classList.add("is-hide");
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

// FIXME: 터치 스크롤 이벤트 추후 조정
// document.addEventListener("touchstart", (event) => {
//   // 터치 시작 지점을 기록
//   touchStartY = event.touches[0].clientY;
// });

// document.addEventListener("touchmove", (event) => {
//   if (touchStartY !== null) {
//     const touchEndY = event.touches[0].clientY;
//     const deltaY = touchEndY - touchStartY;

//     if (deltaY > 0) {
//       // 아래로 스크롤
//       if (isVisible) {
//         $darkmodeGroup.classList.remove("is-hide");
//         isVisible = true;
//       }
//     } else if (deltaY < 0) {
//       // 위로 스크롤
//       if (!isVisible) {
//         $darkmodeGroup.classList.add("is-hide");
//         isVisible = false;
//       }
//     }

//     // 터치 시작 지점을 업데이트
//     touchStartY = touchEndY;
//   }
// });

// // 터치 종료 이벤트 처리
// document.addEventListener("touchend", () => {
//   // 터치 시작 지점 초기화
//   touchStartY = null;
// });
