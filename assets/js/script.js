window.onload = function createStructure() {
  const div = document.createElement('div');
  document.body.appendChild(div)
  div.setAttribute('id', 'clock');
  createDivChild()
}

function createDivChild() {
  const divContainer = document.getElementById('clock');
  for (let i = 0; i < 3; i += 1) {
    const createDiv = document.createElement('div');
    divContainer.appendChild(createDiv);
    createDiv.setAttribute('class', 'time');
    const span = document.createElement('span');
    span.innerText = '00'
    createDiv.appendChild(span)
    const spanTwo = document.createElement('span')
    createDiv.appendChild(spanTwo)
    spanTwo.setAttribute('class', 'spanTwo')
  }

  const span1 = document.getElementsByTagName('span')[1];
  span1.innerHTML = 'Horas';
  const span2 = document.getElementsByTagName('span')[3];
  span2.innerText = 'Minutos';
  const span3 = document.getElementsByTagName('span')[5];
  span3.innerText = 'Segundos';
  numbersClock()
}

function numbersClock() {
  setInterval(numbersClock, 1000)
  let hours = new Date().getHours();
  let minutes = new Date().getMinutes();
  let seconds = new Date().getSeconds();
  if (hours < 10) hours = '0' + hours;
  if (minutes < 10) minutes = '0' + minutes;
  if (seconds < 10) seconds = '0' + seconds;
  document.getElementsByTagName('span')[0].textContent = hours;
  document.getElementsByTagName('span')[2].textContent = minutes;
  document.getElementsByTagName('span')[4].textContent = seconds;
}