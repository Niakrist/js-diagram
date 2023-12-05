const getData =  async() => {
  const response = await fetch('./../data/data.json');
  const data = await response.json();
  return data;
} 

const data = getData();

const diagramList = document.querySelector('.app-diagram__list');


data.then((elements) => {
  return elements.forEach((element) => {
    const { day, amount } = element;

    const amountPX = 300 * amount / 100;
    console.log(amountPX)
    const html = `
      <div class="app-diagram__item">
        <div class="app-diagram__amount">$${amount}</div>
        <div style="height:${amountPX}px;" class="app-diagram__column"></div>
        <div class="app-diagram__name">${day}</div>
      </div>`;
       diagramList.insertAdjacentHTML('beforeend', html);
  })
})


diagramList.addEventListener('click', function(e) {
  if (e.target.matches('.app-diagram__column')) {
    const diagramColumns = diagramList.querySelectorAll('.app-diagram__column');
    const diagramAmounts = diagramList.querySelectorAll('.app-diagram__amount');
    diagramColumns.forEach(diagramColumn => diagramColumn.classList.remove('active'));
    diagramAmounts.forEach(diagramAmount => diagramAmount.style.display = '');
    const diagramColumn = e.target;
    diagramColumn.classList.add('active');
    diagramColumn.previousElementSibling.style.display = 'block';
  }
})