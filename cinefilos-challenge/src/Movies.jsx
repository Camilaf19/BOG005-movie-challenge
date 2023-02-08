import { requestDataMovies } from './requests'
import { useEffect /* useState */ } from 'react'

export const Movies = () => {
/*   const [movies, setMovies] = useState([]) */

  useEffect(() => {
    requestDataMovies().then((res) => {
      console.log(res)
      /* setMovies(res.Search) */
    })
  }, [])

  return <h1>hi</h1>
}
