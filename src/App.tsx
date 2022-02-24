import { Header } from './components/Header';
import { Content } from './components/Content';
import { Footer } from './components/Footer';
import { useEffect } from 'react';
import { getMovieInfo } from './client/client'

function App() {

  useEffect(() => {
    const loadItems = async () => {
      let list = await getMovieInfo(28)
      console.log(list.results[15])
    }
    //https://image.tmdb.org/t/p/w300

    loadItems()
  }, [])

  return (
    <div className="App">
      <Header />

      <Content />

      <Footer />
    </div>
  );
}

export default App;
