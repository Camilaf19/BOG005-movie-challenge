export const requestDataSearch = (inputValue, pageNumber) => {
  const urlApi = 'http://www.omdbapi.com/?'
  const keyApi = 'apikey=976526ea'
  return fetch(urlApi + keyApi + `&s=${inputValue}` + `&page=${pageNumber}`)
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

export const requestDataMovies = (genderValue) => {
  const urlApi = 'http://www.omdbapi.com/?'
  const keyApi = 'apikey=976526ea'
  return fetch(
    urlApi + keyApi + `&s=${genderValue}` + '&type=movie' + '&page=1'
  )
    .then((response) => response.json())
    .then((data) => data)
}

export const requestDataSeries = (genderValue) => {
  const urlApi = 'http://www.omdbapi.com/?'
  const keyApi = 'apikey=976526ea'
  return fetch(
    urlApi + keyApi + `&s=${genderValue}` + '&type=series' + '&page=1'
  )
    .then((response) => response.json())
    .then((data) => data)
}

export const requestDataDetails = (id) => {
  const urlApi = 'http://www.omdbapi.com/?'
  const keyApi = 'apikey=976526ea'
  return fetch(urlApi + keyApi + `&i=${id}`)
    .then((response) => response.json())
    .then((data) => data)
}
