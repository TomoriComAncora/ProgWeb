import { useState } from "react";
import ListaTransacoes from "./components/ListaTransacoes";
import FormularioTransacao from "./components/FormularioTransacao";
import SaldoAtual from "./components/SaldoAtual";
import { Transacao } from "./types";

function App() {
  const [transacoes, setTransacoes] = useState<Transacao[]>([]);
  const [editandoTransacao, setEditandoTransacao] = useState<Transacao | null>(
    null
  );

  const adicionarOuEditarTransacao = (transacao: Transacao) => {
    if (transacao.id === 0) {
      transacao.id = Math.random();
      setTransacoes((prevTransacoes) => [...prevTransacoes, transacao]);
    } else {
      setTransacoes((prevTransacoes) =>
        prevTransacoes.map((item) =>
          item.id === transacao.id ? transacao : item
        )
      );
    }
    setEditandoTransacao(null);
  };

  const editarTransacao = (transacao: Transacao) => {
    setEditandoTransacao(transacao);
  };

  const deletarTransacao = (id: number) => {
    setTransacoes((prevTransacoes) =>
      prevTransacoes.filter((trasacao) => trasacao.id !== id)
    );
  };

  const cancelarEdicao = ()=>{
    setEditandoTransacao(null);
  };

  return (
    <div>
      <h1>Gestão de gastos</h1>
      <SaldoAtual transacoes={transacoes}/>
      <FormularioTransacao
        transacaoAtual={editandoTransacao}
        salvarTransacao={adicionarOuEditarTransacao}
        cancelarEdicao={cancelarEdicao}
      />
      <ListaTransacoes
        transacoes={transacoes}
        editarTransacao={editarTransacao}
        deletarTransacao={deletarTransacao}
      />
    </div>
  );
}

export default App;
