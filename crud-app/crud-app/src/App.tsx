import { useState } from "react";
import { Item } from "./types";

function App() {
  const [itens, setItens] = useState<Item[]>([]);
  const [editandoItem, setEditandoItem] = useState<Item | null>(null);

  const handleadicionarOuEditar = (item: Item) => {
    if (item.id === 0) {
      item.id = Math.random();
      setItens((itensAgora) => [...itensAgora, item]);
    } else {
      setItens((itensAgora) =>
        itensAgora.map((elemento: Item) => (elemento.id ? item : elemento))
      );
    }
    setEditandoItem(null);
  };

  const editarItem = (item: Item)=>{
    setEditandoItem(item);
  }

  const cancelarEdicao = (id: number) =>{
    setItens(itensAgora => itensAgora.filter(item => item.id !== id))
  }

  const deletarItem = (id: number)=>{
    setItens(itensAgora => itensAgora.filter((item: Item)=> item.id !== id));
  }


  return(
    <div>
      <h1>Gerenciamento de Itens</h1>
      <p>FormularioItem</p>
      <p>LiataItens</p>
    </div>
  )
}

export default App;
