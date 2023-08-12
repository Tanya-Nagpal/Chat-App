// const socket = io('http://localhost:8000');

// //Get DOM elements in JS variables
// const form = document.getElementById('send-container');
// const msgInput = document.getElementById('msgInp');
// const msgContainer = document.querySelector(".container")

// //audio when a msg is received
// var audio = new Audio('ting.mp3');

// //function to append event into the container
// const append = (message,position) => {
//     const msgElement = document.createElement('div');
//     msgElement.innerText = message;
//     msgElement.classList.add('message');
//     msgElement.classList.add(position);
//     msgContainer.append(msgElement);
//     if(position == 'left'){
//         audio.play();
//     }
// }

// //if the form  gets submitted, send server the msg
// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const message = msgInput.value;
//     append(`You: ${message}`, 'right');
//     socket.emit('send', message);
//     msgInput.value = ''
// })

// // Ask new user for his/her name and let the server know
// const name = prompt("Enter your name to join");
// socket.emit('new-user-joined', name);

// // If a new user joins, receive his/her name from the server
// socket.on('user-joined', name =>{
//     append(`${name} joined the chat`, 'right')
// })

// // If server sends a message, receive it
// socket.on('receive', data =>{
//     append(`${data.name}: ${data.message}`, 'left')
// })

// // If a user leaves the chat, append the info to the container
// socket.on('left', name =>{
//     append(`${name} left the chat`, 'right')
// })


//***************************************************************************************
// const socket = io('http://localhost:8000');

// // Get DOM elements in respective Js variables
// const form = document.getElementById('send-container');
// const messageInput = document.getElementById('messageInp')
// const messageContainer = document.querySelector(".container")

// // Audio that will play on receiving messages
// var audio = new Audio('ting.mp3');

// // Function which will append event info to the contaner
// const append = (message, position)=>{
//     const messageElement = document.createElement('div');
//     messageElement.innerText = message;
//     messageElement.classList.add('message');
//     messageElement.classList.add(position);
//     messageContainer.append(messageElement);
//     if(position =='left'){ 
//         audio.play();
//     }
// }


// // Ask new user for his/her name and let the server know
// const name = prompt("Enter your name to join");
// socket.emit('new-user-joined', name);

// // If a new user joins, receive his/her name from the server
// socket.on('user-joined', name =>{
//     append(`${name} joined the chat`, 'right')
// })

// // If server sends a message, receive it
// socket.on('receive', data =>{
//     append(`${data.name}: ${data.message}`, 'left')
// })

// // If a user leaves the chat, append the info to the container
// socket.on('left', name =>{
//     append(`${name} left the chat`, 'right')
// })

// // If the form gets submitted, send server the message
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const message = messageInput.value;
//     append(`You: ${message}`, 'right');
//     socket.emit('send', message);
//     messageInput.value = ''
// })

// const socket = io();

// // Get DOM elements in respective Js variables
// const form = document.getElementById('send-container');
// const messageInput = document.getElementById('messageInp');
// const messageContainer = document.querySelector('.container');
// const userListContainer = document.querySelector('.user-list');

// // Audio that will play on receiving messages
// var audio = new Audio('ting.mp3');

// // Function which will append event info to the container
// const append = (message, position) => {
//   const messageElement = document.createElement('div');
//   messageElement.innerText = message;
//   messageElement.classList.add('message');
//   messageElement.classList.add(position);
//   messageContainer.append(messageElement);
//   if (position === 'left') {
//     audio.play();
//   }
// };

// // Function to update the user list in the HTML
// const updateUserList = userList => {
//   userListContainer.innerHTML = '';
//   userList.forEach(user => {
//     const userElement = document.createElement('div');
//     userElement.innerText = user;
//     userListContainer.appendChild(userElement);
//   });
// };

// // Ask new user for his/her name and let the server know
// const name = prompt('Enter your name to join');
// socket.emit('new-user-joined', name);

// // If a new user joins, receive his/her name from the server
// socket.on('user-joined', name => {
//   append(`${name} joined the chat`, 'right');
// });

// // If server sends a message, receive it
// socket.on('receive', data => {
//   append(`${data.name}: ${data.message}`, 'left');
// });

// // If a user leaves the chat, append the info to the container
// socket.on('left', name => {
//   append(`${name} left the chat`, 'right');
// });

// // Update the user list when received from the server
// socket.on('user-list', userList => {
//   updateUserList(userList);
// });

// // If the form gets submitted, send server the message
// form.addEventListener('submit', e => {
//   e.preventDefault();
//   const message = messageInput.value;
//   append(`You: ${message}`, 'right');
//   socket.emit('send', message);
//   messageInput.value = '';
// });


// const socket = io();
const socket = io('http://localhost:5000');

// Function to extract the username from the URL query parameters
function getUsernameFromUrl() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('username');
}

// Get the username from the URL and emit it to the server
const username = getUsernameFromUrl();
socket.emit('new-user-joined', username);

// Get DOM elements in respective Js variables
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');
const userListContainer = document.querySelector('.user-list');

// Audio that will play on receiving messages
const audio = new Audio('ting.mp3');

// Function which will append event info to the container
const append = (message, position) => {
  const messageElement = document.createElement('div');
  messageElement.innerText = message;
  messageElement.classList.add('message');
  messageElement.classList.add(position);
  messageContainer.append(messageElement);
  if (position === 'left') {
    audio.play();
  }
};

// Function to update the user list in the HTML
const updateUserList = userList => {
  userListContainer.innerHTML = '';
  userList.forEach(user => {
    const userElement = document.createElement('div');
    userElement.innerText = user;
    userListContainer.appendChild(userElement);
  });
};

// Ask new user for his/her name and let the server know
// const name = prompt('Enter your name to join');
// socket.emit('new-user-joined', name);

// If a new user joins, receive his/her name from the server
socket.on('user-joined', name => {
  append(`${name} joined the chat`, 'right');
});

// If server sends a message, receive it
socket.on('receive', data => {
  append(`${data.name}: ${data.message}`, 'left');
});

// If a user leaves the chat, append the info to the container
socket.on('left', name => {
  append(`${name} left the chat`, 'right');
});

// Update the user list when received from the server
socket.on('user-list', userList => {
  updateUserList(userList);
});

// If the form gets submitted, send server the message
form.addEventListener('submit', e => {
  e.preventDefault();
  const message = messageInput.value;
  append(`You: ${message}`, 'right');
  socket.emit('send', message);
  messageInput.value = '';
});
