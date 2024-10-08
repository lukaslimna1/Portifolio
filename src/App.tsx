// src/App.tsx
import React from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css"; // Importa o CSS global
import Home from "./paginas/home";
import Trabalhos from "./paginas/trabalhos";
import TrabalhoDetalhes from "./paginas/TrabalhoDetalhes"; // Importa o componente de detalhes
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Curriculo from "./paginas/curriculo";

const App: React.FC = () => {
  // Função para gerar slug a partir do título
  return (
    <div className='content'>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/trabalhos'
          element={<Trabalhos />}
        />
        {/* Rota para detalhes */}
        <Route
          path='/trabalhos/:slug'
          element={<TrabalhoDetalhes />}
        />{" "}
        <Route
          path='/curriculo'
          element={<Curriculo />}
        />
      </Routes>
    </div>
  );
};

export default App;
