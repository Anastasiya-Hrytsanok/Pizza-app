import './styles.sass'

let app = document.getElementById('app');
let loadBtn = document.getElementById('load-btn');

app.innerHTML = `<p>Click 👆 this button</p>`

const countPizzaEaters = (peopleList) => {
  return peopleList.filter((element) => element.eatsPizza).length;
}

const dividePizza = (pizzaEatersPersonsCount) => {
  let angleStep = 360 / pizzaEatersPersonsCount;
  for (let i = 1; i <= pizzaEatersPersonsCount / 2; i++) {
    let div = document.createElement('div');
    div.className = 'slice';
    div.style.transform = `rotate(${angleStep * i}deg)`;
    document.getElementsByClassName('slices')[0].append(div);
  }
}

const displayPizza = () => {
  document.getElementsByClassName('pizza-container')[0].style.display = 'flex';
}

const renderDiscription = (allPeopleCount, pizzaEatersCount) => {
  document.getElementsByClassName('description')[0].innerHTML = `There will be ${allPeopleCount} people at the party, 
  ${pizzaEatersCount} people will eat pizza!`;
}

const cleanSlices = () => {
  document.getElementsByClassName('slices')[0].innerHTML = '';
}

loadBtn.addEventListener('click', () => {
  app.innerHTML = 'waiting...';
  loadBtn.className = 'loading';

  fetch('https://gp-js-test.herokuapp.com/pizza')
    .then((response) => response.json())
    .then((data) => {
      cleanSlices();
      loadBtn.classList.remove('loading');
      app.innerHTML = '<br>';
      displayPizza();
      const pizzaEatersCounter = countPizzaEaters(data.party);
      dividePizza(pizzaEatersCounter);
      renderDiscription(data.party.length, pizzaEatersCounter);
    })
});