// import logo from './logo.svg';
import "./App.css";
import NavBar from "./Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonsPage from "./Pages/PokemonsPage";
import GenerationsPage from "./Pages/GenerationsPage";


function App() {
  return (<>
      <BrowserRouter>
      <NavBar />
      <Routes> 
        <Route path="/" element={<PokemonsPage />} />
        <Route path="/pokemons" element={<PokemonsPage />} />
        <Route path="/generations" element={<GenerationsPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
