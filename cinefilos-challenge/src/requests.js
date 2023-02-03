export const requestDataSearch = (inputValue) => {
  const urlApi = 'http://www.omdbapi.com/?'
  const keyApi = 'apikey=976526ea'
  return fetch(urlApi + keyApi + `&s=${inputValue}` + '&page=1')
    .then((response) => response.json())
    .then((data) => data)
}

export const requestDataMovieCardHome = () => {
  const urlApi = 'http://www.omdbapi.com/?'
  const keyApi = 'apikey=976526ea'
  return fetch(urlApi + keyApi + '&t=avatar+the+way+of+water')
    .then((response) => response.json())
    .then((data) => data)
}

export const requestDataSerieCardHome = () => {
  const urlApi = 'http://www.omdbapi.com/?'
  const keyApi = 'apikey=976526ea'
  return fetch(urlApi + keyApi + '&t=game+of+thrones')
    .then((response) => response.json())
    .then((data) => data)
}
