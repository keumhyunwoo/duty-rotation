👤 사회복무요원 이름
const members = ["박준성", "이영민", "조민승", "OOO"];

// 🗂 업무 목록
const tasks = ["오전셔틀", "오후셔틀", "식사배달", "스크린파크골프"];

// 📅 1주차 시작 날짜 (월요일 추천)
const startDate = new Date("2026-02-03");
const today = new Date();

// 몇 주가 지났는지 계산
const weekDiff = Math.floor(
  (today - startDate) / (1000 * 60 * 60 * 24 * 7)
);

// 화면에 출력
let html = "<ul>";
tasks.forEach((task, i) => {
  const member = members[(i + weekDiff) % members.length];
  html += `<li>${task} : ${member}</li>`;
});
html += "</ul>";

document.getElementById("result").innerHTML = html;
