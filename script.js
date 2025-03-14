
const books = [
    { title: "کتاب اول", author: "نویسنده 1", downloadLink: "", description: "توضیحات درباره کتاب اول" },
    { title: "کتاب دوم", author: "نویسنده 2", downloadLink: "#", description: "توضیحات درباره کتاب دوم" },
    { title: "کتاب سوم", author: "نویسنده 3", downloadLink: "#", description: "توضیحات درباره کتاب سوم" }
];

const bookList = document.getElementById('book-list');
const searchInput = document.getElementById('search');

function displayBooks(filteredBooks) {
    bookList.innerHTML = '';
    filteredBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p>نویسنده: ${book.author}</p>
            <p>${book.description}</p>
            <a href="${book.downloadLink}" target="_blank">دانلود</a>
        `;
        bookList.appendChild(bookDiv);
    });
}

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = books.filter(book => book.title.toLowerCase().includes(searchTerm));
    displayBooks(filteredBooks);
});

displayBooks(books);
    