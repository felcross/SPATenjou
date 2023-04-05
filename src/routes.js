import PaginaPadrao from "components/PaginaPadrao";
import Rodape from "components/Rodape";
import ScrollToTop from "components/ScrollToTop";
import NaoEncontrada from "pages/NaoEncontrada";
import Post from "pages/Post";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Inicio from './pages/Inicio';
import Combate from './pages/Combate';
import Historia from './pages/Historia';
import TabelaPoderes from './pages/TabelaPoderes';

function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Menu />

      <Routes>
        <Route path="/" element={<PaginaPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="combate" element={<Combate />} />
          <Route path="historia" element={<Historia />} />
          <Route path="tabeladepoderes" element={<TabelaPoderes />} />
          
        </Route>
        
        <Route path="posts/:id/*" element={<Post />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
