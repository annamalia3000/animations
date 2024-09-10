const likeButton = document.querySelector('.like-btn');
const containerLike = document.querySelector('.container-like');

likeButton.addEventListener('click', () => {
    const heart = document.createElement('div');
    heart.classList.add('heart');

    const trajectoryNum = Math.floor(Math.random() * 4) + 1;
    heart.style.animationName = `trajectory${trajectoryNum}`;

    containerLike.appendChild(heart);

    heart.addEventListener('animationend', () => {
        heart.remove();
    });
});

