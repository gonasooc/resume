function downloadPdf() {
  // .app에 is-dark 클래스 유무 확인
  const appElement = document.querySelector(".app");
  const isDarkMode = appElement.classList.contains("is-dark");

  if (isDarkMode) {
    alert("PDF 저장은 라이트모드에서만 지원합니다.");
    return;
  }

  const loadingSpinner = document.getElementById("spinnerWrapper");
  loadingSpinner.style.display = "flex";

  const divToPrint = document.getElementById("divToPrint");

  html2canvas(divToPrint, {
    allowTaint: true,
    useCORS: true,
    scale: 1.5,
  }).then((canvas) => {
    // 캔버스를 이미지로 변환
    let imgData = canvas.toDataURL("image/png");
    let imgWidth = 190; // 이미지 가로 길이(mm) / A4 기준 210mm
    let pageHeight = imgWidth * 1.414; // 출력 페이지 세로 길이 계산 A4 기준
    let imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let margin = 10; // 출력 페이지 여백설정
    let doc = new jsPDF("p", "mm");
    let position = 10;

    // 첫 페이지 출력
    doc.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // 한 페이지 이상일 경우 루프 돌면서 출력
    while (heightLeft >= 20) {
      position = heightLeft - imgHeight;
      position = position - 20;
      doc.addPage();
      doc.addImage(imgData, "PNG", margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // 파일 저장
    doc.save("기술이력서_최관수.pdf");
    loadingSpinner.style.display = "none";
  });
}
