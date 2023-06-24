const messageInput = document.querySelector("#messageInput");
const messageOutput = document.querySelector("#messageOutput");
const submitBtn = document.querySelector("#submitBtn");
//querySelector으로 HTML Elements를 가져옴

submitBtn.addEventListener('click', () => {
  console.log(messageInput.value);
  messageOutput.innerHTML = messageInput.value;
  messageInput.value = '';
})
//제출 버튼 클릭 시 inputText의 텍스크가 Output p태그 안에 입력하는 함수를 실행