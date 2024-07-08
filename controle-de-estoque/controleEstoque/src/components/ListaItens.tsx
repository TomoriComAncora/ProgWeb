import { ItemEstoque } from "../types";

interface ListaItemProps {
  listaItens: ItemEstoque[];
  handleDelItem: (id: number) => void;
}

function ListaItens({ listaItens, handleDelItem }: ListaItemProps) {
  return (
    <div>
      <h1>Lista de Itens do estoque</h1>
      <ul>
      {listaItens?.map((item)=>(
        <li key={item.id}>
            <h2>Nome: {item.nome}</h2>
            <p>Quantidade: {item.quantidade}</p>
            <p>Preço: {item.quantidade}</p>
            <button onClick={() => handleDelItem(item.id)}>X</button>
        </li>
            
          ))}
      </ul>
    </div>
  );
}

export default ListaItens;
