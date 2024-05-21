document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.querySelector('.carousel-container');
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('imgDiv');
    const largeImage = document.createElement('img');
    largeImage.classList.add('large-image');
    carouselContainer.appendChild(imgDiv);
    imgDiv.appendChild(largeImage);

    const thumbnailContainer = document.createElement('div');
    thumbnailContainer.classList.add('thumbnail-container');
    carouselContainer.appendChild(thumbnailContainer);
 
    const images = [
        'images/artists/4e7c9ab8812d734ee2b36ecdeafa4a2656373140728f867293059cca52da982a808855485b64fb0e_rw_1200.jpg',
        'images/artists/8e24c68029a16fc93896ed6724dc4ecf.jpg',
        'images/artists/9a74a4b2537a64b7d83441fe09a2a5da.jpg',
        'images/artists/280395-discworld-eric.jpg',
        'images/artists/d8ljes3-a209bb47-b805-4869-91a8-54597171ec38.jpg',
        'images/artists/images.jpg',
        'images/artists/terry-pratchett-discworld-lancre-witch-trials-illustration-granny-nanny-magrat-close-600x600.jpg'
    ];
    largeImage.src = images[0];
  
    images.forEach((imageUrl, index) => {
        const thumbnail = document.createElement('img');
        thumbnail.classList.add('thumbnail');
        thumbnail.src = imageUrl;
        thumbnail.addEventListener('click', () => {
            largeImage.src = imageUrl;
        });
        thumbnailContainer.appendChild(thumbnail);
    });

    const prevArrow = document.createElement('div');
    prevArrow.classList.add('nav-arrow', 'prev-arrow');
    prevArrow.textContent = '<';
    imgDiv.insertBefore(prevArrow,largeImage);

    const nextArrow = document.createElement('div');
    nextArrow.classList.add('nav-arrow', 'next-arrow');
    nextArrow.textContent = '>';
    imgDiv.insertBefore(nextArrow,largeImage.nextSibling);

    prevArrow.addEventListener('click', () => {
        const path = largeImage.src.substring(largeImage.src.lastIndexOf('/') + 1);        
        const currentIndex = images.indexOf('images/artists/' + path);        
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        largeImage.src = images[newIndex];
    });

    nextArrow.addEventListener('click', () => {
        const path = largeImage.src.substring(largeImage.src.lastIndexOf('/') + 1);        
        const currentIndex = images.indexOf('images/artists/' + path); 
        const newIndex = (currentIndex + 1) % images.length;
        largeImage.src = images[newIndex];
    });
   
});