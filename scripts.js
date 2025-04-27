document.addEventListener('DOMContentLoaded', function () {

    const filterButtons = document.querySelectorAll('.filter-button');
    const productCards = document.querySelectorAll('.product-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedCategory = this.getAttribute('data-category');

            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');

                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    const favoriteButtons = document.querySelectorAll('.favorite-button');

    favoriteButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('favorited');
        });
    });


    const showFavoritesButton = document.getElementById('show-favorites');

    showFavoritesButton.addEventListener('click', function () {
        productCards.forEach(card => {
            const favoriteBtn = card.querySelector('.favorite-button');
            if (favoriteBtn.classList.contains('favorited')) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });


});