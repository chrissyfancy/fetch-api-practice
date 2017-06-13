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
  .then(response => { return response.json() })
  .then(responseBody => {
    console.log('responseBody', responseBody);
    let bodyParsed = JSON.parse(responseBody);
  })
  .catch(error => console.error(`(Error in fetch: ${error.message})`));
