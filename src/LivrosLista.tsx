import React from "react";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

import { Livro } from "./modelo/Livro";

type PropsLinhaLivro = {
  livro: Livro;
};

const LinhaLivro = ({ livro }: PropsLinhaLivro) => {
  const editora = new ControleEditora();

  return (
    <React.Fragment>
      <tr>
        <th scope="row">
          <p>{livro.titulo}</p>
          <button type="button" className="btn btn-danger btn-sm">
            Excluir
          </button>
        </th>
        <td>{livro.resumo}</td>
        <td>
          {editora.getNomeEditora(livro.codEditora).map((nomeEditora) => {
            return nomeEditora.nome;
          })}
        </td>
        <td>
          <ul>
            {livro.autores.map((nome) => {
              return <li>{nome}</li>;
            })}
          </ul>
        </td>
      </tr>
    </React.Fragment>
  );
};

export default function LivroLista() {
  const meusLivros = new ControleLivro();
  return (
    <main className="container">
      <h1>Catalogo de Livros</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Título</th>
            <th scope="col">Resumo</th>
            <th scope="col">Editora</th>
            <th scope="col">Autores</th>
          </tr>
        </thead>
        <tbody>
          {meusLivros.obterLivros().map((livro) => {
            return <LinhaLivro key={livro.codigo} livro={livro} />;
          })}
        </tbody>
      </table>
    </main>
  );
}
