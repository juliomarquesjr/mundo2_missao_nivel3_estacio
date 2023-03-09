import React from "react";
import Menu from "./Menu";
import { Livro } from "./modelo/Livro";
import { ControleLivro } from "./controle/ControleLivros";
import { useNavigate } from "react-router-dom";

type Props = {
  livros: ControleLivro;
};

export default function LivroDados({ livros }: Props) {
  const navigate = useNavigate();

  function cadastrarLivro(event: React.FormEvent) {
    event.preventDefault();

    const novoLivro = new Livro(1, 2, "teste", "resumo de teste", ["Julio"]);
    livros.incluir(novoLivro);
    navigate("/catalogo");
  }

  return (
    <React.Fragment>
      <Menu />
      <main className="container">
        <h1>Dados Livro</h1>
        <form onSubmit={(event) => cadastrarLivro(event)}>
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
