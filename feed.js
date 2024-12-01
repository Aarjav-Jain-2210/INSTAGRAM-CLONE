async function fetchPosts() {
    const token = localStorage.getItem('authToken');
    const response = await fetch('http://localhost:5000/feed', {
      headers: { 'Authorization': `Bearer ${token}` }
    });
    const posts = await response.json();
    displayPosts(posts);
  }
  
  function displayPosts(posts) {
    const container = document.getElementById('post-container');
    container.innerHTML = ''; // Clear previous content
    posts.forEach(post => {
      const postElement = document.createElement('div');
      postElement.innerHTML = `
        <img src="${post.imageUrl}" alt="Post image">
        <p>${post.caption}</p>
      `;
      container.appendChild(postElement);
    });
  }
  
  // Call the fetchPosts function when the page loads
  document.addEventListener('DOMContentLoaded', fetchPosts);
  