alert("JS 실행됨");
// 테스트용 콘솔 로그
console.log("script.js 실행됨");

// 👤 사회복무요원 이름
const members = ["박준성", "이영민", "조민승", "OOO"];

// 🗂 업무 목록
const tasks = ["오전셔틀", "오후셔틀", "식사배달", "파크골프"];

// 📅 기준 날짜 (과거 날짜로 고정 — 중요)
const startDate = new Date("2025-01-08");
const today = new Date();

// 주 차이 계산
const weekDiff = Math.floor(
  (today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 7)
);

// 결과 출력
const resultEl = document.getElementById("result");
resultEl.innerHTML = "";

tasks.forEach((task, i) => {
  const member = members[(i + weekDiff) % members.length];
  const li = document.createElement("li");
  li.textContent = `${task} : ${member}`;
  resultEl.appendChild(li);
});
