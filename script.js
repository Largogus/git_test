const button = document.getElementById('captcha-checkbox');

button.addEventListener('change', function() {
    setTimeout(function() {
        if (button.checked) {
            alert("Спасибо что помогаете");
        }
    }, 100)
});