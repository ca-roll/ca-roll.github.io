document.getElementById('searchInput').addEventListener('input', function () {
    let query = this.value.toLowerCase();
    let links = document.querySelectorAll('.container a');
    let allDetails = document.querySelectorAll('.container details');

    // If the search input is cleared, reset everything to the default state
    if (!query) {
        links.forEach(link => link.parentElement.style.display = '');
        allDetails.forEach(details => details.removeAttribute('open'));
        return;
    }

    links.forEach(function (link) {
        let listItem = link.parentElement;
        let detailsElement = listItem.closest('details');

        if (link.textContent.toLowerCase().includes(query)) {
            listItem.style.display = ''; // Show the list item
            if (detailsElement) {
                detailsElement.setAttribute('open', true); // Open the details section
            }
        } else {
            listItem.style.display = 'none'; // Hide the list item
        }
    });
});

// Back-to-Top Button
let backToTopButton = document.getElementById('backToTop');
window.addEventListener('scroll', function () {
    if (window.scrollY > 0) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Smooth transition to the top
    });
});

// Resource Filtering
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        let filter = this.getAttribute('data-filter');

        // Display only the selected category
        document.querySelectorAll('[data-category]').forEach(section => {
            if (filter === 'all' || section.getAttribute('data-category') === filter) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });

        // Highlight the active button
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.classList.remove('active');
        });
        this.classList.add('active');
    });
});