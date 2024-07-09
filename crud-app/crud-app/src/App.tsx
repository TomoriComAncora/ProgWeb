import { useState } from "react";
import { Item } from "./types";
import ListarItens from "./components/ListarItens";
import FormularioItem from "./components/FormularioItem";
import seedData from "./seedData";

function App() {
  const [itens, setItens] = useState<Item[]>(seedData);
  const [editandoItem, setEditandoItem] = useState<Item | null>(null);

  const handleadicionarOuEditar = (item: Item) => {
    if (item.id === 0) {
      item.id = Math.random();
      setItens((itensAgora) => [...itensAgora, item]);
    } else {
      setItens((itensAgora) =>
        itensAgora.map((elemento: Item) => (elemento.id === item.id ? item : elemento))
      );
    }
    setEditandoItem(null);
  };

  const editarItem = (item: Item) => {
    setEditandoItem(item);
  };

  const cancelarEdicao = (id: number) => {
    setItens((itensAgora) => itensAgora.filter((item) => item.id !== id));
  };

  const deletarItem = (id: number) => {
    setItens((itensAgora) => itensAgora.filter((item: Item) => item.id !== id));
  };

  return (
    <div>
      <h1>Gerenciamento de Itens</h1>
      <FormularioItem
        itemAtual={editandoItem}
        salvarItem={handleadicionarOuEditar}
        cancelarEdicao={cancelarEdicao}
      />
      <ListarItens
        itens={itens}
        editarItem={editarItem}
        deletarItem={deletarItem}
      />
    </div>
  );
}

export default App;
