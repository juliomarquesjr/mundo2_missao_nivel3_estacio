import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LivroLista from "./LivrosLista";
import LivroDados from "./LivrosDados";

export default function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="catalogo" element={<LivroLista />} />
          <Route path="novo" element={<LivroDados />} />
          <Route path="/" element={<LivroLista />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}
