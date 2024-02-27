function showCategory(category) {
    // Show all categories if 'all' is selected
    if (category === 'all') {
        const categories = document.querySelectorAll('.category');
        categories.forEach(cat => cat.classList.remove('hidden'));
    } else {
        // Hide all categories
        const categories = document.querySelectorAll('.category');
        categories.forEach(cat => cat.classList.add('hidden'));

        // Show the selected category
        const selectedCategory = document.getElementById(category);
        if (selectedCategory) {
            selectedCategory.classList.remove('hidden');
        }
    }
}