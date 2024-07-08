import { useState, useEffect } from "react";
import ListaItens from "./components/ListaItens";
import FormAdicionarItens from "./components/FormAdicionarItens";
import { ItemEstoque } from "./types";
import estoque from "./estoque.json";

function App() {

  const [itens, setItens] = useState<ItemEstoque[]>([]);

  useEffect(()=>{
    setItens(estoque.itens);
  }, [])

  const adicionarItem = (item: ItemEstoque)=>{
    setItens(itensAgora => [...itensAgora, item])
  }

  const deletarItem = (id: number)=>{
    setItens((itensAgora:ItemEstoque[])=>
      [...itensAgora.filter((item:ItemEstoque)=> item.id !== id)])
  }

  return (
    <div>
      <h1>Controle de Estoque</h1>
      <FormAdicionarItens adicionaItem = {adicionarItem}/>
      <ListaItens listaItens = {itens} handleDelItem = {deletarItem}/>
    </div>
  );
}

export default App;
