export interface ItemEstoque {
  id: number;
  nome: string;
  quantidade: number;
  preco: number;
}

export interface EstoqueData {
    itens: ItemEstoque[];
}