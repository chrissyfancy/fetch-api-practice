fetch('http://localhost:4567/books.json')
  .then(response => {
    if (response.ok) {
      return response;
    } else {
      let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
      throw(error);
    }
  })
  .then(response => response.text())
  .then(response => {
    console.log('response', response);
    let bodyParsed = JSON.parse(response);
    return bodyParsed;
  })
  .then(bodyParsed => {
    let list = document.getElementById('books');
    bodyParsed.books.forEach((book) => {
      list.innerHTML += `<li>${book.name}</li>`;
    })
  })
  .catch(error => console.error(`(Error in fetch: ${error.message})`));
