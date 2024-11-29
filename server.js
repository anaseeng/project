const API_URL = 'http://127.0.0.1:5000';
let token = localStorage.getItem('token');

// Login User
async function loginUser(email, password) {
    const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
        const data = await res.json();
        localStorage.setItem('token', data.token);
        window.location.href = 'tasksmanager.html';
    } else {
        alert(await res.text());
    }
}

// Register User
async function registerUser(email, password) {
    const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
        alert('User registered! Please log in.');
        window.location.href = 'login.html';
    } else {
        alert(await res.text());
    }
}

// Fetch and Display Documents
async function loadDocuments() {
    const res = await fetch(`${API_URL}/documents`, {
        method: 'GET',
        headers: { Authorization: token },
    });
    if (res.ok) {
        const documents = await res.json();
        const cardsContainer = document.querySelector('.task-cards');
        cardsContainer.innerHTML = '';
        documents.forEach((doc, index) => {
            cardsContainer.innerHTML += `
                <div class="task-card">
                    <h3>${doc.title}</h3>
                    <p>${doc.description}</p>
                    <button onclick="deleteDocument(${index})">Delete</button>
                </div>
            `;
        });
    } else {
        alert(await res.text());
    }
}

// Save Document
async function saveDocument(title, description, image) {
    const res = await fetch(`${API_URL}/documents`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify({ title, description, image }),
    });
    if (res.ok) {
        alert('Document saved');
        window.location.href = 'tasksmanager.html';
    } else {
        alert(await res.text());
    }
}

// Delete Document
async function deleteDocument(id) {
    const res = await fetch(`${API_URL}/documents/${id}`, {
        method: 'DELETE',
        headers: { Authorization: token },
    });
    if (res.ok) {
        alert('Document deleted');
        loadDocuments();
    } else {
        alert(await res.text());
    }
}
