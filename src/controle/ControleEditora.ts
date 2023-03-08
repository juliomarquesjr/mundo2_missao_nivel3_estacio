import { Editora } from "../modelo/Editora";

export class ControleEditora {
  editoras: Editora[] = [
    { nome: "Julio", codEditora: 1 },
    { nome: "Kauan", codEditora: 2 },
    { nome: "Ruan", codEditora: 3 },
    { nome: "Diego", codEditora: 4 },
  ];

  getNomeEditora(cod: number) {
    return this.editoras.filter((editora) => { return editora.codEditora === cod })
  }

  getEditoras() {
    return this.editoras;
  }
}
