import { useEffect, useState } from "react";
import { Item } from "../types";

interface FormularioItensProps {
  itemAtual?: Item;
  salvarItem: (item: Item) => void;
  cancelarEdicao: () => void;
}

function FormularioItem({
  itemAtual,
  salvarItem,
  cancelarEdicao,
}: FormularioItensProps) {
  const [item, setItem] = useState<Item>({
    id: 0,
    nome: "",
    descricao: "",
  });

  useEffect(() => {
    if (itemAtual) {
      setItem(itemAtual);
    }
  }, [itemAtual]);

  const handleChange = (e: any)=>{
    const {name, value} = e.target;
    setItem(prevItem=>({
        ...prevItem,
        [name]: value
    }))
  }

  const handleSubmit = (e:any)=>{
    e.preventDefault();
    salvarItem(item);
    setItem({
        id: 0,
        nome: "",
        descricao: ""
    })
  }

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label>Nome:</label>
            <input type="text" name="nome" value={item.nome} onChange={handleChange}/>
        </div>
        <div>
            <label>Descrição:</label>
            <textarea name="descricao" value={item.descricao} onChange={handleChange}></textarea>
        </div>
        <button type="submit">Salvar</button>
        {itemAtual && <button type="button" onClick={cancelarEdicao}>Cancelar</button>}
    </form>
  )
}

export default FormularioItem;
