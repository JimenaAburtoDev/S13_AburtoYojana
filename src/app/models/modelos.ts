export interface Categoria {
  id: number;
  nombre: string;
  icono: string;
  descripcion: string;
}

export interface Plato {
  id: number;
  nombre: string;
  categoriaId: number;
  precio: number;
  disponible: boolean;
  descripcion: string;
}

export interface Mesa {
  id: number;
  numero: number;
  capacidad: number;
  estado: 'Libre' | 'Ocupada' | 'Reservada';
}

export interface Pedido {
  id: number;
  mesaNumero: number;
  platos: string[];
  total: number;
  estado: 'Pendiente' | 'En cocina' | 'Entregado';
  hora: string;
}
