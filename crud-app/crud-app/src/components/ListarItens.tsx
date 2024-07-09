import { Item } from "../types";

interface ListarItensProps {
  itens: Item[];
  editarItem: (item: Item) => void;
  deletarItem: (id: number) => void;
}

function ListarItens({ itens, editarItem, deletarItem }: ListarItensProps) {
  return (
    <div>
      <h2>Lista de Itens</h2>
      <ul>
        {itens.map((item: Item) => (
          <li key={item.id}>
            <h3>{item.nome}</h3>
            <p>{item.descricao}</p>
            <button onClick={() => editarItem(item)}>Editar</button>
            <button onClick={() => deletarItem(item.id)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListarItens;
