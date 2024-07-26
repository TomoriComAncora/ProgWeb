import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Transacao } from "../../types"

interface FormularioTransacaoProps{
    transacaoAtual: Transacao;
    salvarTransacao: (transacao: Transacao) => void;
    cancelarEdicao: ()=> void;
}

function FormularioTransacao({transacaoAtual, salvarTransacao, cancelarEdicao}: FormularioTransacaoProps) {
  const [transacao, setTransacao] = useState<Transacao>({
    id: 0,
    tipo: 'receita',
    descricao: '',
    valor: 0,
  });

  useEffect(()=>{
    if(transacaoAtual){
      setTransacao(transacaoAtual);
    }
  }, [transacaoAtual]);

  const handleChange = (e: ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
    const {name, value} = e.target;
    setTransacao(prevTransacao=>({
      ...prevTransacao,
      [name]: name === 'valor' ? parseFloat(value) : value
    }))
  };

  const handleSubimt = (e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    salvarTransacao(transacao);
    setTransacao({
      id: 0,
      tipo: 'receita',
      descricao: '',
      valor: 0
    });
  };

  return (
    <form onSubmit={handleSubimt}></form>
  )
}

export default FormularioTransacao