window.onload = function() {
    setupBurgerMenu();
    setupScrollEffect();
    setupNavLinks();
}

function setupBurgerMenu() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navigation = document.getElementById('navigation');
    
    burgerMenu.addEventListener('click', function() {
        if (navigation.classList.contains('scrolled')) {
            navigation.classList.remove('scrolled');
        } else {
            navigation.classList.add('scrolled');
        }

        this.classList.toggle('active');
        navigation.classList.toggle('active');
    });

    
}

function setupScrollEffect() {
    const navigation = document.getElementById('navigation');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50 && !navigation.classList.contains('active')) {
            navigation.classList.add('scrolled');
        } else {
            navigation.classList.remove('scrolled');
        }        
    });
}

function setupNavLinks() {
    const navLinks = document.querySelectorAll('nav');
    const burgerMenu = document.querySelector('.burger-menu');
    const navigation = document.getElementById('navigation');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            navigation.classList.remove('active');

            if (window.scrollY > 50) {
                navigation.classList.add('scrolled');
            } else {
                navigation.classList.remove('scrolled');
            }
        });
    });
}