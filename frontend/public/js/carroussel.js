document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');

    // Example data, replace with database data as needed
    const articles = Array.from({ length: 40 }, (_, i) => ({
        title: `Article Title ${i + 1}`,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: `$${(Math.random() * 100).toFixed(2)}`,
        rating: '★★★★☆',
        imageUrl: 'https://via.placeholder.com/150'
    }));

    // Generate the HTML for the articles
    const articlesHtml = articles.map(article => `
        <div class="carousel-item">
            <img src="${article.imageUrl}" alt="Article Image">
            <h3>${article.title}</h3>
            <p>Description: ${article.description}</p>
            <p>Price: ${article.price}</p>
            <p>Rating: ${article.rating}</p>
        </div>
    `).join('');

    // Insert the articles into the carousel
    carouselInner.innerHTML = articlesHtml;

    // Initialize the carousel
    initializeCarousel();
});

function initializeCarousel() {
    let currentSlide = 0;
    const slidesToShow = 3;
    const totalSlides = Math.ceil(document.querySelectorAll('.carousel-item').length / slidesToShow);

    function showSlide(index) {
        if (index >= totalSlides) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = totalSlides - 1;
        } else {
            currentSlide = index;
        }

        const newTransform = `translateX(-${currentSlide * 100}%)`;
        document.querySelector('.carousel-inner').style.transform = newTransform;
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Attach the event handlers to buttons
    document.querySelector('.carousel-control.next').addEventListener('click', nextSlide);
    document.querySelector('.carousel-control.prev').addEventListener('click', prevSlide);

    // Initial call to show the first slide
    showSlide(currentSlide);
}

