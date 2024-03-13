const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(toggle => {
   
    toggle.addEventListener('click', () => {
        toggles.forEach(tog => {
            tog.parentElement.classList.remove('active');
        })
        toggle.parentElement.classList.toggle('active');
    })
});

