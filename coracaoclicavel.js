function toggleHeart(element) {
    element.classList.toggle('active');
    const heartIcon = element.querySelector('i');

    if (element.classList.contains('active')) {
        heartIcon.classList.remove('fa-regular');
        heartIcon.classList.add('fa-solid');
        localStorage.setItem(element.parentElement.querySelector('img').alt, 'favorito');
    } else {
        heartIcon.classList.remove('fa-solid');
        heartIcon.classList.add('fa-regular');
        localStorage.removeItem(element.parentElement.querySelector('img').alt);
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const hearts = document.querySelectorAll('.heart-container');
    hearts.forEach(heart => {
        const imgAlt = heart.parentElement.querySelector('img').alt;
        if (localStorage.getItem(imgAlt)) {
            heart.classList.add('active');
            heart.querySelector('i').classList.remove('fa-regular');
            heart.querySelector('i').classList.add('fa-solid');
        }
    });
});