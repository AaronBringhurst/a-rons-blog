document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('blogForm');
    const errorMessage = document.getElementById('errorMessage');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const username = form.elements['username'].value.trim();
        const title = form.elements['title'].value.trim();
        const content = form.elements['content'].value.trim();

        if (!username || !title || !content) {
            errorMessage.style.display = 'block';
            return; 
        } else {
            errorMessage.style.display = 'none';
        }

        const formData = { username, title, content, date: new Date().toISOString() };
        const posts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        posts.unshift(formData);
        localStorage.setItem('blogPosts', JSON.stringify(posts));
        window.location.href = 'blog.html'; // Redirect to posts page
    });
});