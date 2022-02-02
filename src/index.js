import './styles.scss'

document.getElementById('app').innerHTML = `<p>Click 👆 this button</p>`

document.getElementById('load-btn').addEventListener('click', () => {
  document.getElementById('app').innerHTML = 'waiting...'

  fetch('https://gp-js-test.herokuapp.com/pizza')
    .then((response) => response.json())
    .then((data) => console.log(data))
})
