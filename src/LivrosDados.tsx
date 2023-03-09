import React from "react";
import Menu from "./Menu";

export default function LivroDados() {
  return (
    <React.Fragment>
      <Menu />
      <main className="container">
        <h1>Dados Livro</h1>
        <form>
          {/* Input Titulo: Inicio */}
          <div className="form-group">
            <label htmlFor="titulo">Título</label>
            <input
              id="titulo"
              type="text"
              className="form-control"
              placeholder="Titulo do livro"
            />
          </div>
          {/* Input Titulo: Fim */}

          {/* Text Area Resumo: Inicio */}
          <div className="form-group mt-2">
            <label htmlFor="resumo">Resumo</label>
            <textarea id="resumo" className="form-control" rows={3}></textarea>
          </div>
          {/* Text Area Resumo: Fim */}

          {/* Select Editora: Inicio */}
          <div className="form-group mt-2">
            <label htmlFor="editora">Editora</label>
            <select id="editora" className="form-control">
              <option>Editora 1</option>
              <option>Editora 2</option>
              <option>Editora 3</option>
            </select>
          </div>
          {/* Select Editora: Fim */}

          {/* TextArea Autores: Inicio */}
          <div className="form-group mt-2">
            <label htmlFor="autores">Autores (1 por linha)</label>
            <textarea id="autores" className="form-control" rows={3}></textarea>
          </div>
          {/* Text Area Autores: Fim */}

          <button type="submit" className="btn btn-primary mt-2">
            Salvar dados
          </button>
        </form>
      </main>
    </React.Fragment>
  );
}
