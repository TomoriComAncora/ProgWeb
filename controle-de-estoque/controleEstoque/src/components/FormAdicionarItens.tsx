import { useState } from "react";
import { ItemEstoque } from "../types";

interface FormularioProps {
  adicionaItem: (item: ItemEstoque) => void;
}

function FormAdicionarItens({ adicionaItem }: FormularioProps) {
  const [novoItem, setNovoItem] = useState<ItemEstoque>({
    id: 0,
    nome: "",
    quantidade: 0,
    preco: 0,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setNovoItem((itemAgora) => ({
      ...itemAgora,
      [name]:
        name === "quantidade" || name === "preco" ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    adicionaItem({ ...novoItem, id: Math.random() });
    setNovoItem({
      id: 0,
      nome: "",
      quantidade: 0,
      preco: 0,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="nome"
          value={novoItem.nome}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Quantidade:</label>
        <input
          type="number"
          name="quantidade"
          value={novoItem.quantidade}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="number"
          name="preco"
          value={novoItem.preco}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Adicionar Item</button>
    </form>
  );
}

export default FormAdicionarItens;
