document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const bookTableBody = document.querySelector('#bookTable tbody');

    bookForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const genre = document.getElementById('genre').value;

        addBookToTable(title, author, genre);

        bookForm.reset();
    });

    function addBookToTable(title, author, genre) {
        const row = document.createElement('tr');
        
        const titleCell = document.createElement('td');
        titleCell.textContent = title;
        row.appendChild(titleCell);

        const authorCell = document.createElement('td');
        authorCell.textContent = author;
        row.appendChild(authorCell);

        const genreCell = document.createElement('td');
        genreCell.textContent = genre;
        row.appendChild(genreCell);

        bookTableBody.appendChild(row);
    }
});
