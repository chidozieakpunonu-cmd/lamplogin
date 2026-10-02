const body = document.body;
const pull = document.getElementById('pull');
const form = document.getElementById('loginForm');

pull.addEventListener('click', () => {
  body.classList.toggle('on');
  body.classList.remove('swing');
  void body.offsetWidth; // restart animation
  body.classList.add('swing');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // hook up your real auth request here
});
