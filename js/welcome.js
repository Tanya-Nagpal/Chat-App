// Get DOM elements in respective Js variables
const nameForm = document.getElementById('name-form');
const usernameInput = document.getElementById('username');

nameForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const username = usernameInput.value.trim();
  if (username !== '') {
    const encodedUsername = encodeURIComponent(username);
    window.location.href = `index.html?username=${encodedUsername}`;
  }
});