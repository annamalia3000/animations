const chatButtonOpen = document.querySelector('.chat-open-btn');
const chatWindow = document.querySelector('.chat-window');
const chatButtonClose = document.querySelector('.chat-close-btn');

chatButtonOpen.addEventListener('click', () => {
    chatButtonOpen.style.display = 'none';

    chatWindow.style.display = 'flex'; 
    chatWindow.style.opacity = 0; 
    chatWindow.style.transition = 'opacity 400ms linear'; 

    setTimeout(() => {
        chatWindow.style.opacity = 1;
    }, 100); 
});

chatButtonClose.addEventListener('click', function () {
    chatWindow.style.transition = 'opacity 300ms linear'; 

    chatWindow.style.opacity = 0;

    setTimeout(() => {
        chatWindow.style.display = 'none'; 
        chatButtonOpen.style.display = 'flex'; 
    }, 100); 
});

