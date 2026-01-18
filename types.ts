export enum Status {
  PENDING = 'Pendente',
  APPROVED = 'Aprovado',
  REJECTED = 'Reprovado',
  DRAFT = 'Rascunho',
  SENT = 'Enviado',
  DELIVERED = 'Entregue',
  QUOTATION = 'Em Cotação'
}

export interface Project {
  id: string;
  name: string;
  location: string;
  progress: number;
  financialProgress: number;
  status: string;
  image: string;
}

export interface Budget {
  id: string;
  client: string;
  title: string;
  value: number;
  date: string;
  status: Status;
}

export interface SupplyOrder {
  id: string;
  project: string;
  supplier: string;
  total: number;
  status: Status;
  image: string;
}

export interface Invoice {
  id: string;
  number: string;
  client: string;
  date: string;
  value: number;
  status: 'Emitida' | 'Pendente' | 'Cancelada';
}
