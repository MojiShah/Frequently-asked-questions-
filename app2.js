const faqs = document.querySelectorAll('.faq');


faqs.forEach(faq => {
    console.log(faq);

    faq.addEventListener('click', () => {
        console.log('clicked');
        faqs.forEach(tog => {
            tog.classList.remove('active');
        })
        faq.classList.toggle('active');
    })
});

