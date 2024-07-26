import { Transacao } from '../../types'

interface ListaTransacoesProps{
    transacoes: Transacao[];
    editarTransacao: (trasacao: Transacao) => void;
    deletarTransacao: (id: number) => void;
}

function ListaTransacoes({transacoes, editarTransacao, deletarTransacao}: ListaTransacoesProps) {
  return (
    <div>
        <h2>Lista de Transações</h2>
        <ul>{transacoes.map((item)=>(
            <li key={item.id}>
                <h3>{item.descricao}</h3>
                <p>Tipo: {item.tipo}</p>
                <p>Valor: {item.valor}</p>
                <button onClick={()=> editarTransacao(item)}>Editar</button>
                <button onClick={()=> deletarTransacao(item.id)}>Deletar</button>
            </li>
        ))}</ul>
    </div>
  )
}

export default ListaTransacoes