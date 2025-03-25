const buttons = document.querySelectorAll('button[type="button"]')
const form = document.querySelector('form');
const cardBody = document.querySelector('.card');
let userRating = 0;

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    userRating = index + 1;

    buttons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
  })
})

form.addEventListener('submit', (e) => {
  e.preventDefault();

  form.style.display = 'none';

  const thankYouState = document.createElement('div');
  thankYouState.className = 'thank-you hidden transition';
  thankYouState.innerHTML = `
      <img src="./images/illustration-thank-you.svg" alt="" />
      <p>You selected ${userRating} out of 5</p>
      <h1>Thank you!</h1>
      <p>We appreciate you taking the time to give a rating. If you ever need more support,
      don’t hesitate to get in touch!</p>
    `;

  cardBody.appendChild(thankYouState);
})

