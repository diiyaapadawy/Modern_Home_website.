const cath = document.querySelectorAll('.image-content img').forEach(image => {
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
})

const show = document.querySelector('.popup-image span').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}