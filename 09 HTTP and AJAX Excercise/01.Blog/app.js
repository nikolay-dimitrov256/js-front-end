function attachEvents() {
    const baseUrl = 'http://localhost:3030/jsonstore/blog';
    let allPosts = null;

    // Get elements
    const loadButtonElement = document.getElementById('btnLoadPosts');
    const postsMenuElement = document.getElementById('posts');
    const viewButtonElement = document.getElementById('btnViewPost');
    const postTitleElement = document.getElementById('post-title');
    const postBodyElement = document.getElementById('post-body');
    const commentsUlElement = document.getElementById('post-comments');

    // Add event listenet to load posts button
    loadButtonElement.addEventListener('click', async () => {
        const response = await fetch(`${baseUrl}/posts`);
        const posts = await response.json();
        allPosts = posts;

        const optionsFragment = document.createDocumentFragment();

        for (const key in posts) {
            const optionElement = document.createElement('option');
            optionElement.value = key;
            optionElement.textContent = posts[key]['title']

            optionsFragment.appendChild(optionElement);
        }

        postsMenuElement.appendChild(optionsFragment);
    })

    // Add event listener to View button
    viewButtonElement.addEventListener('click', async () => {
        const optionElement = postsMenuElement.selectedOptions[0];

        postTitleElement.textContent = optionElement.textContent;
        postBodyElement.textContent = allPosts[optionElement.value]['body'];

        commentsUlElement.innerHTML = '';
        const commentsFragment = document.createDocumentFragment();
        
        const response = await fetch(`${baseUrl}/comments`);
        const comments = await response.json();
        Object.values(comments)
                        .filter(comment => comment.postId === optionElement.value)
                        .map(comment => {
                            const liElement = document.createElement('li');
                            liElement.textContent = comment.text;
                            return liElement;
                        })
                        .forEach(liElement => commentsFragment.appendChild(liElement));
                    
        commentsUlElement.appendChild(commentsFragment);
    })
}

attachEvents();