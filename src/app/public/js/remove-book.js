let booksTable = document.querySelector("#books");

booksTable.addEventListener("click", (event) => {
  let target = event.target;

  if (target.dataset.type == 'remove') {
    let bookId = target.dataset.ref;
    fetch(`http://localhost:3000/books/${bookId}`, {method: 'DELETE'})
      .then(response => {
        let tr = target.closest(`#book_${bookId}`);
        tr.remove();
      }) 
      .catch(error => console.log(error));
  }
})