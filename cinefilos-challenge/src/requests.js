export const requestData = () => {
  return fetch('http://www.omdbapi.com/?apikey=976526ea&t=&type=movie')
    .then((response) => response.json())
    .then((data) => data)
}
