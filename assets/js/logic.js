document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('blogForm');
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            username: form.elements['username'].value,
            title: form.elements['title'].value,
            content: form.elements['content'].value,
            date: new Date().toISOString() // store's the date of submission
        };

        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.unshift(formData);
        localStorage.setItem('blogPosts', JSON.stringify(posts));
        window.location.href = 'blog.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const modeToggle = document.getElementById('toggle');
    const body = document.body;

    function toggleDarkMode(event) {
        event.preventDefault;
        body.classList.toggle('dark-mode');
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('mode', 'dark');
            modeToggle.textContent = 'Toggle Light Mode';
        } else {
            localStorage.setItem('mode', 'light');
            modeToggle.textContent = 'Toggle Dark Mode';
        }
    }

    if (localStorage.getItem('mode') === 'dark') {
        body.classList.add('dark-mode');
        modeToggle.textContent = 'Toggle Light Mode';
    }
    if (modeToggle){
    modeToggle.addEventListener('click', toggleDarkMode);
    }

});