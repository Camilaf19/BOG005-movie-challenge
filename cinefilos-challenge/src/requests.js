export const requestData = (inputValue) => {
  const urlApi = 'http://www.omdbapi.com/?'
  const keyApi = 'apikey=976526ea'
  return fetch(urlApi + keyApi + `&s=${inputValue}` + '&page=1')
    .then((response) => response.json())
    .then((data) => data)
}
