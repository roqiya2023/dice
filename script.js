let result = 1;

document.querySelector('.dice__trigger').addEventListener('click', function() {
  let result = Math.floor(Math.random() * 6) + 1;

  if (result === 1) {
    document.querySelector('.dice__image').src = 'images/dice1.png';
  } else if (result === 2) {
    document.querySelector('.dice__image').src = 'images/dice2.png';
  } else if (result === 3) {
    document.querySelector('.dice__image').src = 'images/dice3.png';
  } else if (result === 4) {
    document.querySelector('.dice__image').src = 'images/dice4.png';
  } else if (result === 5) {
    document.querySelector('.dice__image').src = 'images/dice5.png';
  } else if (result === 6) {
    document.querySelector('.dice__image').src = 'images/dice6.png';
  }
});
