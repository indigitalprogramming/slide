const imageContainer = document.querySelector('.image-container')
const nextImage = document.querySelector('.next-image')
const images = document.querySelectorAll('.img')

let currentImage = 1

nextImage.addEventListener('click', () => {
    if (currentImage == images.length) {
        currentImage = 0
    }

    imageContainer.style.transform = `translateX(-${currentImage * 480}px)`
    currentImage++
})