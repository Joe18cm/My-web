document.addEventListener('DOMContentLoaded', function () {
    // Аккордеон
    var accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            var content = this.nextElementSibling;
            
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                var activeContent = document.querySelector('.accordion-content[style*="max-height"]');
                if (activeContent) activeContent.style.maxHeight = null;
                
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });

    // Плавная прокрутка
    var menuLinks = document.querySelectorAll('nav .menu a');

    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            var targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


