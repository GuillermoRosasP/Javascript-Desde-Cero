


document.addEventListener("DOMContentLoaded", () => {
    loadComments();
});

document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    addComment();
});

function addComment() {
    const username = document.getElementById("username").value.trim();
    const commentText = document.getElementById("commentText").value.trim();
    if (username === "" || commentText === "") return;
    
    const comment = {
        id: Date.now(),
        user: username,
        text: commentText,
        date: new Date().toLocaleString()
    };
    
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment);
    localStorage.setItem("comments", JSON.stringify(comments));
    
    document.getElementById("commentForm").reset();
    loadComments();
}

function loadComments() {
    const commentsContainer = document.getElementById("commentsContainer");
    commentsContainer.innerHTML = "";
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    
    comments.forEach(comment => {
        const commentElement = document.createElement("div");
        commentElement.classList.add("comment");
        commentElement.innerHTML = `
            <p><strong>${comment.user}</strong> (${comment.date})</p>
            <p>${comment.text}</p>
            <button class="delete-btn" onclick="deleteComment(${comment.id})">Eliminar</button>
        `;
        commentsContainer.appendChild(commentElement);
    });
}

function deleteComment(id) {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments = comments.filter(comment => comment.id !== id);
    localStorage.setItem("comments", JSON.stringify(comments));
    loadComments();
}




