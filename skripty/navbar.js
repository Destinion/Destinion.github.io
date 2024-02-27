function toggleMenu() {
    var menu = document.getElementById('menu-list');
    menu.classList.toggle('collapsed');
    
    // Toggle list-style for the menu items
    var menuItems = document.querySelectorAll('#menu-list li');
    menuItems.forEach(function(item) {
        item.style.listStyle = menu.classList.contains('collapsed') ? 'none' : 'inherit';
    });

    // Add or remove 'opened' class based on the collapse state
    if (!menu.classList.contains('collapsed')) {
        menu.classList.add('opened');
    } else {
        menu.classList.remove('opened');
    }
}

$(document).ready(function () {
    // Smooth scrolling for internal links with offset
    $('a[href^="#"]').on('click', function (event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - $('nav').outerHeight()
            }, 1000);

            // Close the menu after clicking a link (for smaller screens)
            var menu = document.getElementById('menu-list');
            menu.classList.add('collapsed');
        }
    });
});
