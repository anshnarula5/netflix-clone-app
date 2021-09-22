import "./App.css"
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";
function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title="Originals" fetchUrl={requests.fetchNetflixOriginals} isLarge/>
      <Row title="Trending" fetchUrl={requests.fetchTrending}/>
      <Row title="Top rated" fetchUrl={requests.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
    </div>
  );
}

export default App;
