document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('blogPosts');
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if(blogPosts.length > 0) {
        blogPosts.forEach(function(post) {
            const postDiv = document.createElement('div');
            postDiv.classList.add('blog-post'); 
            postDiv.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <p><em>Posted By ${post.username} on ${new Date(post.date).toLocaleDateString()}</em></p>
            `;
            postsContainer.appendChild(postDiv);
        });
    } else {
        postsContainer.innerHTML = '<p>No blog posts found.</p>';
    }
});

